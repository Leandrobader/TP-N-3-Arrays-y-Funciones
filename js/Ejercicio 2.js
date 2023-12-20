/**
 * 2- Crear un script que solicite al usuario mediante un prompt el nombre de
ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se
debe mostrar el arreglo generado, luego realizar las siguientes acciones:
● Mostrar la longitud del arreglo.
● Mostrar en el documento web los ítems de las posiciones primera, tercera y
última.
● Añade en última posición la ciudad de París.
● Escribe por pantalla el elemento que ocupa la segunda posición.
● Sustituye el elemento que ocupa la segunda posición por la ciudad de
'Barcelona'.
 */
let ciudades = [];
do {
    let ciudad = prompt("Ingrese una ciudad");
    ciudades.push(ciudad);
} while (confirm("Desea ingresar otra ciudad?"));

for(let i = 0; i<ciudades.length; i++){
    document.write(ciudades[i],"<br>");
}

//Longitud del arreglo

document.write("<h1> la longitud del arreglo es de: "+ ciudades.length + "</h1>");

//Mostrar en el documento web los ítems de las posiciones primera, tercera y última.

document.write("El elemento de la primera posicion es: " + ciudades[0]);
document.write("<br>", "El elemento de la tercera posicion es: " + ciudades[2]);
document.write("<br>", "El elemento de la ultima posicion es: " + ciudades[(ciudades.length)-1], "<br>");

//Añade en última posición la ciudad de París.

ciudades.push("paris");
document.write("<br>","Asi queda el array luego de agregar paris: ","<br>");
for(let i = 0; i<ciudades.length; i++){
    document.write(ciudades[i],"<br>");
}

//Escribe por pantalla el elemento que ocupa la segunda posición.

document.write("<br>","escribe por pantalla el elemento que ocupa la segunda posicion: " + ciudades[1]);

//Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

ciudades[1] = "barcelona";

document.write("<br>", "sustituimos el segundo elemento por BARCELONA","<br>");

for(let i = 0; i<ciudades.length; i++){
    document.write(ciudades[i],"<br>");
}






