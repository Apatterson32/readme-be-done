// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Map license names to corresponding user choice using sheilds.io
const licenseBadges = {
  'Apache-License-2.0': 'Apache%202.0',
  'MIT-License': 'MIT',
  'GNU-Public-License-v3.0': 'GPL-3.0',
  'BSD-2-Clause-Simplified-License': 'BSD%202-Clause',
  'BSD-3-Clause-New-or-Revised-License': 'BSD%203-Clause',
  'Boost-Software-License-1.0': 'BSL-1.0',
  'Creative-Commons-Zero-v1.0-Universal': 'CC0-1.0',
  'Eclipse-Public-License-2.0': 'EPL-2.0',
  'The-Unilicense': 'Unlicense',
  'None': 'No%20License',
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

${data.gitProfile}

${data.questionEmail}
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
               'Apache-License 2.0',
               'MIT-License',
               'GNU Public License v3.0',
               'BSD 2-Clause "Simplified" License',
               'BSD 3-Clause "New" or "Revised" License',
               'Boost Software License 1.0',
               'Creative Commons Zero v1.0 Universal',
               'Eclipse Public License 2.0',
               'The Unilicense',
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
    



