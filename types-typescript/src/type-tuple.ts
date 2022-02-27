export {};

//[1, `user`]

let user: [number, string];
user = [1, `Cesar`];

console.log(`user`, user);
console.log(`username`, user[1]);
console.log(`username.length`, user[1].length);
console.log(`id`, user[0]);


//Tuplas con varios valores
//id, username, isPro

let userInfo: [number, string, boolean];
userInfo = [2, `paparazzi`, true];
console.log(`userInfo`, userInfo);

//Arreglo de Tuplas
let array: [number, string][] = [];
array.push([1, `Cesar`]);
array.push([2, `paparazzi`]);
array.push([3, `lensQueen`]);


//Uso de funciones Array
//lensQueen -> lensQueen001

array[2] [1] = array[2] [1].concat(`001`); //Cambiamos el valor de lensQueen, ubicado por los valores dentro de los corchetes de la variable, a lensQueen001

console.log(`array`, array)

