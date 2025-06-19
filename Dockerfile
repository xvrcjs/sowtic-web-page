FROM node:18-alpine

WORKDIR /app

# Copia los archivos del proyecto al directorio de trabajo
COPY package.json .

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Genera Bootstrap migrado para las hojas de estilo
RUN mkdir -p src/styles/vendor \
    && cp -R node_modules/bootstrap/scss src/styles/vendor/bootstrap \
    && npx sass-migrator module "src/styles/vendor/bootstrap/**/*.scss" \
    && npx sass-migrator color-functions "src/styles/vendor/bootstrap/**/*.scss"

# Expone el puerto 8080 utilizado por Vite
EXPOSE 8080

# Ejecuta Vite como servidor de desarrollo
CMD ["npm", "run", "dev"]
