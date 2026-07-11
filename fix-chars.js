// fix-chars.js
// Elimina caracteres invisibles (espacios de no separación, BOM, etc.)
// que a veces se cuelan al copiar/pegar código desde un navegador.

const fs = require("fs");
const path = require("path");

const DIRS = ["components", "app", "lib"];

function limpiarArchivo(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  const original = content;

  content = content
    .replace(/\u00A0/g, " ")   // espacio de no separación -> espacio normal
    .replace(/\uFEFF/g, "")    // BOM
    .replace(/[\u200B-\u200D]/g, ""); // caracteres de ancho cero

  if (content !== original) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log("Limpiado:", filePath);
  }
}

function recorrer(dir) {
  for (const item of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) recorrer(fullPath);
    else if (/\.(tsx|ts|css)$/.test(item)) limpiarArchivo(fullPath);
  }
}

DIRS.forEach((d) => {
  if (fs.existsSync(d)) recorrer(d);
});

console.log("Listo.");