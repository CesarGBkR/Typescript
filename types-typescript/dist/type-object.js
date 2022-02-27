"use strict";
//Typer: object
let user;
user = {}; //Object
user = {
    id: 1,
    username: `paparazzi`,
    firstName: `Pablo`,
    isPro: true
};
//console.log(`user`, user);
//Object vs object(Clase JS vs tipo TS)
const myObject = {
    id: 1,
    username: `paparazzi`,
    firstName: `Pablo`,
    isPro: true
};
const isInstance = myObject instanceof Object; //clase Object javaScript
console.log(`isinstance`, isInstance);
console.log(`user.username`, myObject.username);
