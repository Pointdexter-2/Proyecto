document.getElementById("btn_registrar").addEventListener("click",registro);
document.getElementById("btn_iniciar").addEventListener("click",iniciar);

var cont_log_reg = document.querySelector(".contenedor__log-reg");
var form_login = document.querySelector(".formulario_login");
var form_register = document.querySelector(".formulario_registro");
var caja_trasera_log = document.querySelector(".caja__login");
var caja_trasera_reg = document.querySelector(".caja__register");

function iniciar(){
    form_register.style.display="none";//cuando se le da click al bootn registrase se mostrara
    cont_log_reg.style.left="10px";
    form_login.style.display="block";
    caja_trasera_reg.style.opacity="1";
    caja_trasera_log.style.opacity="0";
}
function registro(){
    form_register.style.display="block";//cuando se le da click al bootn registrase se mostrara
    cont_log_reg.style.left="410px";
    form_login.style.display="none";
    caja_trasera_reg.style.opacity="0";
    caja_trasera_log.style.opacity="1";
}
