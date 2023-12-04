# G4-FRONT React + Vite

# G4-API NodeJS
    En ./G4-API correr el comando npm install

    CREAR archivo .env en ./G4-API con lo siguiente:
        PORT=3000
        HOST=localhost
        DB_HOST=localhost
        DB_NAME=cac-23643g4
        DB_USER=root
        DB_PASSWORD=''
        JWT_SECRET=ClaveSecreta

    Donde administran su base de datos (phpmyadmin o workbench):
        -Crear base de datos con el nombre 'cac-23643g4' o el nombre de la variable de entorno anterior (DB_NAME).
        -Luego importar cac-23643g4.sql ubicado en la raiz de ./G4-API, dentro de la base de datos creada previamente.

    Luego de tener las variables de entorno creadas y la base de datos creada e importada:
        -En ./G4-API correr el comando npm run dev