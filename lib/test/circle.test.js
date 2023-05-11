const Circle = require('../circle');

describe('Circle', () => {
    describe('renderShape', () => {
        it('should return string of an svg circle element with the given color', () => {
            const goodShape = `<circle cx = "150" cy="100" r = "95 " fill="black"/>`
            const newCircle = new Circle();
            newCircle.color = "black";
            const testCircle = newCircle.renderShape();
            expect(testCircle).toEqual(goodShape);
        });
    });
});