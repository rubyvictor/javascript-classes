var Rectangle = require("./Rectangle");

test('Rectangle(2,4) should have area to equal to 8', function() {
   var r = new Rectangle(2,4);
   expect(r.area(2,4)).toEqual(8);;
});
