// Como primer paso, importaré el módulo fs para trabajar con los archivos:
const fs = require('fs');
const chequearlaedad = require('evaluador.js'); // Aquí importo la función.

// Como segundo paso, declaramos las variables:
const nombrecompleto = "Esnaider Jovanny Monterrosa González"; // Cambiamos este contenido por el nombre completo que ingrese el usuaio.
const edad = 28; // Coloco aquí mi edad real, pero el usuario puede cambiarla por la que quiera.

// Como tercer paso, usamos la función importada para saber el estatus:
const estatus = chequearlaedad(edad);

// Como cuarto paso, creamos el contenido del archivo info.txt:
// Usé template literals para facilitar la creación de todo el contenido.
const contenido = `
● Nombre: ${nombrecompleto}
● Edad: ${edad} años
● Estatus: ${estatus}
● Mensaje: ¡Recuerda siempre hacer el bien para nuestro planeta y en especial para nuestro querido país Venezuela!.`;

// Por último, escribimos el archivo info.txt:
try {
    fs.writeFileSync('info.txt', contenido);
    console.log("¡Listo! el archivo: info.txt se ha creado exitosamente.");
} catch (error) {
    console.error("¡Lo siento mucho, estimado! ha ocurrido un error, intentalo nuevamente, por favor.", error);
}