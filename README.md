# REST-API with Node JS and Express js

## **Requirements** :mag:
<p align="left">
<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="70" height="70" alt="NodeJS" /></a>
<a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg" width="70" height="70" alt="Express" /></a>
<a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg" width="70" height="70" alt="MySQL" /></a>
</p>

<br>

## **Steps to setup the project** :rocket:

<br>

### __*Clone the repository*__
```bash
git clone https://github.com/VictorRodas99/rest-api-node.js.git
```

### __*Enter into the main folder*__
```bash
cd rest-api-node.js
```

### __*Create an .env file in the root*__
*Must contain this data inside*
```
DB_PASSWORD="<your_mysql_password>"
PORT="8000"
SECRET="<secret_token_for_jwt>"
```

### __*Install dependencies*__
```bash
npm install
```

### __*Start the mysql server (Assuming it has already been installed mysql)*__
_Linux_
```bash
sudo service mysql start
```

_Windows_
```cmd
"C:\Program Files\MySQL\MySQL Server 8.0\bin\mysqld.exe"
```

### __*Run the server*__
```bash
npm start
```

### __*Run the server (Developer mode)*__
```bash
npm run dev
```

<br>

### __`It will start the server in localhost:8000`__

<br>

## __Documentation and Schemes__

### __*Database representation:*__
<img src="./docs/scheme.png">

To see the entire documentation of the endpoints and schemas: `http://localhost:8000/api/v1/docs`