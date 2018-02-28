var Circle = require("./Circle");

describe('Area of Circle', function() {
test("Circle(1) should have area of 3.1", function() {
  var c = new Circle(1);
  expect(c.area(1)).toEqual(3.1);
});

test("Circle(2) should have area of 12.6", function() {
  var cTwo = new Circle(2);
  expect(cTwo.area(2)).toEqual(12.6);
});

test("Circle(3) should have area of 28.3", function() {
  var cThree = new Circle(3);
  expect(cThree.area(3)).toEqual(28.3);
});    
});

describe('Perimeter of Circle', function() {
    
test('Circle(1) should have perimeter of 6.3', function() {
    var cir1 = new Circle(1);
    expect(cir1.perimeter(1)).toEqual(6.3);
});


});
