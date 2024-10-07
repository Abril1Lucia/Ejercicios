let nameInput = document.getElementById('name');
console.log(nameInput)



let saludoP = document.querySelector('.mostrarSaludo');
console.log(saludoP);





function saludarUsuario() {
    let name = nameInput.value;
    console.log(name)



let mensaje = '';

if (name) {

    mensaje = 'Hola ' + name

    saludoP.textContent = mensaje;

}else {
    mensaje = 'Hola we'
    saludoP.textContent = mensaje;
}

}
