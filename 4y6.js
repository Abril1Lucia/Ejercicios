// Ejercicio cuatro


let name= "";

while (true) {
    let texto = prompt("pon un texto de lo que sea we");
    if (texto) {
        alert("Gracias, Ya no te molesto mas :)");
        break;
    } else {
        alert("NO TE VOY A DEJAR DE JODER WE");
    }
}



// Ejercicio seis


let numero1= parseFloat(prompt("Ingrese el primer numero"))
let numero2= parseFloat(prompt("Ingrese el segundo numero"))

let suma= numero1 + numero2
let resta= numero1 - numero2

alert("El resultado de " + numero1 + " + " + numero2 + " = " + suma + "\n" + 
    "El resultado de " + numero1 + " - " + numero2 + " = " + resta);
