// Importar los módulos necesarios
const readline = require('readline');
const exercise1 = require('./exercise1');
const exercise2 = require('./exercise2');
const exercise3 = require('./exercise3');

// Crear interfaz para la entrada del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para mostrar el menú
function showMenu() {
    console.log('\n"Menú Principal:"');
    console.log('1. "Ejecutar Contador de Caracteres"');
    console.log('2. "Ejecutar Galería Interactiva"');
    console.log('3. "Ejecutar Lista de Tareas"');
    console.log('4. "Salir"');
    rl.question('\n"Elige una opción: "', (choice) => {
        handleChoice(choice);
    });
}

// Función para manejar la opción del usuario
function handleChoice(choice) {
    switch (choice) {
        case '1':
            exercise1.run(() => {
                showMenu();
            });
            break;
        case '2':
            exercise2.run(() => {
                showMenu();
            });
            break;
        case '3':
            exercise3.run(() => {
                showMenu();
            });
            break;
        case '4':
            console.log('\n"Saliendo del programa..."');
            rl.close();
            break;
        default:
            console.log('\n"Opción inválida, intenta de nuevo."');
            showMenu();
            break;
    }
}

// Iniciar el programa
showMenu();
