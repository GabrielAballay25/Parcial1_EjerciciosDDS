const apiUrl = 'http://localhost:3001/locales'

async function cargarLocales() {
    try{
        const response = await fetch('http://localhost:3001/locales')
        const data = await response.json(); // parseo las respuestas a un array
        const tbody = document.getElementById('datos'); // elijo el cuerpo de la tabla
        tbody.innerHTML = ''; // Limpiar filas existentes antes de agregar nuevas
        data.forEach(local => { // recorro el array creando filas
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${local.STORE_NUMBER}</td>
                <td>${local.STORE_NAME}</td>
                <td>${local.STREET_ADDRESS}</td>
                <td>${local.CITY}</td>
                <td>${local.LATITUDE}</td>
                <td>${local.LONGITUDE}</td>
            `;
            tbody.appendChild(row);
        });
    }catch{
        console.error(error);
    }  
}

async function filtrarInterior(){
    try{
        const response = await fetch('http://localhost:3001/locales/interior')
        const data = await response.json(); // parseo las respuestas a un array
        const tbody = document.getElementById('datos'); // elijo el cuerpo de la tabla
        tbody.innerHTML = ''; // Limpiar filas existentes antes de agregar nuevas
        data.forEach(local => { // recorro el array creando filas
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${local.STORE_NUMBER}</td>
                <td>${local.STORE_NAME}</td>
                <td>${local.STREET_ADDRESS}</td>
                <td>${local.CITY}</td>
                <td>${local.LATITUDE}</td>
                <td>${local.LONGITUDE}</td>
            `;
            tbody.appendChild(row);
        });
    }catch{

    }
}

cargarLocales()

