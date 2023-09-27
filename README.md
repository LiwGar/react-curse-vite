# Curso de React.js con Vite.js y TailwindCSS.

Ruta Full Stack Developer con JavaScript con Platzi

Hola!

El objetivo principal del curso fue, aprender a construir un E-commerce o Tienda Online con React.js.
Integrando Vite.js para el entorno de desarrollo, TailwindCSS para el manejo de estilos y React Router 
DOM para las rutas y navegación. y posteriormente desplegarla. 

En este proyecto se trabajó con componentes, props, estilos CSS, estados y efectos de React para visualizar los productos, órdenes de compra y filtrado por categorías, y consumimos la Fake Store de Platzi. 

Comparto el proyecto finalizado del curso a través del siguiente link, https://liwgar.github.io/react-curse-vite/
el cual está a disposición para que sea manipulado y sea puesto a prueba. 

Muchas Gracias Platzi. 


🚀 Pasos para hacer el deploy en Github 🚀
 

- Ir a la terminal, cambiar a la rama main (que es la que queremos hacer deploy):
git checkout main
 

- En la terminal verificar si en modo de producción funciona la app:
npm run build
 

- Se va a generar una carpeta llamada dist, para visualizar la app se corre:
npm run preview
 

- Se abre el navegador y debe salir la app con todas las funciones. 🎉
 
- En la terminal ejecutar:
npm install gh-pages --save-dev
 

- Vamos a VS Code y abrimos el archivo package.json, antes del cierre de la última llave, se
agrega:
"homepage": "https://nombre_usuario.github.io/nombre_repositorio/"
 

- En la parte de los scripts se agrega "deploy": "gh-pages -d dist" queda así:
"scripts": {
	"dev": "vite",
	"build": "vite build",
	"lint": "eslint src --ext js,jsx --report-unused-disable-directives --
	max-warnings 0",
	"preview": "vite preview",
	"predeploy": "npm run build",
	"deploy": "gh-pages -d dist"
},

 

- Abrimos el archivo vite.congig.js y agregamos base: "./", el código queda:
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: "./",
})
 

Guardamos, y en la terminal ejecutamos:
npm run deploy
 

Si sale Published es que todo salió bien. ✅
 
Vamos al repositorio en GitHub. En la página de GitHub, al recargarla, en la lista desplegable
de las ramas deben salir al menos las ramas main y gh-pages.
 
Vamos a la pestaña de “Settings”, luego en el panel izquierdo en la pestaña de “Pages”, en las
opciones de “Branch” ya la herramienta que instalamos de gh-pages seleccionó por nosotros la
opción de la rama gh-pages y la carpeta raíz: /root.
 
Después de unos minutos debe aparecer la dirección del despliegue. 🙏
 
Al entrar a la url, debe estar el proyecto funcionando, probar con todas las funciones. ✌️


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh.
