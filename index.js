const inquirer = require('inquirer');
const fs = require('fs');

// const generateHTML = ({ name, location, github, linkedin }) =>
//   `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1 class="display-4">Hi! My name is ${name}</h1>
//     <p class="lead">I am from ${location}.</p>
//     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//     <ul class="list-group">
//       <li class="list-group-item">My GitHub username is ${github}</li>
//       <li class="list-group-item">LinkedIn: ${linkedin}</li>
//     </ul>
//   </div>
// </div>
// </body>
// </html>`;

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
  ])
  .then((answers) => {
      console.log(answers)
    // const htmlPageContent = generateHTML(answers);

    // fs.writeFile('README.md', htmlPageContent, (err) =>
    //   err ? console.log(err) : console.log('Successfully created index.html!')
    // );
  });
