class SimpleCalculator {

    constructor(value){
        this.value = value;

    }

    add(n){
        this.value += n;
        return this;

    }
    subtract(m){
        this.value -= m;
        return this;

    }

    multiply(p){
        this.value *= p;
        return this;
    }

    divide(o){
        this.value /= o;
        return this;
    }

}

var calculator = new SimpleCalculator(10);

console.log(calculator.add(12).multiply(2).divide(2));
// console.log(calculator.add(12).multiply(2).divide(2));
