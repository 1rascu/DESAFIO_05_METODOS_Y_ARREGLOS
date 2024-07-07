const nuevaTarea = document.querySelector('#nuevaTarea')
const total = document.querySelector('#Total')
const realizados = document.querySelector('#Realizadas')
const filas = document.querySelector('#Filas')
const btnAgregar = document.querySelector('#Agregar')
let idTarea = 4 



const listadoTareas = [
    {
        id:1,tarea: 'EJEMPLO 1',estado: false
    },
    {
        id:2,tarea: 'EJEMPLO 2',estado: false
    },
    {
        id:3,tarea: 'EJEMPLO 3',estado: false
    }
]


RenderListadoTareas = () =>{
    let html = ''
    for (let listado of listadoTareas){
        html += `<div class="col-3 text-center" style="color: ${listado.estado ? 'black; text-decoration:line-through;'  : 'black'};">
                <strong>${listado.id}</strong> </div>
            <div class="col-3" style="color: ${listado.estado ? 'black ; text-decoration:line-through;' : 'black'};">
                ${listado.tarea}</div>
            <div class="col-1">
                <input type="checkbox" ${listado.estado ? 'checked' : ''} onchange="ActualizarEstado(${listado.id}, this.checked)"></div>
            <div class="col-3">
                <img class="btn_eliminar_tarea" src="./assets/img/btn_cancelar.png" alt="imagen deeliminar" onclick="Borrar(${listado.id})"></div>`   
        }filas.innerHTML = html
            Total()
            conteo()
}

RenderListadoTareas()

btnAgregar.addEventListener('click',()=>{
    if (nuevaTarea.value.trim() === '') {
        Swal.fire({
            icon: 'warning',
            title: 'Error',
            text: '¡No, se puede guardar una tarea sin datos!',
        });
    } else {
    tarea = {id:idTarea++,tarea:nuevaTarea.value,estado:false}
    listadoTareas.push(tarea)
    nuevaTarea.value = ''
    RenderListadoTareas()
}})

function conteo(){
    const conteo = listadoTareas.filter(tarea => tarea.estado === true).length
    realizados.innerHTML = conteo
}

function Total() {
    let contador = listadoTareas.length
    total.innerHTML = contador
}

function Borrar(id){
    const index = listadoTareas.findIndex(tarea => tarea.id === id)
    listadoTareas.splice(index,1)
    RenderListadoTareas()
}

function ActualizarEstado(id,estado){
    const index = listadoTareas.findIndex(tarea => tarea.id === id)
    listadoTareas[index].estado = estado
    RenderListadoTareas()
}

