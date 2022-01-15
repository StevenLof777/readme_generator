const inquirer = require('inquirer');
const fs = require('fs');
const { fuchsia } = require('color-name');
const { get } = require('http');
// const { checkPrime } = require('crypto');
// const { get } = require('lodash');

// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

// module.exports = generateMarkdown;

const generateREADME = ({ title, description, usage, installation, contribution, license, tests, github, email}) => 
`
# ${title}

${description}

## Installation

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Contact](#contact)

${installation}

## Usage

${usage}

## License
${license}

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
