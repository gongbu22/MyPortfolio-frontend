FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# nginx
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nignx/html
COPY ./src/assets /usr/share/nginx/html/assets


EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]