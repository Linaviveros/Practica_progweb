// Ejercicio 2: Galería Interactiva de Proyectos

// Función para mostrar la interacción de la galería
function run(callback) {
    console.log('\n"Ejercicio de Galería Interactiva"');
    console.log('"Abre index.html en un navegador para probarlo."');
    callback();
}

// Exportar la función para modularidad
module.exports = { run };
