function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

let boton = document.getElementById("regBtn");
let checkbox = document.getElementById("terminos");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let contraseña1 = document.getElementById("password1");
let contraseña2 = document.getElementById("password2");


boton.addEventListener("click", function(){
if ((contraseña1.value===contraseña2.value) && (checkbox.checked) && ((nombre.value.length && apellido.value.length && email.value.length) >0)
 && ((contraseña1.value.length) >=6)){
    showAlertSuccess(); 
} else {
    showAlertError();
}
})