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
    let ingrediente = document.createElement("li");
    let ingredienteNombre = document.createTextNode(item);
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
    ingredientesStr = listarIngredientes();

    console.log(listaIngredientes);

    if (ingredientes.length == 0) {
        inIngredientes.classList.add('input-error');
        error = true;
    } else {
        inIngredientes.classList.remove('input-error');
    }
    console.log(ingredientes);
    camposRequeridos.forEach(campo => {
        if (campo.value == '') {
            campo.classList.add('input-error');
            error = true;
        } else {
            campo.classList.remove('input-error');
        }
    });

    if (error) {
        Swal.fire({
            'icon': 'warning',
            'title': '¡No se ha registrado el cambio!',
            'text': 'Por favor llene todos los espacios.'
        });
    } else {
        let receta = {
            'nombre': inNombre.value,
            'tipo': inTipo.value,
            'categoria': inCategoria.value,
            'ingredientes': ingredientesStr,
            'pasos': inPasos.value
        };
        console.log(receta);
        registrarDatos('registrar-recetas', receta, "#");

    }
}

const activarEnter = (e) => {
    if (e.key === 'Enter') {
        agregarIngrediente();
        resetListaIng();
    }
}

btnGuardarReceta.addEventListener('click', validar)
btnAgregarIngrediente.addEventListener("click", agregarIngrediente);
inIngredientes.addEventListener("keypress", activarEnter);
btnAgregarIngrediente.addEventListener("click", resetListaIng);