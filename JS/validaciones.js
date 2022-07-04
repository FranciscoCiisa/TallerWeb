$( document ).ready(function() {
    llenarEmpresasDeVenta();
});

function llenarEmpresasDeVenta() {
    $.ajax('https://62aa6b293b3143855447186d.mockapi.io/localesDeVentas', {
        type: 'GET', // http method
        success: function (data, status, xhr) {
            for (var i = 0; i < data.length; i++) {
                var empresaNombre = data[i].empresaNombre;
                var empresaDireccion = data[i].empresaDireccion;
                var productoNombre = data[i].productoNombre;
                var productoPrecio = data[i].productoPrecio;
                var empresaTelefono = data[i].empresaTelefono;
                var empresaCorreo = data[i].empresaCorreo;
                var filaTabla = '<tr>'
                                + '<td>'+empresaNombre+'</td>'
                                + '<td>'+empresaDireccion+'</td>'
                                + '<td>'+productoNombre+'</td>'
                                + '<td>'+productoPrecio+'</td>'
                                + '<td>'+empresaTelefono+'</td>'
                                + '<td>'+empresaCorreo+'</td>'
                                '</tr>'
                $("#tabla-empresas").append(filaTabla);
            }
        },
        error: function (jqXhr, textStatus, errorMessage) {
            alert("No me puede conectar a la api: error " + errorMessage + " estado: " + textStatus);
        }
    });
}

function validar(){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var correoElectronico = document.getElementById("correo").value;
    var fechaNac = document.getElementById("fechaNac").value;
    var genero = document.getElementById("genero").checked;
    fechaNac = fechaNac.substring(0,4);
    var fechaActual = new Date();
    var anioActual = fechaHoy.getFullYear();
    var edad = anioActual - fechaNac;
    

    if(nombre.length > 3){
        document.getElementById("errorNombre").style.display="none";
    }
    else{
        document.getElementById("errorNombre").style.display="block";
    }
    if(apellido.length > 3){
        document.getElementById("errorApellido").style.display="none";
    }
    else{
        document.getElementById("errorApellido").style.display="block";
    }
    if(correoElectronico.indexOf("@")){
        document.getElementById("errorCorreo").style.display="none";
    }
    else{
        document.getElementById("errorCorreo").style.display="block";
    }
    if(edad >= 18){
        document.getElementById("errorEdad").style.display="none";
    }
    else{
        document.getElementById("errorEdad").style.display="block";
    }
    if(genero == true){
        document.getElementById("errorGenero").style.display="none";
    }
    else{
        document.getElementById("errorGenero").style.display="block";
    }
}