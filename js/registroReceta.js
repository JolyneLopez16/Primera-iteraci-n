const inNombre = document.getElementById('inp-nombre');
const inIngredientes = document.getElementById('inp-ingredientes');
const inTipo = document.getElementById('slt-tipo');
const inCategoria = document.getElementById('slt-categoria');
const inPasos = document.getElementById('inp-pasos');
const inFoto = document.getElementById('inp-foto');
const btnGuardarReceta = document.getElementById('btn-guardar-receta');

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
                'title': '¡Has ingresado una nueva receta correctamente!',
                'text': 'Podés revisarlo en tu perfil.'

            })
            /*registrarRecetaNueva()*/
    }
}

btnGuardarReceta.addEventListener('click', validar)