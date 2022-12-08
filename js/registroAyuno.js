const txtInicioFecha = document.getElementById('txt-inicio-fecha');
const txtFinFecha = document.getElementById('txt-fin-fecha');
const txtInicioHora = document.getElementById('txt-inicio-hora');
const txtFinHora = document.getElementById('txt-fin-hora');
const txtTipoAyuno = document.getElementById('slt-planes')
const btnGuardarAyuno = document.getElementById('btn-ayuno');
const formOutput = document.getElementById('form-output');
const formResponse = document.getElementById('form-response');

const armarFecha = (fecha, hora) => {
    let arregloFecha = fecha.split('-');
    let arregloHora = hora.split(':');
    let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    for (let index = 0; index < arregloHora.length; index++) {
        arregloFecha.push(arregloHora[index]);
    }
    if (arregloFecha[1] in numeros) {
        arregloFecha[1] = "0" + arregloFecha[1];
    }
    arregloFecha.push("00");

    let fechaArmada = new Date(arregloFecha[0], arregloFecha[1], arregloFecha[2], arregloFecha[3], arregloFecha[4], arregloFecha[5]);
    console.log(arregloFecha);
    console.log(fechaArmada);
    return fechaArmada;
}

const calcularHorasAyuno = (fechaI, horaI, fechaF, horaF) => {
    let tiempoAyunado = 0;
    let horasAyunadas = 0;
    let minutosAyunados = 0;
    let fechaInicio = armarFecha(fechaI, horaI)
    let fechaFin = armarFecha(fechaF, horaF)

    tiempoAyunado = fechaFin - fechaInicio;
    horasAyunadas = tiempoAyunado / 3600000;
    horasAyunadas = Math.floor(horasAyunadas).toFixed(0);
    minutosAyunados = tiempoAyunado / 60000;
    minutosAyunados = ((minutosAyunados / 60) - (minutosAyunados / 60).toFixed(0)) * 60;

    if (minutosAyunados < 0) {
        minutosAyunados = 60 + minutosAyunados;
    }


    console.log("Usted ha ayunado " + horasAyunadas + " horas y " + minutosAyunados.toFixed(0) + " minutos");

    let arr = [horasAyunadas, minutosAyunados];

    return arr;
}

const validarEstado = () => {
    let fechaI = txtInicioFecha.value;
    let fechaF = txtFinFecha.value;
    let horaI = txtInicioHora.value;
    let horaF = txtFinHora.value;
    let tipo = txtTipoAyuno.value;
    let tiempo = calcularHorasAyuno(fechaI, horaI, fechaF, horaF);
    let estado;
    let n = 0;

    if (tipo == "14:10") {
        n = 14;
    } else if (tipo == "16:8") {
        n = 16;
    } else if (tipo == "18:6") {
        n = 18;
    } else if (tipo == "20:4") {
        n = 20;
    }


    if (tiempo[0] < n) {
        estado = "incompleto";
    } else {
        estado = "completado";
    }

    formOutput.style.cssText = 'display: block';
    formResponse.classList.add(estado);
    if (estado == "incompleto") {
        formResponse.innerHTML = "Incompleto";
        formResponse.classList.remove('completado');
    } else {
        formResponse.innerHTML = "Completado";
        formResponse.classList.remove('incompleto');
    }
}

const validar = () => {
    let error = false;
    let camposRequeridos = document.querySelectorAll('.requerido');
    let fechaI = txtInicioFecha.value;
    let fechaF = txtFinFecha.value;
    let horaI = txtInicioHora.value;
    let horaF = txtFinHora.value;
    let tipo = txtTipoAyuno.value;
    let tiempo = calcularHorasAyuno(fechaI, horaI, fechaF, horaF);
    let n = 0;

    camposRequeridos.forEach(campo => {
        if (campo.value == '' || campo.value == "-- Seleccione un plan --") {
            campo.classList.add('input-error');
            error = true;
        } else {
            campo.classList.remove('input-error')
        }
    });

    if (error) {
        Swal.fire({
            'title': 'Registro incorrecto',
            'text': 'Por favor complete los campos resaltados',
            'icon': 'warning'
        })
    } else {
        Swal.fire({
            'title': 'Registro exitoso',
            'text': 'Se ha registrado correctamente',
            'icon': 'success'
        })

        let estado;
        if (tipo == "14:10") {
            n = 14;
        } else if (tipo == "16:8") {
            n = 16;
        } else if (tipo == "18:6") {
            n = 18;
        } else if (tipo == "20:4") {
            n = 20;
        }


        if (tiempo[0] < n) {
            estado = "incompleto";
        } else {
            estado = "completado";
        }

        console.log(estado);
        formOutput.style.cssText = 'display: block';
        formResponse.classList.add(estado);
        if (estado == "incompleto") {
            formResponse.innerHTML = "Incompleto";
            formResponse.classList.remove('completado');
        } else {
            formResponse.innerHTML = "Completado";
            formResponse.classList.remove('incompleto');
        }

        /*registrarAyunoNuevo()*/
    };
}

const inicializarFunc = () => {
    if (txtInicioFecha.value != "" &&
        txtFinFecha.value != "" &&
        txtInicioHora.value != "" &&
        txtFinHora.value != "" &
        txtTipoAyuno.value != "-- Seleccione un plan --") {
        validarEstado();
    } else {
        formOutput.style.cssText = 'display: none';
    }
}

/* calcularHorasAyuno('19/11/2022', '11:30', '19/11/2022', '13:10') */
btnGuardarAyuno.addEventListener('click', validar);
txtInicioFecha.addEventListener('change', inicializarFunc);
txtInicioHora.addEventListener('change', inicializarFunc);
txtFinFecha.addEventListener('change', inicializarFunc);
txtFinHora.addEventListener('change', inicializarFunc);
txtTipoAyuno.addEventListener('change', inicializarFunc);