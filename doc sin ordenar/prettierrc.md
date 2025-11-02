# Limpiador de Código HTML

**Comando:**  
`Ctrl+Shift+P` → `HTML Code Cleaner: Begin`

**Atajo personalizado:**
```json
{
  "key": "ctrl+shift+f ctrl+shift+c",
  "command": "html-code-cleaner-tools.begin"
}
```

---

# Guía de Prettier

```json
{
  "semi": true,           // Añade punto y coma al final de cada línea
  "singleQuote": true,    // Usa comillas simples en vez de dobles para las cadenas
  "tabWidth": 2,          // Usa 2 espacios por cada nivel de indentación
  "printWidth": 8000      // Máximo de caracteres por línea antes de hacer salto de línea
}
```

Prettier Formatter para Visual Studio Code  
Prettier es un formateador de código con opiniones propias. Aplica un estilo consistente analizando tu código y reimprimiéndolo según sus propias reglas, considerando la longitud máxima de línea y ajustando el código cuando es necesario.

JavaScript · TypeScript · Flow · JSX · JSON  
CSS · SCSS · Less  
HTML · Vue · Angular · HANDLEBARS · Ember · Glimmer  
GraphQL · Markdown · YAML  
¿Tu lenguaje favorito?

Estado de compilación · Descargas en Marketplace de VS Code · Instalaciones en Marketplace de VS Code · estilo de código: prettier · Sigue a Prettier en Twitter

## Instalación
Instala a través de las extensiones de VS Code. Busca "Prettier - Code formatter".

Marketplace de Visual Studio Code: Prettier - Code formatter

También se puede instalar en VS Code: Abre VS Code Quick Open (Ctrl+P), pega el siguiente comando y presiona enter.

```
ext install esbenp.prettier-vscode
```

## Formateador predeterminado
Para asegurarte de que esta extensión se use sobre otras que tengas instaladas, configúrala como el formateador predeterminado en la configuración de VS Code. Este ajuste puede aplicarse a todos los lenguajes o a uno específico.

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

Si quieres desactivar Prettier en un lenguaje específico, puedes crear un archivo `.prettierignore` o usar la configuración `editor.defaultFormatter` de VS Code.

