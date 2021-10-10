const Num1 = 10;
const Num2 = 20;
const Num3 = 2;

//ejemplo
if(num1 === 10){
    console.log('num1 es estrictamente igual a 10')
}

if (num2 / num1===2) {
    console.log("num2 dividido entre num1 es igual a 2");
}

if(num1 !== num2) {
    console.log( "num1 es estrictamente distinto a num2");
}

if (num3 != num1){
console.log ("num3 es distinto num1");
}

if ((num3*5) ==num1){
console.log("num3 por 5 es igual num1");
}

if((( num3*5) ==num1) && ((num1*2==num2))) {
    console.log("num3 por 5 es igual a num1 y num1 por 2 es igual a num2");
}

if((( num2/2) ==num1) || ((num1 / 5)==num3)) {
console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}