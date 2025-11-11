# Documentación HTML



## Normas Generales

### Archivos y nombres
Para crear una página web, crea un archivo `index.html` en minúsculas, sin tildes, símbolos ni espacios (usa guión medio). La extensión recomendada es `.html`.
## Nomenclatura de archivos HTML

Al nombrar archivos HTML, sigue estas recomendaciones:

- Usa solo letras minúsculas, números y guiones medios (`-`).
- Puedes empezar el nombre con un número si lo necesitas (por ejemplo, `1-inicio.html`, `7-fondos.html`).
- No uses espacios, tildes ni caracteres especiales como `*`, `?`, `/`, `\`, `:`, etc.
- La extensión debe ser `.html`.
- El nombre debe ser claro y descriptivo sobre el contenido del archivo.

Ejemplo de nombres válidos:
- `index.html`
- `contacto.html`
- `2-galeria.html`
- `ejercicio-3.html`

Esta nomenclatura facilita la organización, compatibilidad y mantenimiento de tus proyectos web.

### Elementos y Etiquetas
El código HTML se compone de elementos representados por etiquetas. Los elementos pueden contener otros elementos, formando una estructura jerárquica.

Por convención, las etiquetas se escriben en minúsculas y sin espacios entre los símbolos `<`, `</` y `>`.

```html
<mietiqueta>
</mietiqueta>
```

Algunas etiquetas son autoconclusivas:
```html
<mietiquetaexcepcion>
<mietiquetaexcepcion />
```
No inventes etiquetas de cierre para autoconclusivas:
```html
<!-- Incorrecto -->
<mietiquetaexcepcion>
</mietiquetaexcepcion>
```

### Comentarios
Para escribir comentarios en HTML:
```html
<!-- Esto es un comentario -->
```
No se pueden anidar comentarios.

### Atributos
Los atributos complementan las etiquetas y se añaden en la apertura:
```html
<mietiqueta miatributo="mivalor" otroatributo="otrovalor">
</mietiqueta>
```
No repitas el mismo atributo en una etiqueta.

## Esquema básico

### Estructura general
Todo documento HTML debe comenzar con:
```html
<!DOCTYPE html>
<html>
</html>
```

### Idioma principal (`lang`)
El atributo `lang` indica el idioma principal:
```html
<!DOCTYPE html>
<html lang="es">
</html>
```
Ejemplos de región:
```html
<html lang="es-ES">
<html lang="en-US">
```

### Encabezado (`<head>`)
Contiene metadatos:
```html
<!DOCTYPE html>
<html lang="es">
  <head>
  </head>
</html>
```

#### Codificación de caracteres
Para definir UTF-8:
```html
<meta charset="utf-8">
<meta charset="utf-8" />
```
No uses etiqueta de cierre:
```html
<!-- Incorrecto -->
<meta charset="utf-8">
</meta>
```

#### Título interno (`<title>`)
Define el título de la pestaña:
```html
<title>Mi primera página</title>
```

### Cuerpo del documento (`<body>`)
El contenido visible va en `<body>`:
```html
<body>
  <!-- Contenido visible -->
</body>
```

**Resumen:**
- Usa siempre `<!DOCTYPE html>` al inicio.
- El elemento raíz es `<html lang="...">`.
- Dentro de `<html>`, coloca `<head>` (con `<meta charset="utf-8">` y `<title>`) y `<body>`.
- Todo el contenido visible va en `<body>`.

### Recursos
[Ejercicio Esquema Básico](Ejercicios/html-0-plantilla)
[Ver esquema básico](esquema-basico.html)

## Validación

### ¿Por qué validar?
Validar el código HTML asegura compatibilidad, accesibilidad y funcionamiento correcto en todos los navegadores.

### Herramienta recomendada
El **W3C Validator** permite validar HTML por URL, archivo o pegando el código.

### Ejemplo de código a validar
```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <title>Ejemplo de validación</title>
  </head>
  <body>
    <h1>¡Hola, mundo!</h1>
    <p>Este es un ejemplo para validar.</p>
  </body>
