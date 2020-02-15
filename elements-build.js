const fs = require("fs-extra");
const concat = require("concat");

(async function build() {
  const files = [
    "./dist/PropertyHunters/runtime-es2015.js",
    "./dist/PropertyHunters/polyfills-es2015.js",
    "./dist/PropertyHunters/scripts.js",
    "./dist/PropertyHunters/main-es2015.js"
  ];

  await fs.ensureDir("elementos");
  await concat(files, "elementos/componentes.js");
  await fs.copyFile(
    "./dist/PropertyHunters/styles.css",
    "elementos/styles.css"
  );
})();
