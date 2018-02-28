class Circle {
    constructor(radius){
        this.radius = radius;
    }

    area() {
        var area = Math.PI * this.radius * this.radius;
        return parseFloat(area.toFixed(1));
    }

    perimeter(){
        var peri = 2 * Math.PI * this.radius;
        return parseFloat(peri.toFixed(1));
    }
}

module.exports = Circle;