</html>
```

### Enlaces útiles
- [Validador oficial W3C](https://validator.w3.org/)
- [Validar por archivo](https://validator.w3.org/#validate_by_upload)

## Textos

### Párrafos
Estructuran la mayor parte del contenido:
```html
<p>este es un párrafo</p>
<p>este es otro párrafo</p>
```

### Saltos de línea
Para saltos de línea dentro de un párrafo:
```html
<p>
  Imagine there’s no heaven<br>
  It’s easy if you try
</p>
```
No uses dos `br` seguidos para simular un párrafo; usa CSS para separar párrafos.

### Énfasis y significado
Para destacar texto importante:
```html
<p>
  <strong>Aviso:</strong> No olvide utilizar un <em>DNI válido</em>.
</p>
```

### Citas
#### Bloque de cita
Para bloques de texto citados:
```html
<blockquote>
  <p>En un lugar de la Mancha...</p>
</blockquote>
```
#### Citas en línea
Para citas cortas:
```html
<p>Como dijo <cite>Hamlet</cite>: <q>ser o no ser, esa es la cuestión</q>.</p>
```

### Abreviaturas
Para marcar siglas o acrónimos:
```html
<abbr title="Unión Europea">UE</abbr>
```
El atributo `title` puede usarse en casi cualquier elemento HTML para complementar información. No lo confundas con la etiqueta `<title>` del `<head>`.

### Recursos
[Ejercicio](Ejercicios/html-1-pruebas)
[html-textos](html-texto.html)
[Generador texto aleatorio](https://es.lipsum.com/)
[Elige tu Ipsum](https://idsgn.dropmark.com/107)



## Enlaces

### ¿Qué es un enlace?
Los enlaces (vínculos o hiperenlaces) son la base de la navegación web. Se implementan con el elemento `<a>`, que requiere el atributo `href` (ruta) y el texto del enlace.

### Estructura general
```html
<a href="ruta">texto del enlace</a>
```

### Ejemplos de rutas
- Mismo directorio:
```html
<a href="mipagina.html">página personal</a>
```
- Subdirectorio:
```html
<a href="personal/mipagina.html">mi página</a>
```
- Nivel superior:
```html
<a href="../mipagina.html">mi página</a>
```
- Varios niveles:
```html
<a href="personal/io/mio/mipagina.html">mi página</a>
<a href="../../../mipagina.html">mi página</a>
```

### Enlaces externos
Los enlaces externos deben empezar por `http://` o `https://`.

**Incorrecto:**
```html
<a href="google.es">Google</a>
<a href="www.google.es">Google</a>
<a href="http:www.google.es">Google</a>
```
**Correcto:**
```html
<a href="http://www.google.es">Google</a>
<a href="https://www.google.es">Google</a>
<a href="https://play.google.com/">Google Play</a>
```

### Atributo title
El atributo `title` añade información adicional al enlace (aparece como tooltip). Úsalo solo si aporta valor.

**Incorrecto:**
```html
<a href="http://www.yahoo.com" title="Yahoo">Yahoo</a>
```
**Correcto:**
```html
<a href="http://www.yahoo.com" title="Yahoo: noticias, e-mail, fotos, grupos, etc...">Yahoo</a>
```

### Enlaces en nueva ventana/pestaña
Para abrir enlaces externos en nueva pestaña, usa:
```html
<a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Google</a>
```

### Enlaces internos (anclas)
Para saltar a una parte de la misma página, usa el atributo `id` en el destino y una almohadilla `#` en el enlace:
```html
<a href="#cancion2">Canción 2</a>
...
<p id="cancion2">Esta es la Canción 2</p>
```
Normas para el atributo `id`:
- Debe ser único en la página
- No puede empezar con número
- Sin espacios ni caracteres especiales

