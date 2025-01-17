const inNombre = document.getElementById('inp-nombre');
const inEstado = document.getElementById('inp-estado');
const inDescripcion = document.getElementById('inp-descripcion');
const inTratamiento = document.getElementById('inp-tratamiento');
const btnGuardarEnfermedad = document.getElementById('btn-guardar-enfermedad');

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
        let enfermedad = {
            'nombre': inNombre.value,
            'estado': inEstado.value,
            'descripcion': inDescripcion.value,
            'tratamiento': inTratamiento.value
        };
        console.log(enfermedad);
        registrarDatos('registrar-enfermedad', enfermedad, "#");

    }
}

btnGuardarEnfermedad.addEventListener('click', validar)