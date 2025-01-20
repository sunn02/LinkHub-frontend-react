
# 🌟 Frontend React

Este repositorio contiene la versión del frontend del proyecto **LinkHub**, desarrollada con **React**.

## ✅ Requisitos Previos

- [Node.js](https://nodejs.org/) instalado en tu sistema.

---

## 🛠️ Cómo Instalar

1. Clona este repositorio:
   ```bash
   git clone https://github.com/sunn02/LinkHub-frontend-react
   cd LinkHub-frontend-react/app
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

---

## ▶️ Cómo Ejecutar

1. Inicia el servidor de desarrollo:
   ```bash
   npm start
   ```

2. Abre tu navegador y visita [http://localhost:3000](http://localhost:3000).

---

## 🚀 Cómo Desplegar

1. Genera una versión optimizada para producción:
   ```bash
   npm run build
   ```

2. Sube la carpeta `build` a cualquier servicio de hosting estático, como:
   - **Netlify**
   - **Vercel**
   - **GitHub Pages**

---

## 📜 Notas

- Este proyecto es una **Single Page Application (SPA)** y se conecta a un backend RESTful para manejar enlaces, comentarios y votos.
- Asegúrate de que el archivo `.api.js` incluya la URL del backend:
   ```env
  const API_URL = "http://localhost:3005";

   ```
