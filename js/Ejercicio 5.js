/***
 * 5- Definir una función que muestre información sobre una cadena de texto que se
le pasa como argumento. A partir de la cadena que se le pasa, la función
determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o
por una mezcla de ambas
 */

function MayusculasMinusculasCombinado(texto){
    if(texto === texto.toUpperCase()){
        return "El texto esta todo en mayusculas"
    }else if(texto === texto.toLowerCase()){
        return "El texto esta todo en minusculas"
    }else{
        return "El texto tiene caracteres en mayusculas y minusculas"
    }
}

let cadena = prompt("Ingrese texto");
document.write(MayusculasMinusculasCombinado(cadena));