Usar Prettier para todos los lenguajes excepto JavaScript:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "<otro formateador>"
  }
}
```

Usar Prettier solo para JavaScript:

```json
{
  "editor.defaultFormatter": "<otro formateador>",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

También puedes desactivar el formato al guardar para lenguajes específicos si no quieres que se formateen automáticamente.

```json
{
  "[javascript]": {
    "editor.formatOnSave": false
  }
}
```

## Resolución de Prettier
Esta extensión usará Prettier desde las dependencias locales de tu proyecto (recomendado). Si `prettier.resolveGlobalModules` está en true, la extensión también puede intentar resolver módulos globales. Si Prettier no está instalado localmente o globalmente, se usará la versión incluida en la extensión.

Para instalar Prettier en tu proyecto y fijar su versión, ejecuta:

```
npm install prettier -D --save-exact
```

NOTA: Se te pedirá confirmar que quieres que la extensión cargue un módulo Prettier. Esto es para asegurar que no se cargue un módulo o script no confiable.

## Versión 3 de Prettier
La versión preliminar 3 de Prettier es compatible desde la versión 9.12.0. No está incluida por defecto, pero puedes usarla instalándola localmente en tu proyecto. La versión 10.0.0 de esta extensión incluirá Prettier 3.0.0 cuando salga de la fase preliminar. Para probar la versión 3 ahora, ejecuta:

```
npm i prettier@3.0.0-alpha.6 -D
```

## Plugins
Esta extensión soporta plugins de Prettier cuando usas una versión local o global de Prettier. Si tienes Prettier y un plugin registrado en tu package.json, la extensión intentará registrar el lenguaje y proveer formato automático para los lenguajes integrados y de plugins.

## Configuración
Hay varias opciones para configurar Prettier con esta extensión. Puedes usar la configuración de VS Code, archivos de configuración de Prettier o un archivo `.editorconfig`. Se recomienda siempre incluir un archivo de configuración de Prettier en tu proyecto especificando todos los ajustes.

Usar archivos de configuración de Prettier para establecer opciones de formato es el enfoque recomendado. Las opciones se buscan recursivamente desde el archivo que se está formateando, así que si quieres aplicar ajustes a todo el proyecto, pon la configuración en la raíz.

Configurar opciones por defecto:  
Si no quieres crear una nueva configuración de Prettier para cada proyecto o usar los ajustes de VS Code, puedes establecer una configuración por defecto con `prettier.configPath`. Ten cuidado, si esto está configurado, siempre se usará este valor y se ignorarán los archivos de configuración locales.

## Configuración en Visual Studio Code
Puedes usar la configuración de VS Code para configurar Prettier. Los ajustes se leen en este orden de prioridad:

1. Archivo de configuración de Prettier
2. `.editorconfig`
3. Configuración de Visual Studio Code (se ignora si hay otra configuración presente)

NOTA: Si hay un archivo de configuración local (por ejemplo, `.prettierrc`), no se usarán los ajustes de VS Code.

## Uso
Usando la paleta de comandos (CMD/CTRL + Shift + P):

1. CMD + Shift + P → Format Document  
O  
1. Selecciona el texto que quieres formatear  
2. CMD + Shift + P → Format Selection

## Atajos de teclado
Visual Studio Code provee atajos de teclado por defecto para el formato de código. Puedes consultarlos en la documentación de VS Code.

Si no te gustan los valores por defecto, puedes reasignar `editor.action.formatDocument` y `editor.action.formatSelection` en el menú de atajos de teclado de VS Code.

## Formato al guardar
Respeta la configuración `editor.formatOnSave`.

Puedes activar el formato al guardar por lenguaje:

```json
// Valor por defecto
"editor.formatOnSave": false,
// Activar por lenguaje
"[javascript]": {
    "editor.formatOnSave": true
}
```

## Formato de selección
El formato de selección funciona en varios lenguajes según lo que soporte Prettier:

- javascript
- javascriptreact
- typescript
- typescriptreact
- json
- graphql
- handlebars

## Formato de documento (forzado)
Si quieres formatear un documento que normalmente sería ignorado por Prettier (por ejemplo, está en `.prettierignore` o en `node_modules`), puedes ejecutar el comando "Format Document (Forced)" para forzar el formato. El modo forzado también ignora cualquier configuración de `requirePragma`.

## Integración con linters
La forma recomendada de integrar con linters es dejar que Prettier haga el formato y configurar el linter para que no gestione reglas de formato. Consulta la documentación de Prettier para instrucciones específicas.

## Confianza en el espacio de trabajo
Esta extensión utiliza las funciones de confianza de espacio de trabajo de VS Code. Si se ejecuta en un espacio de trabajo no confiable, solo usará la versión integrada de Prettier. No se soportan plugins ni módulos locales/globales. Además, ciertos ajustes están restringidos.

## Configuraciones

### Configuraciones de Prettier
Todas las opciones de Prettier pueden configurarse directamente en esta extensión. Se usan como respaldo cuando no hay archivo de configuración en tu proyecto. Consulta la documentación de Prettier para referencia.

Los valores por defecto corresponden a Prettier 2.0. Para usar valores de versiones anteriores, debes configurarlos manualmente.

### Opciones comunes de configuración de Prettier

A continuación se describen algunas de las opciones más utilizadas en la configuración de Prettier. Puedes establecerlas en tu archivo de configuración (`.prettierrc`, `prettier.config.js`, etc.) o directamente en la configuración de VS Code.

- **prettier.arrowParens**: Controla el uso de paréntesis en funciones de flecha.  
  Valores: `"always"` (siempre usa paréntesis), `"avoid"` (omite si hay un solo parámetro).

- **prettier.bracketSpacing**: Añade espacios entre corchetes en objetos literales.  
  Valores: `true` (usa espacios), `false` (sin espacios).

- **prettier.endOfLine**: Define el tipo de salto de línea.  
  Valores: `"auto"`, `"lf"`, `"crlf"`, `"cr"`.

- **prettier.htmlWhitespaceSensitivity**: Sensibilidad al espacio en blanco en HTML.  
  Valores: `"css"`, `"strict"`, `"ignore"`.

- **prettier.insertPragma**: Añade un comentario especial al principio de los archivos formateados.  
  Valores: `true`, `false`.

- **prettier.singleAttributePerLine**: Fuerza que cada atributo HTML esté en una línea separada.  
  Valores: `true`, `false`.

- **prettier.bracketSameLine**: Pone el corchete de cierre de JSX/HTML en la misma línea que el último atributo.  
  Valores: `true`, `false`.

- **prettier.jsxBracketSameLine**: (Obsoleto, usa `bracketSameLine`)  
  Valores: `true`, `false`.

- **prettier.jsxSingleQuote**: Usa comillas simples en atributos JSX.  
  Valores: `true`, `false`.

- **prettier.printWidth**: Máximo de caracteres por línea antes de hacer salto de línea.  
  Valor numérico (por ejemplo, `80`).

- **prettier.proseWrap**: Controla el ajuste de texto en Markdown.  
  Valores: `"always"`, `"never"`, `"preserve"`.

- **prettier.quoteProps**: Controla el uso de comillas en propiedades de objetos.  
  Valores: `"as-needed"`, `"consistent"`, `"preserve"`.

- **prettier.requirePragma**: Solo formatea archivos que tengan el comentario especial de pragma.  
  Valores: `true`, `false`.

- **prettier.semi**: Añade punto y coma al final de cada línea.  
  Valores: `true`, `false`.

- **prettier.singleQuote**: Usa comillas simples en vez de dobles para las cadenas.  
  Valores: `true`, `false`.

- **prettier.tabWidth**: Número de espacios por cada nivel de indentación.  
  Valor numérico (por ejemplo, `2`).

- **prettier.trailingComma**: Añade comas al final de listas y objetos.  
  Valores: `"none"`, `"es5"`, `"all"`.

- **prettier.useTabs**: Usa tabulaciones en vez de espacios para la indentación.  
  Valores: `true`, `false`.

- **prettier.vueIndentScriptAndStyle**: Indenta el contenido de `<script>` y `<style>` en archivos Vue.  
  Valores: `true`, `false`.

- **prettier.embeddedLanguageFormatting**: Formatea lenguajes embebidos (por ejemplo, CSS en HTML).  
  Valores: `"auto"`, `"off"`.

- **prettier.experimentalTernaries**: Habilita el formato experimental para expresiones ternarias.  
  Valores: `true`, `false`.

Consulta la [documentación oficial de Prettier](https://prettier.io/docs/en/options.html) para más detalles y ejemplos de cada opción.

### Configuraciones de la extensión
Estas configuraciones son específicas de VS Code y deben establecerse en el archivo de configuración de VS Code.

- prettier.enable (por defecto: true)  
  Controla si Prettier está habilitado. Debes reiniciar VS Code al cambiar este ajuste.

- prettier.requireConfig (por defecto: false)  
  Requiere un archivo de configuración de Prettier para formatear archivos. Los archivos sin título se formatearán usando la configuración de Prettier de VS Code incluso con esta opción activada.

- prettier.ignorePath (por defecto: .prettierignore)  
  Ruta al archivo de ignorados como `.gitignore` o `.prettierignore`. Los archivos que coincidan no se formatearán. Ponlo en null para no leer archivos de ignorados.

  Nota: Si se configura, siempre se usará este valor y se ignorarán los archivos de ignorados locales.

  Deshabilitado en espacios de trabajo no confiables

- prettier.configPath  
  Ruta personalizada al archivo de configuración de Prettier.

  Nota: Si se configura, siempre se usará este valor y se ignorarán los archivos de configuración locales. Una mejor opción para valores globales es poner un archivo `~/.prettierrc` en tu directorio home.

  Deshabilitado en espacios de trabajo no confiables

- prettier.prettierPath  
  Ruta personalizada al módulo de Prettier. Debe ser la carpeta del módulo, no la ruta del binario/script. Ejemplo: `./node_modules/prettier`, no `./bin/prettier`.

  Deshabilitado en espacios de trabajo no confiables

- prettier.resolveGlobalModules (por defecto: false)  
  Cuando está habilitado, la extensión intentará usar módulos npm o yarn globales si no puede resolver módulos locales.

  NOTA: Esta configuración puede afectar el rendimiento, especialmente en Windows con unidades de red. Solo actívala si necesitas usar módulos globales. Se recomienda usar módulos locales siempre que sea posible.

  Nota: Desactivar un lenguaje habilitado en una carpeta padre evitará el formato en vez de permitir que otro formateador lo ejecute.

  Deshabilitado en espacios de trabajo no confiables

- prettier.documentSelectors  
  Lista de patrones glob para registrar el formateador de Prettier. Normalmente en el formato `**/*.abc` para registrar la extensión como formateador de todos los archivos con la extensión abc. Útil si tienes overrides en tu configuración para mapear extensiones personalizadas a un parser.

  Es probable que también debas actualizar tu configuración de Prettier. Por ejemplo, si registro el siguiente selector de documento, Prettier aún no sabrá qué hacer con ese archivo. Necesito una extensión de Prettier que formatee el formato .abc o configurar Prettier.

  ```json
  {
    "prettier.documentSelectors": ["**/*.abc"]
  }
  ```

  Para decirle a Prettier cómo formatear un archivo .abc, puedo establecer un override en la configuración:

  ```json
  {
    "overrides": [
      {
        "files": "*.abc",
        "options": {
          "parser": "babel"
        }
      }
    ]
  }
  ```

  Deshabilitado en espacios de trabajo no confiables

- prettier.useEditorConfig (por defecto: true)  
  Si se debe tener en cuenta `.editorconfig` al analizar la configuración. Consulta la documentación de `prettier.resolveConfig` para más detalles.

  Deshabilitado en espacios de trabajo no confiables (siempre false)

- prettier.withNodeModules (por defecto: false)  
  Si se deben procesar archivos en la carpeta `node_modules`.

  Deshabilitado en espacios de trabajo no confiables

## Mensajes de error
- Falló la carga del módulo. Si tienes Prettier o plugins referenciados en package.json, asegúrate de haber ejecutado `npm install`.
- Cuando hay un package.json en tu proyecto y contiene Prettier, plugins o librerías de linter, la extensión intentará cargar estos módulos desde tu carpeta node_modules. Si ves este error, probablemente necesitas ejecutar `npm install` o `yarn install`.
- Tu proyecto está configurado para usar una versión antigua de Prettier que no puede ser usada por esta extensión. Actualiza a la última versión de Prettier.
- Debes actualizar a una versión más reciente de Prettier.
- Este espacio de trabajo no es confiable. Usando la versión integrada de Prettier.
- Debes confiar en este espacio de trabajo para usar plugins y módulos locales/globales. Consulta: Workspace Trust

