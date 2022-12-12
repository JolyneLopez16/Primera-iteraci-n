const cuerpoTabla = document.querySelector('#sct-peso tbody');
let listaPesos = [];


const mostrarTabla = () => {
    cuerpoTabla.innerHTML = '';
    listaPesos.forEach(peso => {
        let peso = new Date(peso.fecha);
        peso.setDate(peso.getDate() + 1);
        let fila = cuerpoTabla.insertRow();
        fila.insertCell().innerText = peso.peso;
        fila.insertCell().innerText = fecha.toLocaleDateString('es');

    });

};

const cargarLista = async() => {
    listaPesos = await obtenerDatos('obtener-peso');
    mostrarTabla();
};

cargarLista();