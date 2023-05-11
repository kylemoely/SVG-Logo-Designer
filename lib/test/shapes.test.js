const Shape = require('../shapes');

describe('Shape', () => {
    describe('renderSVG', () => {
        it('should return a string containing text for an svg file based on the text and shape it was given', () =>{
            const goodFile = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,20 50,200 250,200" fill="black" /><text x="150" y="165" font-size="50" text-anchor="middle" fill="orange">MMM</text></svg>`
            const goodText = `<text x="150" y="165" font-size="50" text-anchor="middle" fill="orange">MMM</text>`
            const goodShape = `<polygon points="150,20 50,200 250,200" fill="black" />`
            const newShape = new Shape();
            const testFile = newShape.renderSVG(goodText, goodShape);
            expect(testFile).toEqual(goodFile);
        });
    });
    describe('renderText', () => {
        it('should return a string containing text for a text element with the given color and initials', () => {
            const goodElement = `<text x="150" y="165" font-size="50" text-anchor="middle" fill="orange">MMM</text>`;
            const newShape = new Shape();
            newShape.initials = "MMM";
            newShape.textColor = "orange";
            const testElement = newShape.renderText();
            expect(testElement).toEqual(goodElement);
        });
    })
});