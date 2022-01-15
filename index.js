const inquirer = require('inquirer');
const fs = require('fs');



const generateREADME = ({ title, description, usage, installation, contribution, license, tests, github, email, color}) => 
`
# ${title}

[![${license}](https://img.shields.io/badge/License-${license}_2.0-${color}.svg)](https://opensource.org/licenses/${license}-2.0)

${description}
+
## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Contact](#contact)

## Installation

${installation}
node
## Usage

${usage}

## Contributing
${contribution}

## Tests
${tests}

# Contact
If you have any issues please contact me at [${email}](${email}). Checkout out my work at [${github}](https://github.com/${github}).

`;


inquirer
  .prompt([
    {
    type: 'input',
    name: 'title',
    message: 'What is your your project title?',
    },
    {
    type: 'input',
    name: 'description',
    message: 'Give a description of what your project is about.',
    },
    {
    type: 'input',
    name: 'usage',
    message: 'Provide an example of how a feature would work.',
    },
    {
    type: 'input',
    name: 'installation',
    message: 'What command should be ran to install dependencies?',
    },
    {
    type: 'input',
    name: 'contribution',
    message: 'What are the contribution guidelines?',
    },
    {
    type: 'input',
    name: 'tests',
    message: 'What command should be run to run tests?',
    },
    {
    type: 'input',
    name: 'repo',
    message: 'What does the user need to know about using the repo?',
    },
    {
    type: 'list',
    choices: [ "Apache", 'MIT', 'ISC', 'None' ],
    name: 'license',
    message: 'What kind of license should your project have?',
    },
    {
    type: 'list',
    choices: ['yellow', "brightgreen", 'red'],
    name: 'color',
    message: 'What color do you want the badge to be?',
    },
    {
    type: 'input',
    name: 'github',
    message: 'What is your github username?',
    },
    {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
    },
  ])
  .then((answers) => {
    const READMEContent = generateREADME(answers);
    fs.appendFile('README.md', READMEContent, (err) =>
    err ? console.error(err) : console.log('README.md generated.')
);
});

// function renderLicenseBadge(license) {
//   switch (license) {
//     case 'APACHE':
//       let license = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
//       break;
//     case 'MIT':
//       let license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
//       break;
//     case 'GPL 3.0':
//       let license = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
//       break;
//     case 'CC0':
//       let license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
//       break;
//     default:
//       let license = ''
//     }
//   };
//   renderLicenseBadge('APACHE')
