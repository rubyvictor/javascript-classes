class Circle {
    constructor(radius){
        this.radius = radius;
    }

    area() {
        var area = Math.PI.toFixed(2) * this.radius * this.radius;
        return area;
    }

    perimeter(){
        var peri = 2 * Math.PI.toFixed(2) * this.radius;
        return peri;
    }
}

module.exports = Circle;