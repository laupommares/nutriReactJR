# Usamos Node 20
FROM node:20-alpine

WORKDIR /app

# Copiamos package.json y package-lock.json
COPY package*.json ./

# Instalamos dependencias
RUN npm install --include=dev

# Copiamos el resto del proyecto
COPY . .

# Exponemos el puerto de Vite
EXPOSE 5173

# Comando para levantar Vite escuchando en todas las interfaces
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
