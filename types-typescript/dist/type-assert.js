"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// <tipo> //Angle Bracket syntax
let username;
username = 'Cesarr';
//tenemos una cadena, TS confía en mí
let message = username.length > 5 ?
    `Welcome ${username}` :
    'Username is too short';
console.log('mesage', message);
let usernameWithId = 'Cesar 1';
//Como obtener el username
username = usernameWithId.substring(0, 10);
console.log('Username only', username);
//Sintaxis "as"
message = username.length > 5 ?
    `Welcome ${username}` :
    'Username is too short';
let helloUser;
helloUser = 'hello paparazzi';
username = helloUser.substring(6);
console.log('username', username);
