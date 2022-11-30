'use strict';

const pNombre = document.querySelector('#us-nombre');
const pApellido = document.querySelector('#us-apellido');
const pNacimiento = document.querySelector('#us-nacimiento');
const pEdad = document.querySelector('#us-edad');
const pEstatura = document.querySelector('#us-estatura');
const pSexo = document.querySelector('#us-sexo');
const pCorreo = document.querySelector('#us-correo');
const pPesoActual = document.querySelector('#us-peso-a');
const pPesoMeta = document.querySelector('#us-peso-m');
const pIMC = document.querySelector('#us-imc');
const pIMCCat = document.querySelector('#us-imc-cat');

const calcularIMC = (peso, estatura) => {
    let imc = peso / Math.pow(estatura, 2);

    return imc.toFixed(2);
};

const calsificarIMC = (imc) => {
    let clasificacion;
    if (imc >= 35) {
        clasificacion = 'Obesidad Media';
    } else if (imc >= 30) {
        clasificacion = 'Obesidad Leve';
    } else if (imc >= 25) {
        clasificacion = 'Preobeso';
    } else if (imc >= 18.5) {
        clasificacion = 'Normal';
    } else if (imc >= 17) {
        clasificacion = 'Delgadez Leve';
    } else if (imc >= 16) {
        clasificacion = 'Delgadez Moderada';
    } else if (imc < 16) {
        clasificacion = 'Delgadez Severa';
    }

    return clasificacion;
}

const calcularEdad = (fecha) => {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
}

let datosUsuario = [];

const inicializarLista = async() => {
    datosUsuario = await obtenerListaDatos('/obtener-usuario');
    mostrarDatos();
};

const mostrarDatos = async() => {
    let imc = calcularIMC(datosUsuario[datosUsuario.length - 1].pesoActual, datosUsuario[datosUsuario.length - 1].estatura);
    let catIMC = calsificarIMC(imc);
    let fechaNacimiento = datosUsuario[datosUsuario.length - 1].nacimiento;

    pNombre.innerHTML = datosUsuario[datosUsuario.length - 1].nombre;
    pApellido.innerHTML = datosUsuario[datosUsuario.length - 1].apellido;
    pNacimiento.innerHTML = fechaNacimiento.slice(0, 10)
    pEdad.innerHTML = calcularEdad(datosUsuario[datosUsuario.length - 1].nacimiento);
    pEstatura.innerHTML = datosUsuario[datosUsuario.length - 1].estatura;
    pSexo.innerHTML = datosUsuario[datosUsuario.length - 1].sexo;
    pCorreo.innerHTML = datosUsuario[datosUsuario.length - 1].correo;
    pPesoActual.innerHTML = datosUsuario[datosUsuario.length - 1].pesoActual;
    pPesoMeta.innerHTML = datosUsuario[datosUsuario.length - 1].pesoMeta;
    pIMC.innerHTML = imc;
    pIMCCat.innerHTML = catIMC;
}

inicializarLista();