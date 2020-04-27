# Star War API

¡Bienvenido a swapi (extended), la API de Star Wars!.

### Installation 

Instalar módulos npm.

```sh
npm install
```

### Setup Environment

Hacer una copia del archivo de entorno de ejemplo y configurar las variables correspondientes.
Considerar *NODE_ENV* con el valor *development* `(Por defecto tendrá este valor)`.

```sh
cp env.example.yml .env.yml
```

### Migrations

Ejecutar las migraciones para la creación del modelo de base de datos.

```sh
npx sequelize-cli db:migrate 
```

### Serverless plugins

Plugins de serverless utilizados

| Plugin | Stats |
|:---------------------------|:-----------:|
| **[Webpack - `serverless-webpack`](https://github.com/serverless-heaven/serverless-webpack)** <br/> Serverless plugin to bundle your lambdas with Webpack | ![Github Stars](https://img.shields.io/github/stars/serverless-heaven/serverless-webpack.svg?label=Stars&style=for-the-badge) <br/> ![NPM Downloads](https://img.shields.io/npm/dt/serverless-webpack.svg?label=Downloads&style=for-the-badge)|
| **[Offline - `serverless-offline`](https://github.com/dherault/serverless-offline)** <br/> Emulate AWS λ and API Gateway locally when developing your Serverless project | ![Github Stars](https://img.shields.io/github/stars/dherault/serverless-offline.svg?label=Stars&style=for-the-badge) <br/> ![NPM Downloads](https://img.shields.io/npm/dt/serverless-offline.svg?label=Downloads&style=for-the-badge)|
