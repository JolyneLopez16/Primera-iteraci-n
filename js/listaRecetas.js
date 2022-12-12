const cuerpoTabla = document.querySelector('#sct-receta tbody');
let listaRecetas = [];


const mostrarTabla = () => {
    cuerpoTabla.innerHTML = '';
    listaRecetas.forEach(receta => {
        let fila = cuerpoTabla.insertRow();
        fila.insertCell().innerText = receta.nombre;
        fila.insertCell().innerText = receta.tipo;
        fila.insertCell().innerText = receta.categoria;
        fila.insertCell().innerText = receta.ingredientes;
        fila.insertCell().innerText = receta.pasos;



    });
};

const cargarLista = async() => {
    listaRecetas = await obtenerDatos('listar-recetas');
    mostrarTabla();
};

cargarLista();