# simple-database-implementation
Simple database implementation for basic CRUD application

## Getting Started
In order to download repository to your machine, from your terminal, run command:
```git clone https://github.com/Decentralize-It/simple-database-implementation.git```

Change into the newly created directory by running command:
```cd simple-database-implementation```

Install the necessary dependencies by running the command:
```npm i``` or ```npm install```

Create the database by running script:
```npm run db:create``` which runs the command: ```createdb todo```

Set up your database schema by running script:
```npm run db:schema``` which runs the command: ```psql < models/schema/schema.sql```

Import data into your database by runnig script:
```npm run db:seed``` which runs the command: ```psql < models/schema/todos.sql```

Finally, start your server by running script:
```npm start``` which runs the command: ```node index.js```
