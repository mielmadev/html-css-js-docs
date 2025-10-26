# Cómo subir tu proyecto a GitHub Pages

Sigue estos pasos para publicar tu sitio web en GitHub Pages:

1. **Sube tu proyecto a un repositorio en GitHub**

   - Crea un nuevo repositorio (por ejemplo, `cv-demo-html-css-js`).
   - Sube todos los archivos de tu proyecto, asegurándote de que `index.html` esté en la raíz del repositorio.

2. **Configura GitHub Pages**

   - Ve a la página principal de tu repositorio en GitHub.
   - Haz clic en "Settings" (Configuración).
   - Busca la sección "Pages" en el menú lateral.
   - En "Source" (Fuente), selecciona la rama `main` y la carpeta `/root` o `/`.
   - Haz clic en "Save" (Guardar).

3. **Accede a tu web publicada**
   - GitHub generará una URL pública (por ejemplo, `https://tuusuario.github.io/tu-repositorio/`).
   - Espera unos minutos y accede a esa URL para ver tu web online.

## Notas importantes

- El archivo principal debe llamarse `index.html` y estar en la raíz del repositorio.
- Si usas rutas relativas para CSS, JS o imágenes, asegúrate de que funcionen correctamente en la estructura publicada.
- Si haces cambios, solo tienes que hacer commit y push; GitHub Pages se actualizará automáticamente.

### ¿Y si mi proyecto es de React, Vue, Angular, etc.?

En proyectos hechos con frameworks como React, Vue o Angular, normalmente debes compilar el proyecto antes de subirlo a GitHub Pages. Esto se hace ejecutando un comando como `npm run build` o `yarn build`, que genera una carpeta (por ejemplo, `build` o `dist`) con los archivos estáticos listos para publicar. Luego, esa carpeta es la que se sube o se configura como fuente en GitHub Pages.

En cambio, en proyectos como este (HTML, CSS y JS puros), no necesitas compilar nada: simplemente sube los archivos tal cual están.

---

¿Dudas? Consulta la [documentación oficial de GitHub Pages](https://docs.github.com/en/pages).
