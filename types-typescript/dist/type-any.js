"use strict";
// Tipo explicito
let idUser;
idUser = 1; //Number
idUser = `1`; //String
console.log(`idUser`, idUser);
//Tipo Inferido
let otherId;
otherId = 1;
otherId = `1`;
//otherId = true;
console.log(`otherId`, otherId);
let surprise = `herllo TS`;
//
const res = surprise.substring(6); //Posible error en tiempo de ejecuición si el valor en ANY llegara a cambiar de tipo string
console.log(`res`, res);
