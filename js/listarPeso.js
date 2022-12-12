const cuerpoTabla = document.querySelector('#sct-peso tbody');
let listaPesos = [];


const mostrarTabla = () => {
    cuerpoTabla.innerHTML = '';

    listaPesos.forEach(peso => {
        let fecha = peso.fecha;
        let fila = cuerpoTabla.insertRow();
        fila.insertCell().innerText = peso.peso;
        fila.insertCell().innerText = fecha.substring(0, 15);

    });
};

const cargarLista = async() => {
    listaPesos = await obtenerDatos('obtener-peso');
    mostrarTabla();
};

cargarLista();