// TODO: Include packages needed for this application
const inquirer = require('inquirer');
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
            message: 'What was your motivation for making this project??',
            name: 'descriptionMotiv',
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
            message: 'Do you want to include a Table of Contents?',
            name: 'includeTable',
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
            type: 'input',
            message: 'Credits?',
            name: 'credit',
        },

        {
            type: 'input',
            message: 'License?',
            name: 'license',
        },

        {
            type: 'input',
            message: 'Badges?',
            name: 'badges',
        },

        {
            type: 'input',
            message: 'Write important features in your project',
            name: 'features',
        },

        {
            type: 'input',
            message: 'How can others contribute to this project',
            name: 'contibution',
        },

        {
            type: 'input',
            message: 'Provide tests unique to your application, with examples of how to run the tests',
            name: 'testExamples',
        }

    ])
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
