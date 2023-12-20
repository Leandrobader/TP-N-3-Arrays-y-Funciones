/**
 * 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado
por pantalla, la creación de la tabla debe ser realizada con una función y mostrar
solo los resultados del 1 al 10 del número elegido por el usuario
 */

function tablaDeMultiplicar(num){
    document.write("<h1>","TABLA DEL ", num,"</h1>","<br>")
    for(let i = 0; i<=10; i++){
        document.write(num,"*",i,"= ",num * i,"<br>")
    }
}

let numero = parseInt(prompt("Ingrese un numero para mostrar su tabla de multiplicar"))
tablaDeMultiplicar(numero);
