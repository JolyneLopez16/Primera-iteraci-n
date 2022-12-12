const inCondicion = document.getElementById('inp-condicion');
const inTipo = document.getElementById('slt-tipo');
const btnGuardarObjetivo = document.getElementById('btn-guardar-objetivo');

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
        let objetivo = {
            'condicion': inCondicion.value,
            'tipo': inTipo.value
        };
        registrarDatos('registrar-objetivos', objetivo, "#");

    }
}

btnGuardarObjetivo.addEventListener('click', validar)