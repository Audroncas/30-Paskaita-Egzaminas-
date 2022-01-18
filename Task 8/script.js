/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(num1, num2) {
    //funkcija konstruktorius
    this.num1 = num1;
    this.num2 = num2;
    this.sum = () => {return this.num1 + this.num2}
    this.multiplication = () => {return this.num1 * this.num2}
    this.division = () => {return this.num1 / this.num2}
}

const calc = new Calculator(2,3);
console.log(calc.sum())
console.log(calc.multiplication())
console.log(calc.division())
