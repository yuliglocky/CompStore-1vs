# CompStore-1vs

**Aplicación híbrida de e-commerce móvil y web** desarrollada como proyecto académico por el equipo liderado por **Yulianys Cedeño**. Utiliza **Angular + Ionic** para la interfaz de usuario y **Firebase** como backend en la nube.

---

## Descripción

CompStore-1vs simula una tienda en línea completa, donde los usuarios pueden:

- **Explorar** catálogo de productos.  
- **Añadir** artículos al carrito de compras.  
- **Gestionar** y **visualizar** pedidos.  
- **Autenticarse** con email/contraseña.

---

## Objetivos

1. Demostrar habilidades full-stack en **Angular**, **Ionic** y **Firebase**.  
2. Simular un flujo real de compra (búsqueda, carrito, checkout).  
3. Integrar servicios en la nube para **autenticación** y **datos en tiempo real**.  
4. Facilitar despliegues multiplataforma (web, Android, iOS) con **Capacitor**.

---

## Tecnologías y librerías

- **Angular** (componentes, servicios, módulos)  
- **Ionic Framework** (UI móvil + web)  
- **Firebase**  
  - Authentication  
  - Cloud Firestore  
  - Hosting  
- **Capacitor** (compilación nativa móvil)  
- **TypeScript** / **SCSS** / **HTML**

---

## Estructura del repositorio


---

## Funcionalidades principales

- **Catálogo de productos**  
  - Listado paginado, búsqueda y filtrado básico.  
- **Detalle de producto**  
  - Imágenes, descripción, precio y stock.  
- **Carrito de compras**  
  - Añadir/quitar ítems, ver total y cantidad.  
- **Gestión de pedidos**  
  - Crear pedidos en Firestore con estado “pendiente”.  
  - Ver historial de pedidos del usuario.  
- **Autenticación**  
  - Registro/login/logout con Firebase.  
  - Protección de rutas privadas.

---

## Instalación y desarrollo local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/yuliglocky/CompStore-1vs.git
   cd CompStore-1vs

  
## Instala dependencias:   
   npm install

## Levanta servidor de desarrollo (web):
   ionic serve


## Tests y calidad de código
   Verifica lint y tests unitarios:

   npm run lint
   npm run test
  


