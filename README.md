# Alex d'or, version 2023

- Composé d'un dossier [api/](./api/) : une API en Node.js avec NestJS.
- Composé d'un dossier [front/](./front/) : un front Angular.

## Installation

### Node.js

Cloner le repository sur son ordi :

`git clone git@github.com:alexdor-rpgmaker/alexdor2023.git`

### Installer Node.js

Installer la version de Node.js qui se trouve dans le fichier[.nvmrc](./.nvmrc).

### Installer les dépendances de l'API

```shell
cd /api
npm install
```

### Installer les dépendances du Front

```shell
cd /front
npm install
```

### Paramétrer la base de données

Créer une base de données avec une table "jeux" telle que décrite
dans [game.entity.ts](./api/src/games/game.entity.ts).

Créer un fichier [./api/.env](./api/.env) sur la base du fichier 
[./api/.env.example](./api/.env.example) et renseigner dedans les informations de connexion à la
base de données.

## Launch

### Démarrer le serveur de l'API

```shell
cd /api
npm run start:dev
```

Le serveur se lance sur le port 3000.

### Démarrer le serveur du Front

```shell
cd /front
ng serve
```

Le serveur se lance sur le port 4200.
