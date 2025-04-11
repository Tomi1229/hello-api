# 1. Fázis: build
FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build

# 2. Fázis: szerver
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
