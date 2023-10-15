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
            message: 'Add license:',
            name: 'licenseName',
            when: (answers) => answers.license, 
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
            message: 'Add badges:',
            name: 'badgesInfo',
            when: (answers) => answers.badges, 
            validate: (input) => {
              if (input.trim()) {
                return true;
              }
              return 'Please provide a valid badge name';
            },
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
            message: 'Provide your Github profile and your email address',
            name: 'question',
        },

    ])
    .then((data) => {
        // Generate README content using the template and user input
        const readmeContent = generateReadme(data);
    
        // Create a readme file
        fs.writeFile('README.md', readmeContent, (err) => {
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
    
    // Function to generate README content using the template and user input
    function generateReadme(data) {
      const template = fs.readFileSync(templatePath, 'utf-8');
      const readmeContent = template.replace(/\$\{(\w+)\}/g, (match, key) => {
        return data[key] || '';
      });
      return readmeContent;
    }


// function writeToFile(fileName, data) {}
// function writeToFile
// // TODO: Create a function to initialize app
// function init() {

// }

// // Function call to initialize app

