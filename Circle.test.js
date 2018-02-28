var Circle = require("./Circle");

test('Circle(1) should have area of 3.14', function() {
var c = new Circle(1);
expect(c.area(1)).toEqual(3.14);   
});