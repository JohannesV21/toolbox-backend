<p align="center">
  <img src="https://files.toolboxtve.com/wp-content/uploads/2018/04/15144954/logo-stycky.png" alt="toolbox">
</p>

# Toolbox API

Esta API REST, obtiene información desde una API externa, para formatearla y exponerla en un formato JSON estandarizado. Su principal objetivo es procesar y organizar datos provenientes de archivos CSV, eliminando líneas con errores y asegurando que la información esté correctamente estructurada antes de ser consumida.

## 🗒️ Requisitos del sistema

Para poder correr el proyecto satisfactoriamente es necesario tener instalados los siguientes requisitos:

1. node^14
2. docker **_(en caso de deploy)_**

## 🎉 Instalación y Uso:

1.- Clona este repositorio:

```bash
❯ git clone [URL-del-repositorio]
```

2.- Ingresa al directorio del proyecto:

```bash
❯ cd toolbox-backend
```

3.- Crea él .env con el siguiente comando:

```bash
❯ cat .env.example > .env
```

4.- Instala las dependencias del proyecto:

```bash
❯ npm install
```

5.- Inicia el servidor:

```bash
❯ npm run start
```

### Otros comandos:

- Ejecutar test:

```bash
❯ npm run test
```

- Ejecutar el servidor en modo desarrollo:

```bash
❯ npm run dev
```

- Ejecutar script para validar StandarJs

```bash
❯ npm run lint
```

## 🌐 Endpoints:

Endpoints disponible a consultar:

#### 1.- /files/data

Consulta los datos de todos los archivos con los datos correctamente formateados y validados.

#### 2.- /files/data?fileName={file}

Consulta los datos de un archivo en específico si se proporciona el parámetro `fileName` en la query.

#### 3.- /files/list

Consulta una lista de archivos csv disponibles.

## 🚀 Deploy con docker

### - Con Dockerfile

1. Estar ubicado en la raiz del proyecto
2. Crear la imagen de docker con el siguiente comando:

```bash
docker build -t fenix-simulator:latest .
```

3. Luego de haber creado la imagen de docker el siguiente paso es crear el contenedor:

```bash
docker run -it -d --rm -p 3005:3005 --name fenix-simulator fenix-simulator
```

### - Con Docker Compose

1. Estar ubicado en la raiz del proyecto
2. Ejecutar el siguiente comando para crear y correr la imagen y el contenedor en segundo plano:

```bash
docker compose up --build -d
```
