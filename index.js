// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Project title?',
            name: 'projectTitle',
        },

        {
            type: 'input',
            message: 'Give a description of the project?',
            name: 'descriptionProject',
        },

        {
            type: 'input',
            message: 'What does this project solve?',
            name: 'descriptionSolve',
        },

        {
            type: 'input',
            message: 'What did you learn?',
            name: 'descriptionLearn',
        }, 

        {
            type: 'input',
            message: 'What are the steps to install this project?',
            name: 'installSteps',
        },

        {
            type: 'input',
            message: 'Provide usage information ',
            name: 'usageInfo',
        },

        {
            type: 'confirm',
            message: 'Credits?',
            name: 'credit',
        },

        {
            type: 'input',
            message: 'Enter credit(s) :',
            name: 'creditName',
            when: (answers) => answers.credit, // Shows this question only if user confirms having credit(s)
            validate: (input) => {
              if (input.trim()) {
                return true;
              }
              return 'Please provide valid credit';
            },
        },

        {
            type: 'confirm',
            message: 'License?',
            name: 'license',
        },

        {
            type: 'input',
            message: 'Enter the name of the license:',
            name: 'licenseName',
            when: (answers) => answers.license, // Shows this question only if user confirms having a license
            validate: (input) => {
              if (input.trim()) {
                return true;
              }
              return 'Please provide a valid license name';
            },
        },

        {
            type: 'confirm',
            message: 'Badges?',
            name: 'badges',
        },

        {
            type: 'input',
            message: 'Enter the name of the badge(s):',
            name: 'badgesName',
            when: (answers) => answers.badges, // Shows this question only if user confirms having badge(s)
            validate: (input) => {
              if (input.trim()) {
                return true;
              }
              return 'Please provide a valid badge name';
            },
        },

        

        {
            type: 'input',
            message: 'Write important features in your project',
            name: 'features',
        },

        {
            type: 'input',
            message: 'How can others contribute to this project',
            name: 'contribution',
        },

        {
            type: 'input',
            message: 'Provide tests unique to your application, with examples of how to run the tests',
            name: 'testExample',
        },

        {
            type: 'input',
            message: 'Provide questions for future contributors',
            name: 'question',
        },

    ])
    .then((data) => {

        const readmeContent = `
        # ${data.projectTitle}
        
        ${data.descriptionMotiv}
        
        ## Project Description

        ${data.descriptionProject}
        ${data.descriptionSolve}
        ${data.descriptionLearn}

        # Table of Contents

        Project Description

        Installation

        Usage

        License

        Contribution 

        Tests

        Questions

        # Installation

        ${data.installSteps}

        # Usage

        ${data.usageInfo}

        # License

        ${data.license}

        # Contribution

        ${data.contribution}

        # Tests

        ${data.testExample}

        # Questions

        ${data.question}

        `;
    
        
        
    // })
// // TODO: Create a function to write README file

    fs.writeFile('README.md', readmeContent, (err) => {
        if (err) {
        return console.error('Error writing to README.md:', err);
        } else {
        console.log("README.md made successfully!");
    }
    });
})
.catch((error) => {
    console.error('Error', error);
});




// function writeToFile(fileName, data) {}
// function writeToFile
// // TODO: Create a function to initialize app
// function init() {

// }

// // Function call to initialize app

