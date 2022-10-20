// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input Example: const questions = []; 

inquirer.prompt([
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
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input', 
        name: 'usage',
        message: 'Provide instruction and examples for use:',
    },
    {
        type: 'input',
        name: 'collaborators',
        message: 'List your collaborators, if any',
    },

    {
        type: 'input',
        name: 'liscence',
        message: 'Liscence type or information on liscence:',
    },
])

.then((answers)=>{       //Create a function to write README file -- Example: fuction writeToFile(fileName, data) {}
    const content = generateMd(answers); 

    fs.writeFile('README.md', content, (err)=>
        err ? console.log(err): console.log('Created your README successfully.')
    );
});

function generateMd(answers) {
return (                            //Won't accept dollar sign //BACK TICKS NOT SINGLE QUOTES
   `# Title: ${answers.title} 
   
   # Description 

   * ${answers.describe}
   * ${answers.motivation}
   * ${answers.solve}
   * ${answers.learn}
   * ${answers.standout}

   # Installation 

   ${answers.installation}

   # Usage 

   ${answers.usage}

   # Collaborators 

   ${answers.collaborators}

   # Liscence

   ${answers.liscence} ` 
)
};




//Don't understand the below code: Also the code in utils
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
