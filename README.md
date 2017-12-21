# simple-database-implementation
Simple database implementation for basic CRUD application

## Getting Started
### Download Repository
In order to download repository to your machine, from your terminal, run command:<br>
```git clone https://github.com/Decentralize-It/simple-database-implementation.git```

### Navigate to Newly Downloaded Repository
Change into the newly created directory by running command:<br>
```cd simple-database-implementation```

### Install Dependencies
Install the necessary dependencies by running the command:<br>
```npm i``` or ```npm install```

### Create Database
Create the database by running script:<br>
```npm run db:create``` which runs the command: ```createdb todo```

### Import Schema
Set up your database schema by running script:<br>
```npm run db:schema``` which runs the command: ```psql < src/models/schema/schema.sql```

### Import Seed Data
Import data into your database by runnig script:<br>
```npm run db:seed``` which runs the command: ```psql < src/models/schema/todos.sql```

### Start Application
Finally, start your server by running script:<br>
```npm start``` which runs the command: ```node index.js```
