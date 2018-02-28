var Rectangle = require("./Rectangle");

test.skip('Rectangle(2,4) should have area to equal to 8', function() {
   var r = new Rectangle(2,4);
   expect(r.area(2,4)).toEqual(8);
});

test('Rectangle(5,10) should have area to equal to 50', function() {
    var rTwo = new Rectangle(5,10);
    expect(rTwo.area(5,10)).toEqual(50);

});
