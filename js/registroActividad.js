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
    });

    if (error) {
        Swal.fire({
            'icon': 'warning',
            'title': '¡No se ha registrado el cambio!',
            'text': 'Por favor llene todos los espacios.'
        });
    } else {
        let horas = horaFinalAF.value - horaIncioAF.value;
        let actividad = {
            'fecha': fecha.value,
            'tipo': tipoActividad.value,
            'inicio': horaIncioAF.value,
            'final': horaFinalAF.value,
            'horas': horas
        };
        registrarDatos('registrar-fisicas', actividad, "#");

    }
}

btnGuardarAF.addEventListener('click', validar)