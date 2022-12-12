const fecha = document.getElementById('fecha-actividad');
const tipoActividad = document.getElementById('slt-tipo-actividad');
const btnNuevaAF = document.getElementById('btn-tipo-ac');
const horaIncioAF = document.getElementById('hora-inicio');
const horaFinalAF = document.getElementById('hora-final');
const btnGuardarAF = document.getElementById('btn-guardar');


const calcularHoras = (horaF, horaI) => {
    let minutosF = horaF.substring(3, 6);
    let horasF = horaF.substring(0, 2);
    let minutosI = horaI.substring(3, 6);
    let horasI = horaI.substring(0, 2);
    horasF = Number(horasF);
    minutosF = Number(minutosF);
    horasI = Number(horasI);
    minutosI = Number(minutosI);
    let horaExactaF = horasF + (minutosF / 60);
    let horaExactaI = horasI + (minutosI / 60);

    let horasEjercitadas = horaExactaF - horaExactaI;

    return horasEjercitadas.toFixed(2)
}

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
        let horas = calcularHoras(horaFinalAF.value, horaIncioAF.value);
        let actividad = {
            'fecha': fecha.value,
            'tipo': tipoActividad.value,
            'inicio': horaIncioAF.value,
            'fin': horaFinalAF.value,
            'horas': horas
        };
        console.log(actividad);
        registrarDatos('registrar-fisicas', actividad, "#");

    }
}

btnGuardarAF.addEventListener('click', validar)