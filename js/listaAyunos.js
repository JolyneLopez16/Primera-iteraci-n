const cuerpoTabla = document.querySelector('#sct-ayuno tbody');
let listaAyunos = [];


const mostrarTabla = () => {
    cuerpoTabla.innerHTML = '';
    listaAyunos.forEach(ayuno => {
        let fecha = new Date(ayuno.fecha);
        fecha.setDate(fecha.getDate() + 1);
        let fila = cuerpoTabla.insertRow();
        fila.insertCell().innerText = ayuno.plan;
        fila.insertCell().innerText = fecha.toLocaleDateString('es');



    });
};

const cargarLista = async() => {
    listaAyunos = await obtenerDatos('listar-ayunos');
    mostrarTabla();
};



cargarLista();