# Node.js 
FROM node:18-slim AS node-builder

# 작업 디렉토리 설정
WORKDIR /app

# 필수 파일들 복사
COPY package*.json /app/
RUN rm -rf node_modules package-lock.json && npm install
COPY tailwind.config.js /app/
COPY vite.config.js /app/
COPY postcss.config.cjs /app/
COPY .env /app/.env
COPY public/vite.svg /app/public/vite.svg
COPY src/ /app/src/
COPY index.html /app/

# 빌드 후 정적 파일을 빌드합니다.
RUN npm run build

# 포트 설정 (Node.js 앱 포트)
EXPOSE 5173

# Nginx
FROM nginx:alpine

# Nginx 설정 파일을 복사
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Node.js에서 빌드된 정적 파일 복사
COPY --from=node-builder /app/dist /usr/share/nginx/html

# Nginx의 port 80을 노출
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
