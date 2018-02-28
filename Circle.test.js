var Circle = require("./Circle");

test('Circle(1) should have area of 3.1', function() {
var c = new Circle(1);
expect(c.area(1)).toEqual(3.1);   
});

test("Circle(2) should have area of 12.6", function() {
  var cTwo = new Circle(2);
  expect(cTwo.area(2)).toEqual(12.6);
});