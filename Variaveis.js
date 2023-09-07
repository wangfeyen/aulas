let VBoolean;
let VBigInt;
let VString;
let VSymbol;
console.log("Indefinidos:")
console.log(VBoolean);
console.log(VBigInt);
console.log(VString);
console.log(VSymbol);
console.log();

VBoolean=null;
VBigInt=null;
VString=null;
VSymbol=null;
console.log("Nulos:")
console.log(VBoolean);
console.log(VBigInt);
console.log(VString);
console.log(VSymbol);
console.log();

VBoolean=true;
VBigInt=123456789131n;
VString="qualquer coisa";
VSymbol=Symbol();
console.log("Sendo atribuido valores:")
console.log(VBoolean);
console.log(VBigInt);
console.log(VString);
console.log(VSymbol);
console.log();

console.log("Tipo de cada variável:")
console.log(typeof(VBoolean));
console.log(typeof(VBigInt));
console.log(typeof(VString));
console.log(typeof(VSymbol));
console.log();
