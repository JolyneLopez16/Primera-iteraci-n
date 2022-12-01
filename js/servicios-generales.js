'use strict';

/* POST */
const registrarDatos = async(pDatos, pEndPoint) => {
    let url = `http://localhost:3000/api${pEndPoint}`;

    await axios({
        method: 'post',
        url: url,
        data: pDatos
    });
};

/* GET */
const obtenerListaDatos = async(pEndPoint) => {
    let url = `http://localhost:3000/api${pEndPoint}`;
    let listaDatos = [];

    await axios({
        method: 'get',
        url: url
    }).then(response => {
        listaDatos = response.data.lista;
    });

    return listaDatos;
};