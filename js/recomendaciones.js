const recomendacionAgua = document.getElementById('recomendacion-agua')
const recomendacionProte = document.getElementById('redomendacion-prote')

let datosUsuario = [];

const inicializarLista = async() => {
    datosUsuario = await obtenerListaDatos('/obtener-usuario');
    agregarConsejo();
};

const agregarConsejo = async() => {
    if (datosUsuario[datosUsuario.length - 1].sexo == "Masculino") {
        recomendacionAgua.innerText = "Aproximadamente 15,5 tazas al día para los hombres."
    } else {
        recomendacionAgua.innerText = "Aproximadamente 11,5 tazas al día para las mujeres."
    }

    let proteinaRecomendada = (datosUsuario[datosUsuario.length - 1].pesoActual * 1.5) + " g debido a tu peso corporal.";

    recomendacionProte.innerText = proteinaRecomendada
}

inicializarLista();