### Idioma de destino
Si el enlace apunta a una página en otro idioma, usa el atributo `hreflang`:
```html
<a href="http://www.nasa.gov" hreflang="en">NASA</a>
<a href="http://www.paris.fr" hreflang="fr">Ayuntamiento de París</a>
```
### Recursos
[Ejercicio html Enlaces](Ejercicios/html-2-enlaces)



## Imágenes

### Sintaxis básica
Las imágenes se insertan con la etiqueta `<img>`, que es autoconclusiva y requiere dos atributos obligatorios:
- `src`: ruta de la imagen
- `alt`: texto alternativo

```html
<img src="ruta" alt="texto alternativo">
<img src="ruta" alt="texto alternativo" />
<img src="logo.jpg" alt="ACME">
<img src="logo.jpg" alt="ACME" />
```

**Incorrecto:**
```html
<img>
<img src="logo.jpg">
<img alt="ACME">
```
La ruta sigue las mismas reglas que los enlaces.

### Texto alternativo (`alt`)
El atributo `alt` es obligatorio y debe describir el contenido o función de la imagen:
- Si la imagen está en un enlace, el `alt` debe ser el texto del enlace.
- Si la imagen aporta información, el `alt` debe describirla.
- Si es decorativa, deja `alt=""`.

```html
<img src="lavado-mano.jpg" alt="Lavado a mano">
<img src="personas.jpg" alt="">
<a href="https://www.google.es">
  <img src="logo-google.jpg" alt="Google">
</a>
```

### Atributo `title` en imágenes
No es necesario usar `title` en imágenes salvo casos muy justificados. No debe duplicar el valor de `alt`.

### Imágenes como enlace
Puedes usar una imagen como enlace reemplazando el texto por la imagen:

```html
<a href="index.html">
  <img src="mapa.gif" alt="mapa web">
</a>
```

### Formatos recomendados

#### Formatos recomendados de imagen

- **JPG/JPEG**: Formato con compresión con pérdida, ideal para fotografías e imágenes con muchos colores y degradados. No soporta transparencia. Es el más usado para fotos en la web por su buena relación calidad/peso.
- **PNG**: Soporta transparencia y compresión sin pérdida. Recomendado para logotipos, iconos, gráficos con fondo transparente o imágenes que requieren alta calidad. Suele pesar más que JPG.
- **GIF**: Permite animaciones simples y transparencia binaria (sin semitransparencia). Útil para pequeños gráficos animados, pero limitado a 256 colores, por lo que no es adecuado para fotos.
- **SVG**: Formato vectorial, ideal para iconos, logotipos y gráficos escalables sin pérdida de calidad. Muy ligero y editable con código. No apto para fotos.
- **WEBP**: Formato moderno de Google, soporta compresión con y sin pérdida, transparencia y animación. Suele ofrecer mejor compresión que JPG y PNG, pero no es compatible con navegadores muy antiguos.

**Resumen de uso:**
- Usa **JPG** para fotos.
- Usa **PNG** para gráficos con transparencia o alta calidad.
- Usa **SVG** para iconos y logotipos.
- Usa **WEBP** si buscas máxima optimización y compatibilidad moderna.
- Usa **GIF** solo para animaciones simples.

### Mapas de imágenes
Permiten definir áreas activas (hotpots) sobre una imagen que actúan como enlaces. Actualmente se usan poco y, si se usan, deben ser responsive.


<a href="index.html">
	<img src="mapa.gif" alt="mapa web">
</a>
Formato de imagen a utilizar:
Los formatos a utilizar son los generales para imágenes: PNG, JPG (JPEG) y GIF, SVG y WEBP.

Un mapa de imágenes es simplemente una imagen sobre la que se definen unas áreas activas (hotpots) que actuarán como enlaces. Si tomamos una imagen de un mapa del mundo, por ejemplo, cada continente podría ser un área activa.

En la actualidad apenas se utilizan y de hacerlo, usaremos un generador y nos aseguraremos de que el resultado sea Responsive.




