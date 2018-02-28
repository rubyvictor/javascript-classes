class SimpleCalculator {

    constructor(value){
        this.value = value;

    }

    add(n){
        var result = this.value + n;
        return result;

    }
    subtract(n){
        var result = this.value - n;
        return result;

    }

    multiply(n){
        var result = this.value * n;
        return result;
    }

    divide(n){
        var result = this.value / n;
        return result;
    }

}

var calculator = new SimpleCalculator(10);

console.log(calculator.add(12));
console.log(calculator.subtract(5));
console.log(calculator.multiply(2));
console.log(calculator.divide(2));
// console.log(calculator.add(12).multiply(2).divide(2));
