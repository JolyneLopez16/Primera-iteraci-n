const cuerpoTabla = document.querySelector('#sct-actividades tbody');
let listaActividades = [];

const mostrarTabla = () => {
    cuerpoTabla.innerHTML = '';
    listaActividades.forEach(actividad => {
        let fecha = new Date(actividad.fecha);
        fecha.setDate(fecha.getDate() + 1);
        let fila = cuerpoTabla.insertRow();
        fila.insertCell().innerText = actividad.tipo;
        fila.insertCell().innerText = fecha.toLocaleDateString('es');
        fila.insertCell().innerText = actividad.horas;

    });
};

const cargarLista = async() => {
    listaActividades = await obtenerDatos('listar-fisicas');
    mostrarTabla();
};

cargarLista();

const crearGrafico = (arrActividades, arrFechas) => {
    let contexto = document.getElementById('grafico-actividad').getContext('2d');
    let grafico = new Chart(contexto, {
        type: 'bar',
        data: {
            labels: arrFechas,
            datasets: [{
                label: 'Horas de actividad realizadas',
                data: arrActividades,
                backgroundColor: [
                    '#005241'
                ]
            }]
        }
    });
};

const obtenerActividades = async() => {
    let listaActividades = await obtenerDatos('listar-fisicas');
    let arrFechas = [];
    let arrActividades = [];



    listaActividades.forEach(actividad => {
        arrFechas.push(moment(actividad.fecha).add(1, 'days').format('MM-DD-YYYY'));
        arrActividades.push(actividad.horas);

    });
    crearGrafico(arrActividades, arrFechas);
};

obtenerActividades();