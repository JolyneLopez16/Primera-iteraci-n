const inNombre = document.getElementById('inp-nombre');
const inIngredientes = document.getElementById('inp-ingredientes');
const inTipo = document.getElementById('slt-tipo');
const inCategoria = document.getElementById('slt-categoria');
const inPasos = document.getElementById('inp-pasos');
const inFoto = document.getElementById('inp-foto');
const btnGuardarReceta = document.getElementById('btn-guardar-receta');
const btnAgregarIngrediente = document.getElementById('btn-agregar-ingrediente');
const listaIngredientes = document.querySelector('#lista-ingredientes ul')
const btnBorrarIngrediente = document.getElementById('btn-borrar-ingrediente')
let ingredientes = [];
let n = -1;


const listarIngredientes = (arreglo) => {
    let str = "";
    for (let index = 0; index < ingredientes.length; index++) {
        let ing = ingredientes[index];
        if (str == "") {
            str = ing;
        } else {
            str = str + ", " + ing;
        }

    }
    console.log(str);
    return str;
}
let ingredientesStr = listarIngredientes();



const nuevoIngrediente = (item) => {
    var ingrediente = document.createElement("li");
    var ingredienteNombre = document.createTextNode(item);
    ingrediente.appendChild(ingredienteNombre);
    listaIngredientes.appendChild(ingrediente);
}

const resetListaIng = () => {
    inIngredientes.value = "";
}

const agregarIngrediente = () => {
    n = n + 1;
    let item = inIngredientes.value;
    ingredientes.push(item);
    listarIngredientes()
    nuevoIngrediente(ingredientes[n]);
    console.log(ingredientesStr);
}


const validar = async() => {
    let error = false;
    let camposRequeridos = document.querySelectorAll('.requerido');

    camposRequeridos.forEach(campo => {
        if (campo.value == '') {
            campo.classList.add('input-error');
            error = true;
        } else {
            campo.classList.remove('input-error')
        }
    });

    if (error) {
        Swal.fire({
            'icon': 'warning',
            'title': '¡No se ha registrado el cambio!',
            'text': 'Por favor llene todos los espacios.'
        });
    } else {
        Swal.fire({
                'icon': 'success',
                'title': '¡Has ingresado una nueva receta correctamente!',
                'text': 'Podés revisarlo en tu perfil.'

            })
            /*registrarRecetaNueva()*/
    }
}

btnGuardarReceta.addEventListener('click', validar)
btnAgregarIngrediente.addEventListener("click", agregarIngrediente);
btnAgregarIngrediente.addEventListener("click", resetListaIng);