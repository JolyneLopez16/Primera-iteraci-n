const txtNombre = document.getElementById("txt-nombre");
const txtFecha = document.getElementById("txt-fecha");
const txtEstatura = document.getElementById("txt-estatura");
const txtCorreo = document.getElementById("txt-correo");
const txtApellido = document.getElementById("txt-apellido");
const txtSexo = document.getElementById("txt-sexo");
const txtPesoa = document.getElementById("txt-pesoa");
const txtPesoo = document.getElementById("txt-pesoo");
const inpFoto = document.getElementById("inp-img")
const btnRegistrar = document.getElementById("btn-registrar");
const btnActividadFisica = document.getElementById("btn-guardar")

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
        Swal.fire({
            'icon': 'warning',
            'title': '¡No se ha registrado!',
            'text': 'Por favor llene todos los espacios.'
        });
    } else {
        let usuario = {
            'nombre': txtNombre.value,
            'apellido': txtApellido.value,
            'nacimiento': txtFecha.value,
            'estatura': txtEstatura.value,
            'sexo': txtSexo.value,
            'correo': txtCorreo.value,
            'pesoActual': txtPesoa.value,
            'pesoMeta': txtPesoo.value,
            'foto': inpFoto
        };
        registrarDatos('/registrar-usuario', usuario, '/perfil.html');
    }

}

btnRegistrar.addEventListener('click', validar);