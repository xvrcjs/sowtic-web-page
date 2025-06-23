FROM node:16-alpine

WORKDIR /app

# 1. Instala dependencias primero
COPY package*.json ./
# Copiamos los archivos de Bootstrap migrados para que npm pueda resolver las dependencias
# Copiamos el directorio vendor desde su ruta real para que Sass
# pueda importar Bootstrap correctamente durante el build
COPY ./src/styles/vendor ./src/styles/vendor
RUN npm install --legacy-peer-deps

# 2. Copia el resto del código
COPY . .
RUN npm run build
EXPOSE 8080
CMD ["npm", "run", "dev"]
