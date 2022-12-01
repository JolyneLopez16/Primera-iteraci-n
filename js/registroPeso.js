datePicker.max = new Date().toISOString().split("T")[0];

/* Validar Inicia Aquí */

const inPeso = document.getElementById('inp-peso');
const inFechaPeso = document.getElementById('datePicker');
const btnGuardarP = document.getElementById('btn-guardar-peso');


const obtenerUltimoCorreo = async() => {
    datosUsuario = await obtenerListaDatos('/obtener-usuario');
    let uId = datosUsuario[datosUsuario.length - 1].correo;
    return uId;
}

const obtenerUltimaFecha = async() => {
    registrosPesos = await obtenerListaDatos('/obtener-')
}

const validar = async() => {
    let error = false;
    let camposRequeridos = document.querySelectorAll('.requerido');

    camposRequeridos.forEach(campo => {
        if (campo.value == '') {
            campo.classList.add('input-error');
            error = true;
        } else {
            campo.classList.remove('input-error')
        }
    });

    if (error) {
        Swal.fire({
            'icon': 'warning',
            'title': '¡No se ha registrado el cambio!',
            'text': 'Por favor llene todos los espacios.'
        });
    } else {
        Swal.fire({
            'icon': 'success',
            'title': '¡Has ingresado tu nuevo peso correctamente!',
            'text': 'Podés revisarlo en tu perfil.'

        });
        let peso = {
            'peso': inPeso.value,
            'fecha': inFechaPeso.value
        };
        let pesoActual = {
            'correo': await obtenerUltimoCorreo(),
            'pesoActual': inPeso.value
        }

        if (peso.fecha < Date)
            registrarDatos(pesoActual, '/modificar-peso');
        console.log(pesoActual);
        registrarDatos(peso, '/registrar-pesos');


    }
}



btnGuardarP.addEventListener('click', validar)