const inquirer = require('inquirer');
const fs = require('fs');
const Shape = require('./lib/shapes');
const Triangle = require('./lib/triangle');
const Square = require('./lib/square');
const Circle = require('./lib/circle');

const checkLength = async (input) => {
    const answer = await input;
    if(answer.length===3){
        return true;
    } else {
        return "You must enter exactly three initials.";
    }

}
// list of questions to prompt
questions = [
    {
        type: 'input',
        message: 'Enter three initials:',
        name: 'text',    
        validate: checkLength
    },
    {
        type: 'list',
        message: 'Choose a shape for your logo:',
        name: 'shape',
        choices: ["Circle", "Square", "Triangle"]
    },
    {
        type: 'input',
        message: 'Enter the desired color for your logo:',
        name: 'shapeColor'
    },
    {
        type: 'input',
        message: 'Enter the desired color for the text in your logo:',
        name: 'textColor'
    }
]
// Ask questions
inquirer.prompt(questions)
.then((answers) => {
    let newLogo;
    let color = answers.shapeColor;
    let initials = answers.text;
    let textColor = answers.textColor;
    if(answers.shape==="Circle"){
        newLogo = new Circle(color, initials, textColor);
    } else if(answers.shape==="Square"){
        newLogo = new Square(color, initials, textColor);
    } else if(answers.shape==="Triangle"){
        newLogo = new Triangle(color, initials, textColor);
    }
    let text = newLogo.renderText();
    let shape = newLogo.renderShape();
    let newFile = newLogo.renderSVG(text, shape);
    fs.writeFile('logo.svg', newFile, (err) => {
        err ? console.error(err) : console.log("Logo created!");
    })
}) 
