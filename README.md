## Architecture diagram

### Stack tech:
- Frontend: VueJS
- Backend: NodeJS
- Main backend library: xrp.js
- Main wallet: Xumm
- Blockchain network: XRP
- SQL Database: MySQL

![Architecture diagram](https://user-images.githubusercontent.com/3833940/227734329-33e02b5f-ea16-47a8-855f-53a59fec6007.png)

## Business logic
![business logic](https://user-images.githubusercontent.com/3833940/227734705-d4713b12-a6cd-4fe9-8e5c-387aee0f296a.png)

## Uses case
![logic](https://user-images.githubusercontent.com/3833940/227734857-0656d204-2927-4987-a896-d977d5936c48.png)

Figma
https://www.figma.com/file/6h2F7ujEXHUxQbmhuGExMM/CryptoFundMe?node-id=13-2334&t=bM1FMjiRaJk4id1B-0

Testnet XRP scan
https://testnet.xrpl.org/transactions/ECFC14C34908BA14783F1F4B3334CD3AC16446A16EB3C4E73ECD9EE3FD0EE4F4/simple

URL = http://ripple-dev.coini.tech

### Project structure

```
project
│   README.md
│   .editorconfig
│   .env
│   .eslintrc
│   .gitignore
│   .package.json
│   .README.md
│
└───src
│   │   app.js
│   │   index.js
│   │
│   └───config
│   │   │   config.js
│   │
│   └───controllers
│   │
│   └───models
│   │
│   └───routes
│   │
│   └───templates
│   │
│   └───test
│   │
│   └───utils
│   │   │
│   │   └───helpers
│   │   │   app.js
│   │   │
```

### Quick start and setup

Para usar este repositorio se debe seguir los siguientes pasos:

#### Clonar el repositorio
```console
git clone <rama> https://gitlab.com/doapps-software/api-boilerplate.git <nombre_proyecto>
```
Este comando clonara la rama especifica en una carpeta con nombre del proyecto que vas a realizar.
#### Eliminar el git local actual
Es necesario eliminar el git que se creo al clonar y dejar el proyecto "limpio".
```console
rm -rf .git
```
Una vez eliminada el git local, puedes agregarle el repositorio git de tu nuevo proyecto
```console
git remote add origin <repositorio_proyecto_url>
```
#### Quitar los comentarios en el .gitignore
Por motivos del proyecto el **`.gitignore`** viene con una parte comentada, esto se debe para que puedas obtener los archivos para las variables de entorno.
Para que estos archivos, que contienen información privada, sean ignorados por el Git es necesario que estén especificado en el documento **`.gitignore`**.

Quitar los comentarios de las siguientes lineas de esta forma.
```
.gitignore file
-----------------
  ...

  # dotenv environment variables file
  .env
  .env.*

  ...
```

**Observación:** Si el paso anterior no ha funcionado, en otras palabras, los archivos **`.env`** no son ignorados por el `.gitignore`, esto se debe a problemas con la cache. Para ellos se recomienda hacer el siguiente comando.
```console
git rm -r --cached .
```

#### Instalar dependencias usando `yarn`
Si es necesario puede agregar las dependencias que desee y luego instalarlas usando **`yarn`**.
```console
yarn install
```

#### Instalar plugins en Visual Studio Code
Para trabajar de forma cómoda respecto al Javascript linter y la identación.

- EditorConfig for VS Code

```
editorconfig.editorconfig
EditorConfig
```

- ESLint

```
dbaeumer.vscode-eslint
Dirk Baeumer
```

#### Observaciones para mysql8 con knexjs:
Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
Solución:
ALTER USER 'yourusername'@'localhost' IDENTIFIED WITH mysql_native_password BY 'youpassword';
FLUSH PRIVILEGES;

