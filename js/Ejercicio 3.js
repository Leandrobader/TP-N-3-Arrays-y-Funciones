/**
 * 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la
función Math.random para obtener números aleatorios entre 1 y 6 para cada uno
de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y
anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces
esta operación.
 */

let dado1
let dado2
let suma=0
let arraySuma = []
let dos = 0
let tres = 0
let cuatro = 0
let cinco = 0
let seis = 0
let siete = 0
let ocho = 0
let nueve = 0
let diez = 0
let once = 0
let doce = 0

for(let i = 0; i<11; i++){
    arraySuma[i] = 0;
}

for(let i = 0; i < 50; i++){
    dado1 = Math.ceil(Math.random()*6);
    dado2 = Math.ceil(Math.random()*6);
    suma = dado1 + dado2
    console.log("suma = ",suma);
    if(suma === 2){
        dos = dos + 1
        arraySuma[0] = dos;
        console.log(arraySuma[0]);
    }else if(suma === 3){
        tres = tres + 1
        arraySuma[1] = tres;
        console.log(arraySuma[1]);
    }else if(suma === 4){
        cuatro++
        arraySuma[2]=cuatro
        console.log(arraySuma[2]);
    }else if(suma === 5){
        cinco ++
        arraySuma[3] = cinco;
        console.log(arraySuma[3]);
    }else if(suma === 6){
        seis ++
        arraySuma[4] = seis;
        console.log(arraySuma[4]);
    }else if(suma === 7){
        siete ++
        arraySuma[5] = siete;
        console.log(arraySuma[5]);
    }
}

document.write("El valor 2 salio: "+arraySuma[0]+" veces","<br>")
document.write("El valor 3 salio: "+arraySuma[1]+" veces","<br>")
document.write("El valor 4 salio: "+arraySuma[2]+" veces","<br>")
document.write("El valor 5 salio: "+arraySuma[3]+" veces","<br>")
document.write("El valor 6 salio: "+arraySuma[4]+" veces","<br>")
document.write("El valor 7 salio: "+arraySuma[5]+" veces","<br>")
