// Explicita

let nullVariable: null;
nullVariable = null;
//nullVariable = 1; //Error al ser diferente de null y estar especificada de forma explícita

let otherVariable = null;
otherVariable = `test`;

console.log(`nullVariavle`, nullVariable);
console.log(`otherVariable`, otherVariable);

//Undefined

let undefinedVariable: undefined = undefined;
//undefinedVariable = `test`;//Error al ser diferende de undefined y  estar especificada de forma explícita

let otherUndefined = undefined;
otherUndefined = 1;

console.log(`undefinedVariable`, undefinedVariable);
console.log(`otherUndefined`, otherUndefined);

//Null y undefined: Como subtipos

//--strictNullChecks

let albumName: string;
// albumName = null;
// albumName = undefined;
