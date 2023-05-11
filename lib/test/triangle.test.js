const Triangle = require('../triangle');

describe('Triangle', () => {
    describe('renderShape', () => {
        it('should return string of an svg circle element with the given color', () => {
            const goodShape = `<polygon points="150,20 50,200 250,200" fill="black" />`;
            const newTriangle = new Triangle();
            newTriangle.color = "black";
            const testTriangle = newTriangle.renderShape();
            expect(testTriangle).toEqual(goodShape);
        })
    })
})