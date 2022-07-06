
function validarRut() {
    var rut="";
    var salida="";

    rut = document.getElementById("idRut").value;

    var dv = rut.charAt(rut.length-1);
        
    rut = rut.substring(0,rut.length-1);
    var digitoVerificadorVal=digitoVerificador(rut);
     

    if (rut.length < 7) console.log("Rut muy corto"); //rut muy corto

    var r = rut.split("-");
    if (rut.length == 0 ||  r.length > 1 || rut.length < 7 || digitoVerificadorVal!=dv){
        document.getElementById("idMensajeRut").innerHTML="Error, Informacion ingresada no valida, vuelva a intentarlo";
        document.getElementById("idRut").value="";
    }
    else{
        salida = rut + "-" + dv;
        document.getElementById("idRut").value=salida;
        document.getElementById("idMensajeRut").innerHTML="";
    }
}


function numero(){
    let numero = 9;
    numero=document.getElementById("txt_numero").value;
    if ((numero.charAt(0)=="9") && numero.length==9){
        document.getElementById("idMensajeError5").innerHTML="";
    }else{
        document.getElementById("idMensajeError5").innerHTML="Error, Informacion ingresada no valida, vuelva a intentarlo";
        document.getElementById("txt_numero").value="";
    }
}