const inquirer = require('inquirer');
const fs = require('fs');

function renderLicenseBadge(license) {
switch (license) {
  case 'APACHE':
    let license = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    break;
  case 'MIT':
    let license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    break;
  case 'GPL 3.0':
    let license = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    break;
  case 'BSD 3':
    let license = '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)'
    break;
  default:
    let license = ''
  }
};
renderLicenseBadge('APACHE')

const generateREADME = ({ title, description, usage, installation, contribution, license, tests, github, email}) => 
`
# ${title}

${description}

## License
[${license}](${license})

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Contact](#contact)

## Installation

${installation}

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
    choices: [ "APACHE", 'MIT', "GPL 3.0", 'BSD 3', 'None' ],
    name: 'license',
    message: 'What kind of license should your project have?',
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

