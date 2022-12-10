const cuerpoTabla = document.querySelector('#sct-enfermedades tbody');
let listaEnfermedades = [];


const mostrarTabla = () => {
    cuerpoTabla.innerHTML = '';
    listaEnfermedades.forEach(enfermedad => {
        let fila = cuerpoTabla.insertRow();
        fila.insertCell().innerText = enfermedad.nombre;
        fila.insertCell().innerText = enfermedad.estado;
        fila.insertCell().innerText = enfermedad.descripcion;
        fila.insertCell().innerText = enfermedad.tratamiento;


    });
};

const cargarLista = async() => {
    listaEnfermedades = await obtenerDatos('listar-enfermedades');
    mostrarTabla();
};

cargarLista();