const Square = require('../square');

describe('Square', () => {
    describe('renderShape', () => {
        it('should return string of an svg rect element with the given color', () => {
            const goodShape = `<rect x="90" y="40" width="150" height="150" fill="black" />`
            const newSquare = new Square();
            newSquare.color = "black";
            const testSquare = newSquare.renderShape();
            expect(testSquare).toEqual(goodShape);
        });
    });
});