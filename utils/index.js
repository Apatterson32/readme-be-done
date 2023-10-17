// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const templatePath = 'template.md'; // Path to template.md file

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
            message: 'Provide steps to use this application',
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
              return 'Please provide valid credits';
            },
        },

        {
            type: 'confirm',
            message: 'License?',
            name: 'license',
        },

        {
            type: 'list',
            message: 'Choose license:',
            name: 'licenseName',
            choices: [{
              name: 'Apache-License 2.0',
              name: 'MIT-License',
              name: 'GNU Public License v3.0',
              name: 'BSD 2-Clause "Simplified" License',
              name: 'BSD 3-Clause "New" or "Revised" License',
              name: 'Boost Software License 1.0',
              name: 'Creative Commons Zero v1.0 Universal',
              name: 'Eclipse Public License 2.0',
              name: 'The Unilicense'
            }]
        },

        {
            type: 'input',
            message: 'If you are accepting contributions, please outline what you would accept. If not, explain why',
            name: 'contribution',
        },

        {
            type: 'input',
            message: 'Provide tests unique to your application, with examples of how to run the tests',
            name: 'testExample',
        },

        {
            type: 'input',
            message: 'Provide your Github profile',
            name: 'gitProfile',
        },

        {
        type: 'input',
            message: 'Provide your email address',
            name: 'questionEmail',
        },

    ])
    .then((data) => {
        // Generate README content using the template and user input
        const readmeContent = generateReadme(data);
    
        // Create a readme file
        fs.writeToFile('README.md', readmeContent, (err) => {
          if (err) {
            return console.error('Error writing to README.md:', err);
          } else {
            console.log('README.md created successfully!');
          }
        });
      })
      .catch((error) => {
        console.error('Error', error);
      });
    

    // // TODO: Create a function to initialize app
    function init() {
      inquirer.prompt(questions).then((response) => {
          writeToFile("README.md", generateMarkdown(response));
      });
    }

    // // Function call to initialize app

    init();

