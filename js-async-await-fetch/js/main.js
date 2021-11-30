let RegistrosHTML = document.getElementById('RegistrosHTML');

let arrayRegistros = [];

//Comunicación con el servidor
async function leeRegistros() {

    //const respuesta = await fetch("http://bdd-elga-01.signsle4u.xyz/Back_end_Api/?nombre=Edgar&apellido=Garcia");
    const respuesta = await fetch("data/registros.json");
    const registros = await respuesta.json();

    return registros;
}

async function muestraRegistros() {
    try {
        arrayRegistros = await leeRegistros();
    }
    catch (e) {
        console.log("Error generado" + e);
    }

    console.log(arrayRegistros);
    //RegistrosHTML.innerHTML = RegistrosHTML.innerHTML + arrayRegistros.nombre + " " + arrayRegistros.apellido;

    arrayRegistros.forEach(function (item, index) {
        RegistrosHTML.innerHTML = RegistrosHTML.innerHTML + item.nombre + " " + item.Apellido  + " -> " + item.telefono + "<br>";

    });
}

muestraRegistros();


