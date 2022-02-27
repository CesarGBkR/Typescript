console.log("Hola Platzi");

//Number
//Explicit

let phone: number;
phone = 1;
phone = 1231231;
//phone = "hola";  //Error por tipo

//Inferido

let phoneNumber = 151251251;
phoneNumber = 123;
//phoneNumber = true; //Error por tipo

let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;


//Tipo: Boolean
//Tipado Explicito

let isPro: boolean;
isPro = true;
//isPro = 1;  //Error por tipo

//Ingerido

let isUserPro = false;
isUserPro = true;
//isUserPro = 10; //Error por tipo

//Strings

let usename: string = "luixaviles";
usename = "Luis";
// usename = 10; //Error por tipo

// Template string
// Uso de back-tick

let useInfo: string;
useInfo = `
    User Info:
    Username: ${usename}
    firstName: ${usename + ` Aviles`}
    phone: ${phone}
    isPro: ${isPro}
    `;
console.log(useInfo);