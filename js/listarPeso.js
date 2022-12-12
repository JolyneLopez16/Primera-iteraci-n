const cuerpoTabla = document.querySelector('#sct-peso tbody');
let listaPesos = [];


const mostrarTabla = () => {
    cuerpoTabla.innerHTML = '';
    listaPesos.forEach(peso => {
        let fecha = new Date(peso.fecha);
        fecha.setDate(fecha.getDate() + 1);
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

const crearGrafico = (arrFechas, arrPesos) => {
    let contexto = document.getElementById('grafico-peso').getContext('2d');
    let grafico = new Chart(contexto, {
        type: 'bar',
        data: {
            labels: arrFechas,
            datasets: [{
                label: 'Pesos',
                data: arrPesos,
                backgroundColor: [
                    '#005241'
                ]
            }]
        }
    });
};

const obtenerPesos = async() => {
    let listarPesos = await obtenerDatos('obtener-peso');
    let arrFechas = [];
    let arrPesos = [];


    listarPesos.forEach(peso => {
        arrFechas.push(moment(peso.fecha).add(1, 'days').format('MM-DD-YYYY'));
        arrPesos.push(peso.peso);

    });
    crearGrafico(arrFechas, arrPesos);
    console.log(arrPesos)
};

obtenerPesos();