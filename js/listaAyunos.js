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
        fila.insertCell().innerText = ayuno.horasDeAyuno;



    });
};

const cargarLista = async() => {
    listaAyunos = await obtenerDatos('listar-ayunos');
    mostrarTabla();
};



cargarLista();

const crearGrafico = (arrAyunos, arrFechas) => {
    let contexto = document.getElementById('grafico-ayuno').getContext('2d');
    let grafico = new Chart(contexto, {
        type: 'bar',
        data: {
            labels: arrFechas,
            datasets: [{
                label: 'Ayunos realizados',
                data: arrAyunos,
                backgroundColor: [
                    '#005241'
                ]
            }]
        }
    });
};

const obtenerAyuno = async() => {
    let listaAyunos = await obtenerDatos('listar-ayunos');
    let arrFechas = [];
    let arrAyunos = [];


    listaAyunos.forEach(ayuno => {
        arrFechas.push(moment(ayuno.fecha).add(1, 'days').format('MM-DD-YYYY'));
        arrAyunos.push(ayuno.plan);
    });
    crearGrafico(arrAyunos, arrFechas);
};

obtenerAyuno();