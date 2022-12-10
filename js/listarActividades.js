const cuerpoTabla = document.querySelector('#sct-actividades tbody');
let listaActividades = [];

const mostrarTabla = () => {
    cuerpoTabla.innerHTML = '';
    listaActividades.forEach(actividad => {
        let fila = cuerpoTabla.insertRow();
        fila.insertCell().innerText = actividad.tipo;
        fila.insertCell().innerText = actividad.fecha;

    });
};

const cargarLista = async() => {
    listaActividades = await obtenerDatos('listar-fisicas');
    mostrarTabla();
};

cargarLista();