CREAR archivo .env en G4-API con lo siguiente:
PORT=3000
HOST=localhost
DB_HOST=localhost
DB_NAME=cac-23643g4
DB_USER=root
DB_PASSWORD=''

donde administran su base de datos (phpmyadmin o workbench):
-Crear base de datos con el nombre 'cac-23643g4' o el el nombre de la variable de entorno anterior (DB_NAME)
-Luego importar cac-23643g4.sql ubicado en la raiz de G4-API, dentro de la base de datos creada previamente