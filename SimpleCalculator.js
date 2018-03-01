class SimpleCalculator {

    constructor(value){
        this.value = value;

    }

    add(n){
        this.value + this.n;
        return this;

    }
    subtract(m){
        this.value - this.m;
        return this;

    }

    multiply(p){
        this.value * this.p;
        return this;
    }

    divide(o){
        this.value / this.o;
        return this;
    }

}

var calculator = new SimpleCalculator(5);

console.log(calculator.add(12).multiply(2).divide(2));
// console.log(calculator.add(12).multiply(2).divide(2));
