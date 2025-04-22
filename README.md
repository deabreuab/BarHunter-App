# 🍻 Bar Hunter 
Aplicación desarrollada como prueba técnica para explorar y visualizar bares/cervecerías en Estados Unidos utilizando la [Open Brewery DB API](https://www.openbrewerydb.org/). Los usuarios pueden buscar cervecerías, ver detalles individuales y opiniones.

---

## 🚀 Tecnologías utilizadas

- **Next.js 15**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **React Icons**
- **Open Brewery DB API**
- **TanStack**

---

## 🎯 Funcionalidades principales

- 👤 **Registro**
- 🔐 **Login**
- 🔍 **Explorar cervecerías**
- 🏪 **Vista de detalle** con nombre, dirección, teléfono e imágenes
- 💬 **Sección de opiniones**

---

## ⚙️ Decisiones técnicas

- **Next.js App Router (v15):** Utilicé la nueva arquitectura basada en archivos (`/app`) para aprovechar el routing dinámico, layouts persistentes y un mejor manejo del estado de servidor/cliente.

- **React Query (TanStack):** Usado para el manejo eficiente de datos asíncronos. Evita fetch innecesarios y mejora el rendimiento general.

- **API Layer modular (`api/breweries.ts`):** Centraliza las llamadas al API para mantener el código limpio y reutilizable.

- **Tailwind CSS:** Elegido para estilizar de forma rápida y escalable.

- **Diseño mobile-first:** La UI está optimizada para adaptarse bien desde celulares hasta pantallas grandes.

---
## 🧩 Desafíos y resoluciones

- **Adaptarme a Next.js 15 y App Router:** Fue mi primer proyecto usando esta versión, así que aprendí sobre la estructura `/app`, cómo usar `Link`, layouts persistentes y las convenciones modernas de Next.

- **Aprender React Query:** Aunque no lo había usado antes, entendí rápidamente su poder para manejar estados de datos, errores y caché sin esfuerzo adicional.

- **Diseño personalizado con Tailwind:** Diseñé los componentes respetando una identidad visual (degradados, espaciados y tipografías) directamente desde Figma.

- **Conexión entre vistas:** Aprendí cómo pasar el ID de la cervecería desde la lista a la vista de detalle mediante rutas dinámicas en Next.

- **Separación de lógica y componentes:** Opté por crear una capa de servicios (`api/breweries`) para mantener limpio el código del frontend.

---

## 📝 Notas

- Este proyecto utiliza información pública de la Open Brewery DB.

- Este proyecto utiliza un API desarrollada en NestJS para autorización y autenticación.

- Actualmente las imágenes, opiniones y reservas son mock (estáticas).

---

## 📌 TODOs

- Implementar sistema de reseñas reales
- Implementar sistema de reservas y chat con los bares
- Agregar filtro por estado
- Creación de perfil de usuario
- Añadir sistema de favoritos
- Obtener imágenes reales de los bares
- Dark / Light mode con Tailwind

---

## 🛠️ Cómo correr el proyecto localmente

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   ```

2. Accede a la carpeta del proyecto:

   ```bash
   cd tu-repo
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Ejecuta el entorno de desarrollo:

   ```bash
   npm run dev
   ```

5. Abre tu navegador en `http://localhost:3000`

---

## 🌐 Proyecto en producción

Puedes ver el proyecto directamente en [Bar Hunter](https://bar-hunter-app.vercel.app/), dale click, regístrate e inicia sesión para verlo funcionando!

---
