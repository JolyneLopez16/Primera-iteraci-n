const fecha = document.getElementById('fecha');
const tipoActividad1 = document.getElementById('opt-1');
const tipoActividad2 = document.getElementById('opt-2');
const tipoActividad3 = document.getElementById('opt-3');
const btnNuevaAF = document.getElementById('btn-tipo-ac');
const horaIncioAF = document.getElementById('hora-inicio');
const horaFinalAF = document.getElementById('hora-final');
const btnGuardarAF = document.getElementById('btn-guardar');

const validar = () => {
    let llenos = [];
    let required = document.getElementsByClassName('required');
    for (let i = 0; i < required.length; i++) {
        if (required[i].value == "" || required[i].value == "Sexo") {
            required[i].classList.add("input-error");
            llenos.push('vacio');
        } else {
            required[i].classList.remove("input-error");
            llenos.push('lleno');
        }
    }
    let espacios = llenos.find(element => element == 'vacio');
    if (espacios == 'vacio') {
        /* Swal.fire({
            'icon': 'success',
            'title': '¡No se ha registrado!',
            'text': 'Por favor llene todos los espacios.'
        }); */
    } else {
        /* Swal.fire({
            'icon': 'check',
            'title': '¡Te has registrado!',
            'text': 'Pronto podrás visualizar tu perfil.'

        }).then((result) => {
            window.location.href = '/perfil.html';
        }); */

    }
}

btnGuardarAF.addEventListener('click', validar)