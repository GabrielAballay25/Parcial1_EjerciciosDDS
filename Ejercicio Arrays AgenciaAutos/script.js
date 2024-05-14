function mostrar() {
    //mostrar los autos dentro de la tabla tbAutos
    let filas = '';
    autosAgencia.forEach(function(auto) {
        filas += `<tr>
        <td>${auto.marca}</td>
        <td>${auto.modelo}</td>
        <td>${auto.anio}</td>
        <td>${auto.precio}</td>
        </tr>`;
    });
    document.getElementById("tblAutos").innerHTML = filas;
}
function agregar() {
    let marca = document.getElementById('inputMarca').value;
    let modelo = document.getElementById('inputModelo').value;
    let anio = parseInt(document.getElementById('inputAnio').value);
    let precio = parseFloat(document.getElementById('inputPrecio').value);
    console.log(`marca: ${marca} modelo:${modelo} anio:${anio} precio${precio}`
    );
    autosAgencia.push({ marca: marca, modelo: modelo, anio: anio, precio: precio, });
    mostrar();
}
function nuevo() {
    document.getElementById('inputMarca').value = '';
    document.getElementById('inputModelo').value = '';
    document.getElementById('inputAnio').value = '';
    document.getElementById('inputPrecio').value = '';
}
function eliminarUltimo() {
    if (autosAgencia.length > 0) {
        autosAgencia.pop();
    mostrar();
    }
}