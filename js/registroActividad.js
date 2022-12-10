const fecha = document.getElementById('fecha');
const tipoActividad = document.getElementById('slt-tipo-actividad');
const btnNuevaAF = document.getElementById('btn-tipo-ac');
const horaIncioAF = document.getElementById('hora-inicio');
const horaFinalAF = document.getElementById('hora-final');
const btnGuardarAF = document.getElementById('btn-guardar');

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
    })

    if (error) {
        Swal.fire({
            'title': '¡No se ha registrado el cambio!',
            'text': 'Por favor complete los campos resaltados',
            'icon': 'warning'
        })
    } else {
        Swal.fire({
                'title': 'Registro exitoso',
                'text': 'Se ha registrado correctamente',
                'icon': 'success'
            })
            /*registrarActividadNueva()*/
    }
}

btnGuardarAF.addEventListener('click', validar)