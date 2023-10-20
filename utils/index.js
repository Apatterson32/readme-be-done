// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Map license names to corresponding user choice using sheilds.io
const licenseBadges = {
    'Apache-License-2.0': 'Apache%20License%202.0', // Note the spaces are encoded as %20
    'MIT-License': 'MIT',
    'The-Unilicense': 'Unlicense',
    'None': 'None',
}

// Function to generate README content
function generateReadme(data) {
    // Get the badge for chosen license
    const licenseBadge = licenseBadges[data.licenseName] || 'Unknown';
    return `

# ${data.projectTitle}

## License

[![License](https://img.shields.io/badge/License-${licenseBadge}-brightgreen.svg)](LICENSE)


This project is licensed under the ${data.licenseName} License.

## Project Description

${data.descriptionProject}
${data.descriptionSolve}
${data.descriptionLearn}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)



## Installation

${data.installSteps}

## Usage

${data.usageInfo}

## Credits

${data.creditName}

## Contribution

${data.contribution}

## Tests

${data.testExample}

## Questions

[GitHub Profile](https://github.com/${data.gitProfile})

[Email](mailto:${data.questionEmail})
`;
}


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
            type: 'list',
            message: 'Choose license:',
            name: 'licenseName',
            choices: [
                'Apache-License-2.0',
                'MIT-License',
                'The-Unilicense',
                'None',
            ]
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
            message: 'Provide your Github username',
            name: 'gitProfile',
        },

        {
        type: 'input',
            message: 'Provide your email address',
            name: 'questionEmail',
        },

    ])
    .then((data) => {
        // Generate README content using the template.md file and user input
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
    



