FROM node:18-alpine AS builder

WORKDIR /app

# ARG FASTAPI_URL
# ARG CHATBOT_URL

# RUN echo "FASTAPI_URL=$FASTAPI_URL" > .env
# RUN echo "CHATBOT_URL=$CHATBOT_URL" >> .env

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# nginx
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
# COPY ./src/assets /usr/share/nginx/html/src/assets
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]