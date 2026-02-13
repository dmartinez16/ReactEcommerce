# 🛒 React Ecommerce

Aplicación **E-commerce moderna** desarrollada con **React + Vite**, enfocada en el consumo de una API externa de productos y la gestión de un **carrito de compras global** utilizando **Context API, Hooks personalizados y TypeScript**.

El proyecto implementa una **arquitectura frontend escalable y modular**, con separación clara de responsabilidades entre componentes, páginas, servicios, hooks y tipado.

---

## 🚀 Funcionalidades

- 🛍️ Listado dinámico de productos desde API externa
- 🔍 Vista de detalle de producto
- 🛒 Carrito de compras con estado global
- ➕ Agregar productos al carrito
- 🔄 Manejo de estado con Context API
- ♻️ Hooks personalizados para encapsular lógica reutilizable
- 🔀 Enrutamiento dinámico con React Router
- 📦 Tipado estático con TypeScript
- 🎨 Estilización moderna con TailwindCSS
- 🧹 Linting y buenas prácticas con ESLint

---

## 🛠️ Stack Tecnológico

- ⚛️ React
- ⚡ Vite
- 🟦 TypeScript
- 🌐 React Router
- 📡 Axios
- 🧠 Context API
- 🎣 Custom Hooks
- 🎨 TailwindCSS
- 🧹 ESLint

---

## 🏗️ Arquitectura del Proyecto

El proyecto está organizado siguiendo principios de escalabilidad y mantenibilidad:

├── Api/
│ └── axios.ts # Configuración centralizada de Axios
│
├── Components/
│ ├── Card/ # Componente reutilizable de producto
│ ├── Layout/ # Layout general de la aplicación
│ ├── Navbar/ # Barra de navegación
│ └── ProductDetail/ # Vista detallada del producto
│
├── Context/
│ └── ShoppingCartContext # Contexto global del carrito
│
├── Hooks/
│ └── useShoppingCart.ts # Lógica encapsulada del carrito
│
├── Pages/
│ ├── App/ # Configuración principal de rutas
│ ├── Home/ # Página principal con productos
│ ├── MyAccount/
│ ├── MyOrder/
│ ├── MyOrders/
│ ├── SignIn/
│ └── NotFound/
│
├── Services/
│ └── products.service.ts # Servicio de consumo de API
│
├── Types/
│ └── product.ts # Definición de modelos y tipos
│
├── index.css
└── main.jsx

---

## 📌 Decisiones Técnicas

- Separación clara entre lógica de negocio y presentación.
- Context API para evitar prop drilling.
- Hooks personalizados para reutilización y limpieza del código.
- Tipado fuerte con TypeScript para mayor escalabilidad.
- Arquitectura preparada para crecer (más módulos o features).

---

## 💻 Instalación y ejecución

```bash
git clone https://github.com/dmartinez16/ReactEcommerce
cd ReactEcommerce
npm install
npm run dev

🎯 Objetivo del Proyecto

Consolidar conocimientos en frontend moderno, aplicar buenas prácticas utilizadas en entornos profesionales y demostrar capacidad para:

Diseñar arquitecturas limpias

Manejar estado global

Consumir APIs

Escalar proyectos React con TypeScript
