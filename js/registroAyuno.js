const txtInicio = document.getElementById('txt-inicio');
const txtFin = document.getElementById('txt-fin');
const btnAyuno = document.getElementById('btn-ayuno');

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
        Swal.fire({
            'icon': 'success',
            'title': '¡Has ingresado tu nuevo peso correctamente!',
            'text': 'Podés revisarlo en tu perfil.'


        });
    }

}

btnAyuno.addEventListener('click', validar)