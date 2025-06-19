FROM node:18-alpine

WORKDIR /app

# Copia los archivos del proyecto al directorio de trabajo
COPY package.json .

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Expone el puerto 8080 utilizado por Vite
EXPOSE 8080

# Ejecuta Vite como servidor de desarrollo
CMD ["npm", "run", "dev"]
