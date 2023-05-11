class Shape {
    constructor(color, initials, textColor){
        this.color = color;
        this.initials = initials;
        this.textColor = textColor;
    }

    renderSVG = (textElement, shapeElement) => {
        // Should return a string of the entire svg element including text and shape
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shapeElement}${textElement}</svg>`
    }

    renderText = () => {
        return `<text x="150" y="165" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.initials}</text>`
    }
}

const newShape = new Shape();
console.log(newShape.color);

module.exports = Shape;