const cuerpoTabla = document.querySelector('#sct-tabla tbody');
let listaObjetivos = [];


const mostrarTabla = () => {
    cuerpoTabla.innerHTML = '';
    listaObjetivos.forEach(objetivo => {
        let fila = cuerpoTabla.insertRow();
        fila.insertCell().innerText = objetivo.tipo;
        fila.insertCell().innerText = objetivo.condicion;

    });
};

const cargarLista = async() => {
    listaObjetivos = await obtenerDatos('listar-objetivos');
    mostrarTabla();
};

cargarLista();