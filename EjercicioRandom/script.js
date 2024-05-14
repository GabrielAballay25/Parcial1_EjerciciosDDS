function mostrar(){
    let filas = ' ';
    personasTrabajadores.forEach(function(trabajadores){
        filas += `<tr>
        <td>${trabajadores.nombre}</td>
        <td>${trabajadores.apellido}</td>
        <td>${trabajadores.legajo}</td>
        <td>${trabajadores.sueldo}</td>
        </tr>`;
    });
    document.getElementById("personasTrabajadores").innerHTML = filas;
}

function agregar(){
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let edad = parseInt(document.getElementById('edad').value);
    let sueldo = parseInt(document.getElementById('sueldo').value);
    personasTrabajadores.push({nombre:nombre,apellido:apellido,edad:edad,sueldo:sueldo});
    mostrar()
}

function nuevo(){
    let nombre = document.getElementById('nombre').value='';
    let apellido = document.getElementById('apellido').value='';
    let edad = document.getElementById('edad').value='';
    let sueldo = document.getElementById('sueldo').value='';
}

function cargarUltimo(){
    if (personasTrabajadores.lenght > 0){
        personasTrabajadores.pop;
        mostrar();
    }
}
