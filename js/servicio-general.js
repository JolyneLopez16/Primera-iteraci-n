'use strict';
let url = 'http://localhost:3000/api';


const registrarDatos = async(pDatos, pEndPoint) => {
    url += pEndPoint;

    await axios({
        method: 'post',
        url: url,
        data: pDatos
    });
};