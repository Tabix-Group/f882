
# F88 Web App

Proyecto escalable para la transformación personal, desarrollado con Node.js, TypeScript, Express, PostgreSQL y React + Material UI. Despliegue en Railway.

## Características principales
- Registro y autenticación de usuarios
- Sistema de pagos: Credit Card, Mercado Pago, Criptomonedas, Transferencias Bancarias, PayPal
- Manejo de audios y materiales
- Integración de videos de YouTube
- Presentación de textos y recursos
- UI/UX profesional y responsiva
- Backend seguro, modular y preparado para escalar
- Control de versiones y documentación clara

## Estructura del proyecto
- `/src` (backend Node.js/Express)
- `/frontend` (React + Material UI)
- `/public` (archivos estáticos)
- `/db_init.sql` (estructura base de datos)
- `.github/copilot-instructions.md` (instrucciones IA)

## Instalación y ejecución

### Backend
1. Clona el repositorio
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Configura la base de datos PostgreSQL (ver `db_init.sql`)
4. Ejecuta el backend:
   ```powershell
   npx ts-node-dev src/index.ts
   ```

### Frontend
1. Ve a la carpeta `frontend`:
   ```bash
   cd frontend
   ```
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Ejecuta el frontend:
   ```bash
   npm start
   ```

## Base de datos
Estructura principal en `db_init.sql`:
- Tabla de usuarios
- Preparado para expansión (pagos, materiales, etc.)

## Sistema de pagos
Métodos soportados:
- Tarjeta de crédito
- Mercado Pago
- Criptomonedas
- Transferencias bancarias
- PayPal

## Despliegue
Preparado para Railway. Configura variables de entorno y base de datos en la plataforma.

## Documentación y soporte
- Código comentado y modular
- UI/UX profesional
- Footer con enlace a [Tabix Group](https://tabix.app/)

Para dudas o soporte, contacta al equipo de desarrollo o visita [Tabix Group](https://tabix.app/).
