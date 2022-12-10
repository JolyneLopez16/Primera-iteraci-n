const cuerpoTabla = document.querySelector('#sct-peso tbody');
let listaPesos = [];


const mostrarTabla = () => {
    cuerpoTabla.innerHTML = '';
    listaPesos.forEach(peso => {
        let fila = cuerpoTabla.insertRow();
        fila.insertCell().innerText = peso.peso;
        fila.insertCell().innerText = peso.fecha;

    });
};

const cargarLista = async() => {
    listaPesos = await obtenerDatos('obtener-peso');
    mostrarTabla();
};

cargarLista();