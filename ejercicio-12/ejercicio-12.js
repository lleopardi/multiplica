/*12.- Simulando el llamado a un API, mediante las sgte funciones asíncronas (retornan una promesa).
Escribir un programa que consulte una placa a getPlaca(nroPlaca), y que con el response obtenido
{pais, dniConductor}, haga una consulta a getConductor(dniConductor), pasandole el campo
dniConductor del response anterior.
Imprimir en consola el response del getConductor {name, dni, sexo}.
En los mensajes de error de promesas o sentencias, imprimir la hora más el msg de error.
Estas son las funciones a usar que hacen el llamado a algún API (no es necesario crear el API):
function getPlaca(nroPlaca) {
// response: {pais, dniConductor}
return fetch('some-api/' + nroPlaca)
}
function getConductor(dniConductor) {
// response: {name, dni, sexo}
return fetch('some-api/' + dniConductor)
}*/

function errorInformacion(errorMessage) {
    const errordate = new Date();
    const errorHour = `${errordate.getHours()}:${errordate.getMinutes()}:${errordate.getSeconds()}`
    return `${errorHour} ${errorMessage}`
}

function getPlaca(nroPlaca) {
    // response: {pais, dniConductor}
    // return fetch('some-api/' + nroPlaca)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const response = {
                pais: 'Peru',
                dniConductor: '12345678'
            }
            resolve(response);
        }, 1500);
        setTimeout(() => {
            reject(errorInformacion('ha ocurrido un error en el servicio getPlaca'))
        }, 2000);
    });
}
function getConductor(dniConductor) {
    // response: {name, dni, sexo}
    // return fetch('some-api/' + dniConductor)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const response = {
                name: 'Jhon Doe',
                dni: '12345678',
                sexo: 'masculino'
            }
            resolve(response);
        }, 1500);
        setTimeout(() => {
            reject(errorInformacion('ha ocurrido un error en el servicio getConductor'))
        }, 2000);
    });
}

function getInformacion(dni) {
    return new Promise((resolve, reject) => {
        getPlaca(dni)
            .then((responsePlaca) => {
                return getConductor(responsePlaca.dniConductor);
            })
            .then((responseConductor) => {
                console.log(responseConductor);
                resolve(responseConductor);
            })
            .catch((error) => {
                console.log(error);
                reject(error);
            });
    });
}

//console.log(getInformacion('12345'));
export { getInformacion };