FROM node:18-alpine

WORKDIR /app

# 1. Instala dependencias primero
COPY package.json ./
RUN npm install

# 2. Copia el resto del código
COPY . .

# 3. Genera Bootstrap migrado (module + color) dentro de la imagen
RUN npm run bootstrap:migrate

# 4. Levanta el dev-server en 0.0.0.0:8080
CMD ["npm", "run", "dev"]
