# Dockerfile in src/app/Dockerfile
FROM node:20-alpine

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["sh", "-c", "while ! nc -z postgres 5432; do sleep 1 && echo '>Reintentando conexion con BD...'; done; echo '> Conexion establecida con la BD!' && npm run dev"]