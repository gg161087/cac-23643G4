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
        -Crear base de datos con el nombre 'cac-23643g4' o el nombre de la db que guste pero cambiar el nombre de la variable de entorno anterior (.env DB_NAME).
        -Luego importar cac-23643g4.sql ubicado en la raiz de ./G4-API, dentro de la base de datos creada previamente.

    Luego de tener las variables de entorno creadas y la base de datos creada e importada:
        -En ./G4-API correr el comando npm run dev
# G4-FRONT React + Vite    
    Correr xampp y luego G4-API

    CREAR archivo .env en ./G4-FRONT con lo siguiente:

    VITE_API_URL=http://localhost
    VITE_API_PORT=3000
    
    En ./G4-FRONT: 
        -Correr el comando npm install
        -Correr el comando npm run dev
    SOLO SI EN EL .env, PORT pusieron otro que no sea 