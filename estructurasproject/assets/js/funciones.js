/**
 * funciones
 */

function myFunction() {
    document.getElementById("demo3").innerHTML = "Job Gonzalez";
}

/**
*funcion para capturar los datos 
*/
function datos(){
    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let resultado = unir(titulo,autor);
    document.getElementById("msj").innerHTML = resultado;
}

/**
 * funcion para unir una cadena de datos 
 */

function unir(titulo,autor){
    return "Titulo: " + titulo + "<br>"
    + "Autor: " + autor;
}

/**
 * funcion para comparar objetos
 */ 

function redondearnumero(){
    let num = document.getElementById("numero").value;

    //convertir y redondear el numero
    let redondeo = Math.round(Number(num));

    document.getElementById("resultado").innerHTML = " el numero redondeado es: " + redondeo ;
}