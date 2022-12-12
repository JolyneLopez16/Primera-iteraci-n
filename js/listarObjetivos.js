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

const drpDropdown = document.querySelector('.dropdown-content2')

const tipo = [{
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
    },
];

const copia = [...tipo];

function forEachReduccionImc(pImc = [], pFuncion) {
    for (let i = 0; i < pImc.length; i++) {
        const elemento = pImc[i];
        pFuncion(elemento);
    }

}

tipo.forEach((elemento) => {
    console.log(elemento.tipo);
});