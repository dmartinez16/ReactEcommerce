# 🛒 React Ecommerce

Aplicación **E-commerce** desarrollada con **React** y **Vite**, enfocada en el consumo de una API de productos y la gestión de un **carrito de compras** utilizando **Context API y Hooks personalizados**.

El proyecto aplica una **arquitectura frontend escalable**, con separación clara entre componentes, páginas, servicios, hooks y tipos.

---

## 🚀 Funcionalidades

- 🛍️ Listado de productos desde una API externa
- 🔍 Vista de detalle del producto
- ➕ Agregar productos al carrito
- 🛒 Gestión global del carrito con **Context API**
- ♻️ Uso de **Hooks personalizados**
- 🔀 Enrutamiento por páginas
- 📦 Tipado con TypeScript
- 🎨 Estilos con CSS / Tailwind (según configuración)

---

## 🛠️ Tecnologías utilizadas

- **React**
- **Vite**
- **JavaScript / TypeScript**
- **Axios**
- **Context API**
- **React Hooks**
- **CSS / Tailwind**
- **ESLint**

---

## 📂 Estructura del proyecto

```text
src/
├── Api/
│   └── axios.ts              # Configuración de Axios
│
├── Components/
│   ├── Card/                 # Cards de productos
│   ├── Layout/               # Layout general
│   ├── Navbar/               # Barra de navegación
│   └── ProductDetail/        # Detalle del producto
│
├── Context/
│   └── ShoppingCartContext   # Contexto del carrito
│
├── Hooks/
│   └── useShoppingCart.ts    # Hook personalizado del carrito
│
├── Pages/
│   ├── App/                  # Configuración principal
│   ├── Home/                 # Página principal
│   ├── MyAccount/
│   ├── MyOrder/
│   ├── MyOrders/
│   ├── SignIn/
│   └── NotFound/
│
├── Services/
│   └── products.service.ts   # Consumo de API de productos
│
├── Types/
│   └── product.ts            # Tipos de datos
│
├── index.css
└── main.jsx
