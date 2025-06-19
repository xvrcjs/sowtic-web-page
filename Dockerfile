FROM node:18-alpine

WORKDIR /app

# Copia los archivos del proyecto al directorio de trabajo
COPY package.json .

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Construye la aplicación React con Vite
RUN npm run build

# Expone el puerto 8080 en el contenedor
EXPOSE 8080

# Comando para ejecutar la aplicación
CMD ["npm", "run", "preview"]