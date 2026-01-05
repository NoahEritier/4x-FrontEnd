# 4x Web Software - Frontend

Aplicación web frontend desarrollada con Angular para clubes deportivos, bomberos, ONGs, academias y otras entidades de cobros. Simplifica la administración, mejora la experiencia de los miembros y lleva tu organización al siguiente nivel con una solución 100% online, segura y adaptable.

<div align="center">

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-B7178C?style=for-the-badge&logo=reactivex&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink?style=for-the-badge&logo=sass&logoColor=white)
![SSR](https://img.shields.io/badge/SSR-Universal-black?style=for-the-badge&logo=angular&logoColor=white)

</div>

## 📄 Sobre el Proyecto

4x Web Software es una aplicación web frontend desarrollada con Angular que proporciona una interfaz moderna y responsiva para la gestión de organizaciones sin fines de lucro y entidades de cobros. El sistema incluye Server-Side Rendering (SSR) con Angular Universal, componentes modulares standalone, y características avanzadas de seguridad y validación.


## ✨ Características Principales

- **🎨 Interfaz Moderna y Responsiva**: Diseño optimizado para todos los dispositivos (móvil, tablet, desktop) con componentes reutilizables
- **📋 Sistema de FAQs Dinámico**: Gestión completa de preguntas frecuentes con búsqueda, filtrado por categorías y consumo de API REST
- **📧 Formulario de Contacto Inteligente**: Sistema de contacto con validación avanzada, sanitización de inputs y protección contra XSS
- **🔒 Seguridad Avanzada**: SecurityService que protege contra manipulaciones desde la consola del navegador, detección de DevTools y validación de datos
- **⚡ Server-Side Rendering (SSR)**: Configurado con Angular Universal para mejor SEO y rendimiento
- **🎯 Componentes Modulares**: Arquitectura basada en componentes standalone de Angular con lazy loading
- **🔄 Integración con API REST**: Servicios HTTP configurados para consumir APIs externas
- **🧪 Testing Configurado**: Framework de testing con Jasmine y Karma listo para uso

## 🛠️ Stack Tecnológico

- **Angular 20.3** - Framework principal
- **TypeScript 5.9** - Lenguaje de programación
- **RxJS 7.8** - Programación reactiva
- **SCSS** - Preprocesador CSS
- **Angular SSR** - Server-Side Rendering con Angular Universal
- **Angular Forms (Reactive Forms)** - Gestión de formularios
- **Angular Router** - Enrutamiento y navegación
- **Angular HttpClient** - Comunicación con APIs REST

### Herramientas de Desarrollo
- **Angular CLI 20.3** - Herramientas de línea de comandos
- **Jasmine & Karma** - Testing framework
- **TypeScript Compiler** - Compilación de TypeScript

## 🚀 Comenzando

### Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior) - [Descargar Node.js](https://nodejs.org/)
- **npm** (versión 9 o superior) - Viene incluido con Node.js
- **Angular CLI** (opcional, se instala localmente) - Para comandos avanzados

### Instalación

1. **Clona el repositorio:**
```bash
git clone https://github.com/tu-usuario/4x.git
cd 4x
```

2. **Instala las dependencias del frontend:**
```bash
cd ClientApp
npm install
```

## 💻 Uso

### Desarrollo

Para ejecutar la aplicación en modo desarrollo:

```bash
cd ClientApp
npm start
```

O usando Angular CLI:

```bash
cd ClientApp
ng serve
```

La aplicación estará disponible en `http://localhost:4200` y se recargará automáticamente cuando modifiques los archivos.

**Nota:** Asegúrate de configurar la URL de tu API backend en `ClientApp/src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000' // URL de tu API backend
};
```

### Scripts Disponibles

#### Desde ClientApp/:
- `npm start` o `ng serve` - Inicia el servidor de desarrollo
- `npm run build` o `ng build` - Construye la aplicación para producción
- `npm test` o `ng test` - Ejecuta los tests unitarios
- `npm run watch` - Construye en modo watch

### Construcción para Producción

```bash
cd ClientApp
npm run build -- --configuration production
```

Los archivos compilados estarán en `ClientApp/dist/clientapp/browser/`

### Testing

```bash
cd ClientApp
npm test
```

## 📂 Estructura del Proyecto

```
ClientApp/
├── src/
│   ├── app/
│   │   ├── components/         # Componentes reutilizables
│   │   │   ├── feature-card/   # Tarjeta de características
│   │   │   ├── navbar/         # Barra de navegación
│   │   │   ├── plan-card/      # Tarjeta de planes
│   │   │   └── footer/         # Pie de página
│   │   ├── pages/              # Páginas de la aplicación
│   │   │   ├── inicio/         # Página principal
│   │   │   ├── contacto/       # Página de contacto
│   │   │   │   └── contacto-form/  # Formulario de contacto
│   │   │   ├── faq/            # Página de preguntas frecuentes
│   │   │   └── tutoriales/    # Página de tutoriales
│   │   ├── services/           # Servicios (HTTP, seguridad)
│   │   │   ├── faq.service.ts      # Servicio para FAQs
│   │   │   └── security.service.ts # Servicio de seguridad
│   │   ├── app.ts              # Componente principal
│   │   ├── app.routes.ts       # Configuración de rutas
│   │   ├── app.config.ts       # Configuración de la app
│   │   └── shell.html          # Shell para SSR
│   ├── assets/                 # Imágenes, iconos, etc.
│   │   ├── clients/            # Imágenes de clientes
│   │   ├── icons/              # Iconos SVG
│   │   └── logo-*.png          # Logos
│   ├── environments/           # Variables de entorno
│   │   ├── environment.ts      # Configuración desarrollo
│   │   └── environment.prod.ts # Configuración producción
│   ├── index.html              # HTML principal
│   ├── main.ts                 # Punto de entrada
│   ├── main.server.ts          # Punto de entrada SSR
│   ├── server.ts               # Configuración del servidor SSR
│   └── styles.scss             # Estilos globales
├── public/                     # Archivos públicos
│   └── favicon.ico
├── angular.json                 # Configuración de Angular
├── package.json                 # Dependencias del proyecto
├── tsconfig.json                # Configuración de TypeScript
└── tsconfig.app.json            # Configuración TS para la app
```

## 🔒 Seguridad

El proyecto incluye múltiples capas de seguridad:

- **SecurityService**: Protección contra manipulaciones desde la consola del navegador
- **Sanitización de Inputs**: Prevención de ataques XSS mediante sanitización automática
- **Validación de Formularios**: Validación reactiva en cliente con Angular Forms
- **Detección de DevTools**: Sistema de detección y protección contra herramientas de desarrollo
- **Content Security Policy**: Configurado para producción
- **Validación de Datos**: Validación de formularios antes de enviar al servidor

## 📝 Notas Importantes

- **Configuración de API**: Asegúrate de configurar correctamente la URL de tu API backend en `ClientApp/src/environments/environment.ts` y `environment.prod.ts` antes de desplegar.
- **Server-Side Rendering**: El proyecto está configurado para SSR con Angular Universal. Para ejecutar en modo SSR, usa `npm run serve:ssr:clientapp` después de construir.
- **Variables de Entorno**: Configura las variables de entorno según tu entorno (desarrollo/producción).

## 🤝 Contribución

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

[Especificar licencia si aplica]

## 👤 Autor

**Mia Denise Eritier (NoahEritier)**

---

Desarrollado con ❤️ para organizaciones modernas
