const inquirer = require('inquirer');
const fs = require('fs');
const Shape = require('./lib/shapes');

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
        name: 'shape-color'
    },
    {
        type: 'input',
        message: 'Enter the desired color for the text in your logo:',
        name: 'text-color'
    }
]
// Ask questions
inquirer.prompt(questions);

// Create shape corresponding to user answer

// Shape constructor takes color and initials parameter

// Shape has .renderFile method and .renderText method

// Specific shapes have .renderShape method