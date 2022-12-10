const cuerpoTabla = document.querySelector('#sct-ayuno tbody');
let listaAyunos = [];


const mostrarTabla = () => {
    cuerpoTabla.innerHTML = '';
    listaAyunos.forEach(ayuno => {
        let fila = cuerpoTabla.insertRow();
        fila.insertCell().innerText = ayuno.plan;
        fila.insertCell().innerText = ayuno.fecha;



    });
};

const cargarLista = async() => {
    listaAyunos = await obtenerDatos('listar-ayunos');
    mostrarTabla();
};

cargarLista();