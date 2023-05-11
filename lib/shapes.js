class Shape {
    constructor(color, initials, textColor){
        this.color = color;
        this.initials = initials;
        this.textColor = textColor;
    }

    renderFile = () => {
        console.log("File rendered");
    }

    renderText = (text, textColor) => {
        
    }
}

const newShape = new Shape("blue", "JKM");
