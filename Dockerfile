# Imagen base de Node.js
FROM node:18

# Instala sqlite3 (CLI)
RUN apt-get update && apt-get install -y sqlite3

# Crea el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto
COPY . .

# Inicializa y descarga dependencias
RUN npm install

# Ejecuta el script SQL para crear la base de datos
RUN sqlite3 chart_data.db < init_db.sql

# Expone el puerto 3000
EXPOSE 3000

# Comando para iniciar el servidor
CMD ["node", "server.js"]
