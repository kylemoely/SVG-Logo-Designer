const Shape = require('./shapes');

class Triangle extends Shape {
    constructor(color, initials, textColor){
        super(color, initials, textColor);
    }

    renderShape = () => {
        return `<polygon points="150,20 50,200 250,200" fill="${this.color}" />`;
    }
}

module.exports = Triangle;