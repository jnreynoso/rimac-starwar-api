# Star War API

¡Bienvenido a swapi (extended), la API de Star Wars!.

### Installation 

Instale módulos npm.

```sh
npm install
```

### Setup Environment

Realice una copia del archivo de variables de entorno `(env.example.yml)` y configure las variables correspondientes.
Considere *NODE_ENV* con el valor *"development"* `(Por defecto tendrá este valor)`.

```sh
cp env.example.yml .env.yml
```
```yaml
development:
  DB_USERNAME: ""
  DB_PASSWORD: ""
  DB_DATABASE: ""
  DB_PORT: 3306
  DB_HOST: "localhost"
  DB_DIALECT: "mysql"
  SWAPI_URL: "https://swapi.py4e.com/api/"
```
Será necesario crear una base de datos.

```sql
CREATE DATABASE starwar;
```

### Migrations

Ejecute las migraciones para la creación de tablas. Estas serán creadas en la base de datos especificada en el archivo *.env.yml* `(DB_DATABASE)`

```sh
npx sequelize-cli db:migrate 
```

### Serverless plugins

Plugins de serverless utilizados

| Plugin | Stats |
|:---------------------------|:-----------:|
| **[Webpack - `serverless-webpack`](https://github.com/serverless-heaven/serverless-webpack)** <br/> Serverless plugin to bundle your lambdas with Webpack | ![Github Stars](https://img.shields.io/github/stars/serverless-heaven/serverless-webpack.svg?label=Stars&style=for-the-badge) <br/> ![NPM Downloads](https://img.shields.io/npm/dt/serverless-webpack.svg?label=Downloads&style=for-the-badge)|
| **[Offline - `serverless-offline`](https://github.com/dherault/serverless-offline)** <br/> Emulate AWS λ and API Gateway locally when developing your Serverless project | ![Github Stars](https://img.shields.io/github/stars/dherault/serverless-offline.svg?label=Stars&style=for-the-badge) <br/> ![NPM Downloads](https://img.shields.io/npm/dt/serverless-offline.svg?label=Downloads&style=for-the-badge)|
