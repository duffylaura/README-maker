// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input Example: const questions = []; 

const questions = [
    {
        type: 'input',
        name: 'title', 
        message: 'Title of  your project:',
    }, 

    {
        type: 'input',
        name: 'describe', 
        message: 'Describe your function in 1-2 sentences:',
    }, 
    
    {
        type: 'input',
        name: 'motivation', 
        message: 'What motivated this project?',
    }, 

    {
        type: 'input', 
        name: 'solve',
        message: 'What problem does this project solve?',
    },
    {
        type: 'input', 
        name: 'learn',
        message: 'What did you learn while working on the project?',
    },
    {
        type: 'input',
        name: 'standout',
        message: 'What makes your project stand out?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? If none, write "N/A." ',
    },
    {
        type: 'input', 
        name: 'usage',
        message: 'Provide instruction and examples for use. If none, write "N/A."',
    },
/*
    {
        type: 'input', //Need to make a drop down // Then use functions to get badge and info on liscence // Need info 
        name: 'liscence',
        message: 'Liscence type or information on liscence:',
    },
*/

    {
        type: 'input',
        name: 'collaborators',
        message: 'List your collaborators, if any. If none, write "N/A"',
    },

    {
        type: 'input',
        name: 'tests',
        message: 'State your test instructions. If none, write "N/A"',
    },

    {
        type: 'input',
        name: 'username',
        message: 'State your GitHub username:',
    },

    {
        type: 'input',
        name: 'repo',
        message: 'State the repo this project was built in:',
    },

    {
        type: 'input',  
        name: 'email',
        message: 'State your email:',
    }
];

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)

.then((data)=>{       //Create a function to write README file -- Example: fuction writeToFile(fileName, data) {}
    const content = generateMarkdown(data); 

    fs.writeFile('README.md', content, (err)=>          //James suggested telling comp which readme to use in a diff folder
        err ? console.log(err): console.log('Created your README successfully.')
    );
});
}

// Function call to initialize app
init();
