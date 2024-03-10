const formulario = document.getElementById('formulario'),
    nombre = formulario.nombre,
    correo = formulario.correo,
    mensaje = formulario.mensaje,
    terminos = formulario.terminos,
    error = document.getElementById('error');

function validarNombre(e){
    if (nombre.value === '' || nombre.value == null){
        error.style.display = 'block';
        error.innerHTML += '<li>Escribe tu nombre para continuar</li>';

        e.preventDefault();
    } else {
        error.style.display = 'none';
    }
}

function validarCorreo(e){
    if (correo.value === '' || correo.value == null){
        error.style.display = 'block';
        error.innerHTML += '<li>Escribe tu correo para continuar</li>';

        e.preventDefault();
    } else {
        error.style.display = 'none';
    }
}

function validarMensaje(e){
    if (mensaje.value === '' || mensaje.value == null){
        error.style.display = 'block';
        error.innerHTML += '<li>Escribe tu mensaje para continuar</li>';

        e.preventDefault();
    } else {
        error.style.display = 'none';
    }
}

function validarTerminos(e){
    if (terminos.checked === false){
        error.style.display = 'block';
        error.innerHTML += '<li>Acepta los terminos y condiciones para continuar</li>';

        e.preventDefault();
    } else {
        error.style.display = 'none';
    }
}

function validarForm(e){
    error.innerHTML = '';

    validarNombre(e);
    validarCorreo(e);
    validarMensaje(e);
    validarTerminos(e);
}

formulario.addEventListener('submit', validarForm)