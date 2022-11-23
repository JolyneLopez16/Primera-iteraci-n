const txtNombre = document.getElementById("txt-nombre");
const txtFecha = document.getElementById("txt-fecha");
const txtEstatura = document.getElementById("txt-estatura");
const txtCorreo = document.getElementById("txt-correo");
const txtApellido = document.getElementById("txt-apellido");
const txtSexo = document.getElementById("txt-sexo");
const txtPesoa = document.getElementById("txt-pesoa");
const txtPesoo = document.getElementById("txt-pesoo");
const btnRegistrar = document.getElementById("btn-registrar");

const validar = () => {
    let error = false;

    if (txtNombre.value == "") {
        error = true;
        txtNombre.classList.add("input-error");
    } else {
        txtNombre.classList.remove("input-error");
    }

    if (txtFecha.value == "") {
        error = true;
        txtFecha.classList.add("input-error");
    } else {
        txtFecha.classList.remove("input-error");
    }

    if (txtEstatura.value == "") {
        error = true;
        txtEstatura.classList.add("input-error");
    } else {
        txtEstatura.classList.remove("input-error");
    }

    if (txtCorreo.value == "") {
        error = true;
        txtCorreo.classList.add("input-error");
    } else {
        txtCorreo.classList.remove("input-error");
    }

    if (txtApellido.value == "") {
        error = true;
        txtApellido.classList.add("input-error");
    } else {
        txtApellido.classList.remove("input-error");
    }

    if (txtSexo.value == "Sexo") {
        error = true;
        txtSexo.classList.add("input-error");
    } else {
        txtSexo.classList.remove("input-error");
    }

    if (txtPesoo.value == "") {
        error = true;
        txtPesoo.classList.add("input-error");
    } else {
        txtPesoo.classList.remove("input-error");
    }

    if (txtPesoa.value == "") {
        error = true;
        txtPesoa.classList.add("input-error");
    } else {
        txtPesoa.classList.remove("input-error");
    }

    if (error == true) {

        alert("Vuelva a intentar");

        //location.reload();
    }
    if (error == false) {

        alert("Sus datos fueron ingresados correctamente");
        window.location.href = "/perfil.html";

        //location.reload();
    }
}








btnRegistrar.addEventListener('click', validar);