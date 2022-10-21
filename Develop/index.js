// TODO: Include packages needed for this application

// Strict 
const inquirer = require('inquirer');

// Register plugin
inquirer.registerPrompt('search-list', require('inquirer-search-list'));

const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

//License Choices

const licenseChoices = [
    "Academic Free License v3.0", 
    "Apache license 2.0", 
    "Artistic license 2.0", 
    "Boost Software License 1.0",
    "BSD 2-clause 'Simplified' license",
    "BSD 3-clause 'New' or 'Revised' license",
    "BSD 3-clause Clear license",
    "Creative Commons license family",
    "Creative Commons Zero v1.0 Universal license",
    "Creative Commons Attribution 4.0 license",
    "Creative Commons Attribution Share Alike 4.0 license",
    "Do What The F*ck You Want To Public License",
    "Educational Community License v2.0",
    "Eclipse Public License 1.0",
    "Eclipse Public License 2.0",
    "European Union Public License 1.1",
    "GNU Affero General Public License v3.0",
    "GNU General Public License family",
    "GNU General Public License v2.0",
    "GNU General Public License v3.0",
    "GNU Lesser General Public License family",
    "GNU Lesser General Public License v2.1",
    "GNU Lesser General Public License v3.0",
    "ISC license",
    "LaTeX Project Public License v1.3c",
    "Microsoft Public License",
    "MIT license",
    "Mozilla Public License 2.0",
    "Open Software License 3.0",
    "PostgreSQL License",
    "SIL Open Font License 1.1",
    "University of Illinois/NCSA Open Source License",
    "the Unlicense",
    "zLib License"];
    
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
    
    /*
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

/// license moved to bottom


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
    },
    */

    {
        type: 'search-list', 
        message: 'Select your license:',
        name: 'license',
        choices: licenseChoices,
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
