// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const colors = require('colors');
const { type } = require('os');
const { title } = require('process');

// TODO: Create an array of questions for user input to access later with inquirer
const questions = [
    {
    type: "input",
    message: "Enter title of the website/application." ,
    name: 'title'
},
    {
    type: "input",
    message: "Enter a description of the website/application." ,
    name: 'description'
},
    {
    type: "input",
    message: "Enter directions for installation or other programs needed to run.",
    name:'installation'
},
    {
    type: "input",
    message: "Enter all of the functionality of the website or application and how to navigate it." ,
    name: 'usage'
},
    {
    type: "input",
    message: "Enter contributors and how the user can contribute if possible." ,
    name: 'contributing'
},
    {
    type: "input",
    message: "Enter how the user can set up tests, run them, and interpreting the results" ,
    name: 'tests'
},
    {
    type: "input",
    message: "Enter Github username for link to profile.",
    name: 'github'
},
    {
    type: "input",
    message:  "Enter E-mail for the user to contact the developer.",
    name: 'email'
}

];

// Outline variable of README
const generateReadMe = (response) =>
`# ${response.title}

## Description
${response.description}

## Table of Contents
(nav links to each section of this README)
## Installation
${response.installation}

## Usage Information
${response.usage}
## License
(WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under)
## Contributing
(contributing guidelines)

## Tests
${response.tests}

## Questions
### Github Profile  
['${response.github}'s Github Profile'](https://github.com/${response.github}'${response.github}'s Github Profile')
### E-mail
${response.email}`

// Prompt with questions and return readme with input values.
inquirer
.prompt(questions)
.then((response) => {
    const readMePageContent = generateReadMe(response);
    
    // TODO: Create a function to write README file
    fs.writeToFile('README.md', readMePageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md file')
    );
});



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
