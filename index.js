const inquirer = require('inquirer');
const fs = require('fs');

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


const generateREADME = ({ title, description, usage, installation, contribution, test, github, email}) =>
  `
  # ${title}

    ${description}

    ## Installation

    ${installation}

    ## Usage

    \```
    ${usage}
    \```


    ## &

    ## License
    [MIT](https://choosealicense.com/licenses/mit/)
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
      message: 'What are the installation instructions?',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'What are the contribution guidelines?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'What are the test instructions?',
    },
    // Don't know what a license badge is
    //   type: 'list',
    //   choices: [ "Choice A", 'MIT', "choice B" ],
    //   name: 'license',
    //   message: 'Enter your LinkedIn URL.',
    // },
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
    console.log(answers)
    const READMEContent = generateREADME(answers);

    // fs.writeFile('README.md', htmlPageContent, (err) =>
    //   err ? console.log(err) : console.log('Successfully created index.html!')
    // );
    // Replace READMEContent with `${process.argv[2]}\n` if it doesn't work

    fs.appendFile('README.md', READMEContent, (err) =>
    err ? console.error(err) : console.log('README.md generated.')
);
});
