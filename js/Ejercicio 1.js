/**
 * 1- Crear un array llamado meses y que almacene el nombre de los doce meses del
año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.
Output:
LISTA DE MESES
*ENERO
*FEB
...
 */

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
document.write("Lista de Meses","<br>")
for(let i =0; i<meses.length;i++){
    document.write("*",meses[i])
    document.write("<br>")
}
