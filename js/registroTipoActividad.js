const inNombre = document.getElementById('inp-nombre');
const inIcono = document.getElementById('inp-icono');
const btnGuardarTipo = document.getElementById('btn-guardar-tipo');

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
        let tipoActividad = {
            'nombre': inNombre.value,
        };
        registrarDatos('registrar-tipoActividad', tipoActividad, "#");

    }
}

btnGuardarTipo.addEventListener('click', validar)