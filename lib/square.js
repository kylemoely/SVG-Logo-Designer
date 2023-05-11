const Shape = require('./shapes');

class Square extends Shape {
    constructor(color, initials, textColor){
        super(color, initials, textColor);
    }

    renderShape = () => {
        return `<rect x="90" y="40" width="150" height="150" fill="${this.color}" />`
    }
}

module.exports = Square;