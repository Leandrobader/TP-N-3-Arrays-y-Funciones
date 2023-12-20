/**
 * 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
luego crear una función para calcular su perímetro y mostrarlo por pantalla.
● La fórmula del perímetro es p = 2*(a +b
 */

function PerimetroRectangulo(lado1,lado2){
    return 2*(lado1 + lado2)
}

let lado1 = parseInt(prompt("Ingrese un lado del rectangulo"));
let lado2 = parseInt(prompt("Ingrese el otro lado del rectangulo"));

document.write("EL PERIMETRO DEL RECTANGULO ES: ", PerimetroRectangulo(lado1,lado2));