const txtInicioFecha = document.getElementById('txt-inicio-fecha');
const txtFinFecha = document.getElementById('txt-fin-fecha');
const txtInicioHora = document.getElementById('txt-inicio-hora');
const txtFinHora = document.getElementById('txt-fin-hora');
const btnGuardarAyuno = document.getElementById('btn-ayuno');

const validar = () => {
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
            'title': 'Registro incorrecto',
            'text': 'Por favor complete los campos resaltados',
            'icon': 'warning'
        })
    } else {
        Swal.fire({
                'title': 'Registro exitoso',
                'text': 'Se ha registrado correctamente',
                'icon': 'success'
            })
            /*registrarAyunoNuevo()*/
    };
}

btnGuardarAyuno.addEventListener('click', validar)