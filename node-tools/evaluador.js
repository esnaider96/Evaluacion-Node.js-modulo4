// Función para saber si eres mayor o menor de edad:
function chequearlaedad(edad) {
    if (edad >= 18) {
        return "Usted es mayor de edad, es un adulto responsable para nuestra sociedad en Venezuela.";
    } else {
        return "Usted es menor de edad y debe tener cuidado con sus acciones y decisiones, ya que no es un adulto para nuestra sociedad en Venezuela.";
    }
}

// Ahora exportamos la función:
module.exports = chequearlaedad;