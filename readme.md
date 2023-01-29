
# CRUD REACT-QUERY NODEJS MULTER

esta aplicación está realizada en base a la comunicación entre backend y frontend


## React Query

Está realizado en base a clases para optimizar la reutilización de código.

## Multer

Dependencia de Node para procesar archivos, además de ello controlar errores en las mismas.
## EJECUCION

Clone the project

```bash
  git clone https://github.com/HansM7/app-crud-reactquery-multer.git
```

### Ejecutar el backend

```bash
  cd server
```
```bash
  npm i
```
```bash
  npm start
```
Este se ejecutará en el puerto 3000

### Ejecutar el frontend VITE

```bash
  cd app-crud
```
```bash
  npm i
```
```bash
  npm run dev
```

### Errores al ejecutar

Como se esta usando un archivo .json como base de datos, la actualización de la data hace que el servidor se autoreinicie y pierda la conexión por un segundo, sin embargo eso no afecta directamente al cliente.
