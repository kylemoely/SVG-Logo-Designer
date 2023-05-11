const Shape = require('./shapes');

class Circle extends Shape {
    constructor(color, initials, textColor){
        super(color, initials, textColor);
    }

    renderShape = () => {
        return `<circle cx = "150" cy="100" r = "95 " fill="${this.color}"/>`
    }
}

module.exports = Circle;