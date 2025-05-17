# Usa la imagen oficial de Node.js
FROM node:18

# Instala sqlite3 CLI
RUN apt-get update && apt-get install -y sqlite3

# Establece el directorio de trabajo
WORKDIR /app

# Copia solo los archivos necesarios primero para aprovechar la caché de Docker
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto del proyecto
COPY . .

# Ejecuta el script para crear la base de datos SQLite
RUN sqlite3 chart_data.db < init_db.sql

# Expone el puerto 3000
EXPOSE 3000

# Comando de inicio
CMD ["node", "server.js"]

