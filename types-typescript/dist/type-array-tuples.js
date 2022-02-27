"use strict";
//Corchetes []
//Tipo Explicito
let users;
users = [`Cesar`, `paparazzi`, `lensqueen`];
//users = [1, true, `test`]; //Error al agregar valores no correspondientes con el Tipado Explicito de string
//tipo Inferido
let otherUsers = users = [`Cesar`, `paparazzi`, `lensqueen`];
//otherUsers = [1, true, `test`]; //Error produciodo por agregar valores no correspondientes con el Tipado implícito
//Arrya<>
let pictureTitles;
pictureTitles = [`Favorite Sunset`, `Vacation Time`, `Landscape`];
//Accediendo a los valores en un Array
console.log(`first user`, users[0]);
console.log(`first title`, pictureTitles[0]);
//Propiedades en Array 
console.log(users.length);
//Uso de funciones en Arrays
users.push(`aPlatziUser`);
users.sort();
console.log(`users`, users);
