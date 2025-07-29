# 🎮 Fnatic de Temu

> **Página web oficial de la comunidad Fnatic de Temu - League of Legends**

Una aplicación web moderna construida con **Astro**, **React** y **Tailwind CSS** que presenta a nuestra comunidad competitiva de League of Legends con un diseño interactivo y responsivo.

![Preview](https://img.shields.io/badge/Status-En%20Desarrollo-orange)
![Astro](https://img.shields.io/badge/Astro-4.0-FF5D01?logo=astro)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind-3.0-38B2AC?logo=tailwindcss)

## 📸 Vista Previa

![Captura de la página web](./public/screenshot.png)

*Vista principal de la aplicación mostrando el layout responsivo con carousel, información del equipo y galería de integrantes*



## 🌟 Características

### ✨ **Diseño Moderno e Interactivo**
- **Layout responsivo** con paneles redimensionables
- **Carousel dinámico** con banners de campeones
- **Galería tipo Pinterest** (Masonry) para integrantes
- **Animaciones suaves** con hover effects

### 🎯 **Componentes Destacados**
- **Panel "¿Quiénes somos?"** con valores del equipo
- **Carousel de banners** con Ashe, Tryndamere y Jinx
- **Masonry interactivo** para mostrar integrantes
- **Call-to-Action** para unirse a Discord

### 🛠️ **Tecnologías Utilizadas**
- [Astro](https://astro.build/) - Framework web moderno
- [React](https://reactjs.org/) - Biblioteca de UI
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS
- [shadcn/ui](https://ui.shadcn.com/) - Componentes UI
- [Framer Motion](https://www.framer.com/motion/) - Animaciones

## 🚀 Instalación y Configuración

### **Prerrequisitos**
- Node.js 18+ 
- npm o yarn

### **1. Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/fnatic-de-temu.git
cd fnatic-de-temu
```

### **2. Instalar dependencias**
```bash
npm install
# o
yarn install
```

### **3. Ejecutar en desarrollo**
```bash
npm run dev
# o
yarn dev
```

### **4. Construir para producción**
```bash
npm run build
# o
yarn build
```

## 📁 Estructura del Proyecto

```
FnaticDeTemu/
├── src/
│   ├── components/
│   │   ├── ui/                 # Componentes shadcn/ui
│   │   │   ├── carousel.tsx    # Carousel de banners
│   │   │   ├── masonry.jsx     # Galería tipo Pinterest
│   │   │   └── resizable.tsx   # Paneles redimensionables
│   │   ├── Landing.astro       # Página de landing
│   │   ├── Main.astro          # Componente principal
│   │   ├── Menu.astro          # Navegación
│   │   └── ResizableExample.jsx # Layout principal
│   ├── pages/
│   │   └── index.astro         # Página principal
│   └── styles/
│       └── global.css          # Estilos globales
├── public/                     # Recursos estáticos
│   ├── Ashe.jpg
│   ├── Tryndamere.webp
│   └── jinx.jpg
└── package.json
```

## 🎨 Componentes Principales

### **ResizableExample.jsx**
Layout principal con tres paneles:
- **Superior**: Carousel de banners (35%)
- **Inferior izquierdo**: Información del equipo (50%)  
- **Inferior derecho**: Galería de integrantes (50%)

```jsx
// Estructura de items para el Masonry
const items = [
  {
    id: "1",
    img: "https://preview.redd.it/vs4nqxqekxw31.png?auto=webp&s=d63485c8b4723928cae1228dc8aa33602cbd92c6",
    height: 400,
  },
  {
    id: "2",
    img: "https://picsum.photos/id/1011/600/750?grayscale",
    url: "https://example.com/two",
    height: 250,
  }
  // ... más items
]
```

### **Masonry.jsx** 
Galería interactiva con:
- Disposición tipo Pinterest
- Hover effects con escalado
- Soporte para texto superpuesto
- Transiciones suaves

### **Carousel**
Banner rotativo con:
- Navegación con flechas
- Imágenes de campeones de LoL
- Controles centrados
- Responsive design

## 🎮 Características del Equipo

### **🌟 Valores Fundamentales**
- **🛡️ Honor y Respeto** - Competimos limpiamente
- **🔥 Disciplina y Constancia** - Esfuerzo constante
- **🚀 Competitividad Sana** - Mentalidad abierta
- **💖 Compromiso y Pasión** - Amor por el juego

### **👥 Comunidad**
- Enfoque en **League of Legends**
- Desarrollo competitivo y personal
- Ambiente familiar y de apoyo
- Conexión vía [Discord](https://discord.gg/A68XyCQVHQ)

## 🛠️ Configuración de Desarrollo

### **Scripts Disponibles**
```bash
npm run dev          # Servidor de desarrollo
npm run build        # Construir para producción  
npm run preview      # Preview de la build
npm run astro        # CLI de Astro
```

### **Personalización**
Para modificar los integrantes del equipo, edita el array `items` en `ResizableExample.jsx`:

```javascript
const items = [
  {
    id: "1",
    img: "url-de-la-imagen",
    height: 400,
    hoverText: {
      title: "Nombre del jugador",
      description: "Descripción",
      role: "Rol principal"
    }
  }
  // ... más integrantes
]
```

### **Agregar Hover con Texto**
Para agregar información al pasar el mouse sobre un integrante:

```javascript
{
  id: "1",
  img: "https://preview.redd.it/vs4nqxqekxw31.png?auto=webp&s=d63485c8b4723928cae1228dc8aa33602cbd92c6",
  height: 400,
  hoverText: {
    title: "Capitán del Equipo",
    description: "Líder y shotcaller principal",
    role: "ADC Main"
  }
}
```

## 🎯 Layout y Diseño

### **Panel Superior (35%)**
- Carousel con imágenes de campeones
- Navegación con flechas centradas
- Responsive y adaptativo

### **Panel Inferior Izquierdo (50%)**
- Información completa del equipo
- Valores y filosofía
- Call-to-Action para Discord
- Animaciones y efectos hover

### **Panel Inferior Derecho (50%)**
- Galería Masonry de integrantes
- Disposición tipo Pinterest
- Efectos de escalado al hover
- Scroll vertical automático

## 🤝 Contribuir

1. **Fork** el proyecto
2. Crea una **rama** para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. **Commit** tus cambios (`git commit -m 'Agregar nueva característica'`)
4. **Push** a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un **Pull Request**

## 📞 Contacto

- **Discord**: [Únete a nuestro servidor](https://discord.gg/A68XyCQVHQ)
- **GitHub**: [Repositorio del proyecto](https://github.com/tu-usuario/fnatic-de-temu)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

<div align="center">

**🔥 Desarrollado con pasión por la comunidad Fnatic de Temu 🔥**

*¡Únete a nosotros en la Grieta del Invocador!*