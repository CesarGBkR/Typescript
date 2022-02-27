"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Usamos Ts, definimos tipos para parámetros
//function createpicture(title:string, date: string, size: SquareSize){
//se crea la Fotografía
//    console.log('create Picture using', title, date, size);
//}
createpicture('My Bd', '2020-25-2', '500x500');
createpicture('My Bd', '2020-25-2');
//Parametros Opcionales en funciones
function createpicture(title, date, size) {
    //se crea la Fotografía
    console.log('create Picture using', title, date, size);
}
createpicture('My Bd', '2020-25-2', '500x500');
createpicture('My Bd', '2020-25-2');
//Flat Array Functions
let createPic = (title, date, size) => {
    return {
        title,
        date,
        size,
    };
};
const pricture = createPic('Platzi session', '2022-25-02', '100x100');
console.log('picture', pricture);
//Tipos de retorno con TS
function handleError(code, message) {
    //Procesamiento del codigo, mensaje
    if (message === 'error') {
        throw new Error(`${message}. Code error: ${code}`);
    }
    else {
        return 'An error has ocurred';
    }
}
try {
    let result = handleError(200, 'OK');
    console.log('result', result);
    result = handleError(400, 'error');
    console.log('result', result);
}
catch (error) { }
