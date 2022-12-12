const cuerpoTabla = document.querySelector('#sct-tabla tbody');
let listaObjetivos = [];


const mostrarTabla = () => {
    cuerpoTabla.innerHTML = '';
    listaObjetivos.forEach(objetivo => {
        let fila = cuerpoTabla.insertRow();
        fila.insertCell().innerText = objetivo.tipo;
        fila.insertCell().innerText = objetivo.condicion;

    });
};

const cargarLista = async() => {
    listaObjetivos = await obtenerDatos('listar-objetivos');
    mostrarTabla();
};

cargarLista();

/*let tipoObjetivo = tipo.filter(tipo =>{
    console.log();
});

let tipo = [
    {
        tipo: "Reducción de peso"
    },
    {
        tipo: "Aumento de peso"
    },
    {
        tipo: "Reducción del IMC"
    },
    {
        tipo: "Aumento del IMC"
    },
    {
        tipo: "Acumulación de horas de ayuno"
    },
    {
        tipo: "Cantidad de días de ayuno finalizados"
    }
]

let approived = tipoObjetivo.filter(tipo => student.score >= 11);*/