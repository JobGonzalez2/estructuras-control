/**
 * estructuras de control simples
 */
const edad = 20;

if (edad >= 18) {
    document.getElementById("test").innerHTML = "Eres mayor de edad.";
}

/**
 * estructuras de control dobles
 * ejemplo: #1
 */
if (edad >= 18) {
    document.getElementById("test").innerHTML = "Eres mayor de edad.";
} else {
    document.getElementById("test").innerHTML = "Eres menor de edad.";
}

/**
 * estructuras de control dobles
 * ejemplo: #1
 */
const hora = new Date().getHours();
let saludo;

if (hora < 18) {
    saludo = "Buenas tardes";
} else {
    saludo = "Buenas noches";
}
document.getElementById("test2").innerHTML = `<br>${saludo}`;

/**
 * estructuras de control multiples
 */     

const dia = new Date().getDay();
let Diasemana;
switch (dia) {
    case 0:
        Diasemana = "Domingo";
        break;
    case 1:
        Diasemana = "Lunes";
        break;
    case 2:
        Diasemana = "Martes";
        break;
    case 3:
        Diasemana = "Miércoles";
        break;
    case 4:
        Diasemana = "Jueves";
        break;
    case 5:
        Diasemana = "Viernes";
        break;
    case 6:
        Diasemana = "Sábado";
        break;
    default:
        Diasemana = "Día no válido";
}
document.getElementById("test3").innerHTML = `<br>Hoy es ${Diasemana}.`;