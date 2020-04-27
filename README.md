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

### Integration with [SWAPI](https://swapi.py4e.com/documentation)

Dada la arquitectura señalada en el reto, será necesario especiar un API para la integración. Este endpoint podrá especificarse en la variable de entorno *SWAPI_URL* del archivo de configuración `.env.yml`. El que usaremos en este proyecto será `https://swapi.py4e.com/api/`

![Arquitectura](https://i.ibb.co/nbdHq5C/arquitectura.jpg)

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

### Resources
Los recursos implementados son los siguientes:

- films
- people

| resource      | description                       |
|:--------------|:----------------------------------|
| `api/films`      | Listado de peliculas. |
| `api/people`    | A People resource is an individual person or character within the Star Wars universe. |

You can operate on resources using HTTP methods such as `POST`, `GET`, `PUT`, and `DELETE`.

##### Films

| Resource / HTTP method | Post             | Get         | Patch                  | Delete             |
| ---------------------- | ---------------- | ----------- | ---------------------- | ------------------ |
| `api/films`            | Create new film  | List films  | Error                  | Error              |
| `api/films/{id}`       | Error            | Get film    | Update user if exists  | Delete film        |

##### People

| Resource / HTTP method | Post             | Get         | Patch                  | Delete             |
| ---------------------- | ---------------- | ----------- | ---------------------- | ------------------ |
| `api/people`           | Create new pers  | List pers | Error                  | Error              |
| `api/people/{id}`      | Error            | Get pers  | Update pers if exists| Delete people      |

### Implementation Details

El patrón de software utilizado es `Repository Pattern`. En la capa de persistencia de datos se utilizó *sequelize*. Se implemento una pequeña libreria para el manejo web `(Request.js, Response.js, Middleware.js)`, ubicados en *helpers*. Estas clases abstraen el manejo de los `events` de AWS Lambda para volverlo más parecido a frameworks como **express.js**.
