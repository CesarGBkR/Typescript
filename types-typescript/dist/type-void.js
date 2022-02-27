"use strict";
//Void
//Tipo Explicito
function showInfo(user) {
    console.log(`User Info`, user.id, user.name, user.firstName);
    //return `hola`;
}
showInfo({ id: 1, name: `GR`, firstName: `Cesar` });
//Tipo Inferido
function showFormattedInfo(user) {
    console.log(`User Info`, `

        id: ${user.id}
        username: ${user.name}
        firstName ${user.firstName}
    
    `);
}
showFormattedInfo({ id: 1, name: `GR`, firstName: `Cesar` });
//Tipo void, como tipo de dato en una variable
let unusable;
//unusable = null; //Error por configuración estricta en el archivo tsconfig.json
unusable = undefined;
//Tipo: Never
function handleError(code, message) {
    //Preocess your code here
    //Generate a message
    throw new Error(`${message}. Code: ${code}`);
}
try {
    handleError(404, `NotFound`);
}
catch (error) {
}
function sumNumbers(limit) {
    let sum = 0;
    while (true) {
        sum++;
    }
}
sumNumbers(10);
//Cliclo infinito, programa nunca termina
