const submitFunction = (event) =>{
    //event.preventDefault(); //previene la actualizacion de la pagina web
    if(!validarFormulario()){
        event.preventDefault();
    } else{
        event.preventDefault();

        alert(
            'Nombre: ' + document.getElementById('nombre').value + '\n'+
            'Apellido: ' + document.getElementById('apellido').value + '\n'+
            'Identificacion: ' + document.getElementById('identificacion').value + '\n'+
            'Correo: ' + document.getElementById('correo').value + '\n'+
            'Edad: ' + document.getElementById('edad').value + '\n'+
            'Actividad: ' + document.getElementById('actividad').value + '\n'+
            'Genero: ' + document.getElementById('genero').value + '\n'+
            'Nivel de Estudios: ' + document.getElementById('nivelEstudio').value + '\n'
        )
    }
}

document.getElementById('formulario').addEventListener('submit', submitFunction) //Escucha el envio del formulario

function validarFormulario(){
    const camposTextos = document.querySelectorAll('input[type="text"]');
    let valCorrecta = true;

    //Esta seccion valida los campos de entrada de texto
    camposTextos.forEach(campo => {
        let errorCampo = document.getElementById('error'+ campo.id.charAt(0).toUpperCase() + campo.id.slice(1)) //Error + id con la primera letra en mayuscula
        if(campo.value.length== ''){
            mostrarError(errorCampo, '*Este campo es requerido')
            valCorrecta = false;
        }
        else if (campo.value.length> 0 && campo.value.length<3){
            mostrarError(errorCampo, '*Este campo debe contener más de 3 caracteres')
            valCorrecta = false;
        }
        else{
            ocultarError(errorCampo)
        }
    })

    //Esta seccion valida la entrada de un correo valido
    const email= document.getElementById('correo');
    let errorEmail=document.getElementById('errorCorreo')
    if(/^[^\s@]+@[^\s@]+\-[^\s@]+$/.test(email.value)){  //este regex valida que el formato del email sea valido
        ocultarError(errorEmail)
    } 
    else{
        mostrarError(errorEmail, '*Ingrese un correo electrónico válido')
    }

    //Validacion de Edad
    const edad= document.getElementById('edad');
    const errorEdad = document.getElementById('errorEdad')
    if(edad.value < 18){  //Valida que sea mayor 18 años
        mostrarError(errorEdad, '*Debe ser una persona mayor a 18 años')
        valCorrecta= false
    } 
    else{
        ocultarError(errorEdad)
    }

    const actividad= document.getElementById('actividad')
    const errorActividad= document.getElementById('errorActividad')
    if(actividad.value == ''){
        mostrarError(errorActividad, '*Seleccione una Actividad')
        valCorrecta= false;
    }
    else{
        ocultarError(errorActividad)
    }

    const genero= document.getElementById('Genero')
    const errorGenero= document.getElementById('errorGenero')
    if(genero.value == ''){
        mostrarError(errorGenero, '*Seleccione un tipo de Genero')
        valCorrecta= false;
    }
    else{
        ocultarError(errorGenero)
    }

    const nivelEstudio= document.getElementById('nivelEstudio')
    const errorNivelStudio= document.getElementById('errorNivelStudio')
    if(nivelEstudio.value == ''){
        mostrarError(errorNivelStudio, '*Seleccione un Nivel de estudio')
        valCorrecta= false;
    }
    else{
        ocultarError(errorNivelStudio)
    }
    const aceptoTerminos= document.getElementById('aceptoTerminos')
    const errorAceptoTerminos= document.getElementById('errorTerminos')
    if(!aceptoTerminos.checked){
        mostrarError(errorAceptoTerminos, '*Debe aceptar los Terminos y Condiciones')
        valCorrecta= false;
    }
    else{
        ocultarError(errorAceptoTerminos)
    }

    return valCorrecta //esto dirá si el formulario está completo o no
}

const mostrarError = (elemento, mensaje) =>{
    elemento.textContent= mensaje;
    elemento.style.display = "block";
}

const ocultarError = (elemento) =>{
    elemento.textContent= '';
    elemento.style.display = "none";
}
