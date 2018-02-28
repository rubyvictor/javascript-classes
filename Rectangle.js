class Rectangle {

    constructor(breadth,length){
        this.breadth = breadth;
        this.length = length;
    }

    area() {
        console.log(this.length * this.breadth);
        return this.length * this.breadth;
    }

    perimeter() {
        return 2 * this.length + 2 * this.breadth;
    }

}

module.exports = Rectangle;