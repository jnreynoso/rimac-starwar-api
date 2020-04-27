# Star War API (Extended)

¡Bienvenido a swapi (extended), la API de Star Wars!.

### Installation 

Instalar modulos npm.

```sh
npm install
```

### Setup Environment

Hacer una copia del archivo de entorno de ejemplo y setear las variables correspondientes.
Considerar NODE_ENV con el valor *development* (Por defecto tendra este valor).

```sh
cp env.example.yml .env.yml
```

### Migrations

Ejecutar las migraciones para la creacion del modelo de base de datos.

```sh
npx sequelize-cli db:migrate 
```

### Serverless plugins

| Plugin | Stats |
|:---------------------------|:-----------:|
| **[Webpack - `serverless-webpack`](https://github.com/serverless-heaven/serverless-webpack)** <br/> by [serverless-heaven](http://github.com/serverless-heaven) <br/> Serverless plugin to bundle your lambdas with Webpack | ![Github Stars](https://img.shields.io/github/stars/serverless-heaven/serverless-webpack.svg?label=Stars&style=for-the-badge) <br/> ![NPM Downloads](https://img.shields.io/npm/dt/serverless-webpack.svg?label=Downloads&style=for-the-badge)|