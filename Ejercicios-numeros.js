// Altura en Céntimetros
let CentimetrosAltura = 175;

// Altura en metros 

let MetrosAltura = 1.75;

// Peso en Kilogramos 

let KilogramosPeso = 80.8;

// Altura en metros redondeados hacia arriba 

let upMetros = MetrosAltura.toFixed(5);
console.log(upMetros);

// Pesos en kilogramos redondeado hacia abajo

let donwKilogramos = KilogramosPeso.toPrecision(2);
console.log(donwKilogramos);

// Igualdad de valores maximos JavaScript 

let max_valor_JS_mas_uno = (Number.MAX_VALUE + 1);
let max_valor_JS = Number.MAX_VALUE;

if(max_valor_JS_mas_uno === max_valor_JS){
    console.log("son iguales")
}

console.log(max_valor_JS_mas_uno);
console.log(max_valor_JS)


