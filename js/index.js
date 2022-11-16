const txtNombre = document.getElementById("txt-nombre");
const txtFecha = document.getElementById("txt-fecha");
const txtEstatura = document.getElementById("txt-estatura");
const txtCorreo = document.getElementById("txt-correo");
const txtApellido = document.getElementById("txt-apeilldo");
const txtEdad = document.getElementById("txt-edad");
const txtSexo = document.getElementById("txt-sexo");
const txtPesoo = document.getElementById("txt-pesoo");
const btnRegitsrar = document.getElementById("btn-registrar");

const validar = () => {
    let error = false;

    if (txtNombre.value == "") {
        error = true;
        txtNombre.classList.add("input-error");
    } else {
        txtNombre.classList.remove("input-error");
    }

    if (txtfecha.value == "") {
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

    if (txtEdad.value == "") {
        error = true;
        txtEdad.classList.add("input-error");
    } else {
        txtEdad.classList.remove("input-error");
    }

    if (txtSexo.value == "") {
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


    if (error == false) {

        persona.nombre = txtNombre.value;
        persona.fecha = txtFecha.value;
        persona.estatura = txtEstatura.value;
        persona.correo = txtCorreo.value;
        persona.apellido = txtApellido.value;
        persona.edad = txtEdad.value;
        persona.sexo = txtSexo.value;
        persona.pesoo = txtPesoo.value;


        imprimirTabla();
    } else {
        alert("Vuelva a intentar");

        //location.reload();
    }
    if (error == true) {

        persona.nombre = txtNombre.value;
        persona.fecha = txtFecha.value;
        persona.estatura = txtEstatura.value;
        persona.correo = txtCorreo.value;
        persona.apellido = txtApellido.value;
        persona.edad = txtEdad.value;
        persona.sexo = txtSexo.value;
        persona.pesoo = txtPesoo.value;


        imprimirTabla();
    } else {
        alert("Sus datos fueron ingresados correctamente");

        //location.reload();
    }

};



btnRegistrar.addEventListener("click", validar);