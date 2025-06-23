FROM node:16-alpine

WORKDIR /app

# 1. Instala dependencias primero
COPY package*.json ./
# Copiamos los archivos de Bootstrap migrados para que npm pueda resolver las dependencias
COPY src/vendor ./src/vendor
RUN npm install --legacy-peer-deps

# 2. Copia el resto del código
COPY . .
RUN npm run build
EXPOSE 8080
CMD ["npm", "run", "dev"]
