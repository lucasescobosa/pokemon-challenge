# Pokemon Challenge

Este repositorio contiene dos carpetas: frontend y backend, que corresponden a las partes del cliente y servidor del proyecto, respectivamente.

## Instrucciones de configuración
### Backend

El backend está construido con NestJS. Para iniciar el servidor:

1. Clona el repositorio.
2. Dirígete a la carpeta backend:
```bash
cd backend 
```
3. Instala las dependencias:
```bash
npm install
```
4. Ejecuta las migraciones de base de datos:
```bash
npm run migration:run 
```
5. Inicia el servidor:
```bash
npm start
```
Por defecto, el servidor se ejecuta en `http://localhost:3000/`. Puedes cambiar el número de puerto en el archivo `main.ts` si es necesario.

### Frontend
El frontend está construido con Vite. Antes de iniciarlo, asegúrate de que el backend esté corriendo.

1. Clona el repositorio si no lo has hecho.
2. Dirígete a la carpeta frontend:
```bash
cd frontend 
```
3. Instala las dependencias:
```bash
npm install
```
4. Crea un archivo `.env` a partir de `.env.example` y configura la URL del backend:
```bash
cp .env.example .env
```
Abre el archivo `.env` y asegúrate de que la variable `VITE_BACKEND_URL` tenga la URL correcta del backend (por defecto: `http://localhost:3000/`)

5. Inicia el servidor de desarrollo:
```bash
npm run dev
```
El servidor de desarrollo de Vite correrá por defecto en `http://localhost:5173/`. Visita esa URL (o la que indique la consola) en tu navegador.

## Uso de la aplicación

Al iniciar la aplicación, verás una vista con tarjetas de distintos Pokémon. Para empezar una batalla:

1. **Selecciona tu Pokémon**: Haz clic en la tarjeta del Pokémon que deseas utilizar para la batalla.
2. **Oponente aleatorio**: Una vez que selecciones tu Pokémon, el programa elegirá un oponente de forma aleatoria.
3. **Iniciar Batalla**: Haz clic en el botón `Start Battle` para comenzar la lucha entre los dos Pokémon.
4. **Resultado de la batalla**: La batalla continuará automáticamente hasta que aparezca un mensaje indicando cuál de los dos Pokémon es el ganador.