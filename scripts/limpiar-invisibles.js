// Ruta del archivo: scripts/limpiar-invisibles.js
// Utilidad de mantenimiento: elimina caracteres invisibles o de formato
// Unicode (espacios especiales, BOM, marcas de dirección de texto, guion
// invisible, etc.) que se cuelan al copiar/pegar código desde un navegador
// o chat, y que rompen el analizador de JSX aunque el código "se vea" bien.
// Ejecutar con: node scripts/limpiar-invisibles.js

const fs = require("fs");
const path = require("path");

// Carpetas donde puede vivir código fuente del proyecto
const DIRS = ["app", "components", "lib"];

// Rango amplio de caracteres invisibles/de formato que NO deben existir en
// código fuente:
// - \uFEFF            BOM (marca de orden de bytes)
// - \u00A0             espacio de no separación
// - \u00AD             guion invisible (soft hyphen)
// - \u200B-\u200F      ancho cero + marcas de dirección de texto (LRM/RLM)
// - \u2028-\u202F      separadores de línea/párrafo y marcas direccionales
// - \u2060-\u206F      "word joiner" y caracteres de formato invisibles
// - \u3000             espacio ancho de ideogramas (usado en teclados asiáticos)
const PATRON_INVISIBLES =
  /[\uFEFF\u00A0\u00AD\u200B-\u200F\u2028-\u202F\u2060-\u206F\u3000]/g;

function limpiarArchivo(filePath) {
  let contenido = fs.readFileSync(filePath, "utf8");
  const original = contenido;

  contenido = contenido.replace(PATRON_INVISIBLES, (caracter) => {
    // El BOM y los caracteres de ancho cero se eliminan por completo;
    // el resto de espacios especiales se reemplazan por un espacio normal
    if (caracter === "\uFEFF" || (caracter >= "\u200B" && caracter <= "\u200F")) {
      return "";
    }
    return " ";
  });

  if (contenido !== original) {
    fs.writeFileSync(filePath, contenido, "utf8");
    console.log("Limpiado:", filePath);
  }
}

function recorrer(dir) {
  for (const item of fs.readdirSync(dir)) {
    const rutaCompleta = path.join(dir, item);
    const stat = fs.statSync(rutaCompleta);
    if (stat.isDirectory()) recorrer(rutaCompleta);
    else if (/\.(tsx|ts|css)$/.test(item)) limpiarArchivo(rutaCompleta);
  }
}

DIRS.forEach((d) => {
  if (fs.existsSync(d)) recorrer(d);
});

console.log("Listo.");