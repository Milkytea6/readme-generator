// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const colors = require('colors');
const { type } = require('os');
const { title } = require('process');

// TODO: Create an array of questions for user input to access later with inquirer
// Added prompts in the messages along with clairity of where the inputs will go and what what they will look like.
const questions = [
    {
    type: "input",
    message: "Enter title of the website/application. This will display at the top of the readme." ,
    name: 'title'
},
    {
    type: "input",
    message: "Enter a concept or brief description of the website/application. This will display below the Description header." ,
    name: 'description'
},
    {
    type: "input",
    message: "Enter the technology used in the making and running of the website/application. This will display below the Technology header." ,
    name: 'technology'
},
    {
    type: "input",
    message: "Enter directions for installation or other programs needed to run. This will display below the Installation header.",
    name:'installation'
},
    {
    type: "input",
    message: "Enter all of the functionality of the website or application and how to navigate it. This will display below the Usage header." ,
    name: 'usage'
},
    {
    type: "input",
    message: "Enter contributors and how the user can contribute if possible. This will display below the Contributing header." ,
    name: 'contributing'
},
    {
    type: "input",
    message: "Enter how the user can set up tests, run them, and interpreting the results. This will display below the Tests header." ,
    name: 'tests'
},
    {
    type: "input",
    message: "Enter future development ideas if given more time or resourses. This will display below the Future Developement header." ,
    name: 'futureDevelopement'
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

// Outline variable of README with nav links and template literals for the inputs in the terminal.
const generateReadMe = (response) =>
`# ${response.title}

## Table of Contents
* [Description](#description)
* [Technology Used](#technology-used)
* [Installation](#installation)
* [Usage Information](#usage-information)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Github Profile](#github)
* [E-mail](#email)

## Description <a id="description"></a>
${response.description}

## Technology Used <a id="technology-used"></a>
${response.technology}

## Installation <a id="installation"></a>
${response.installation}

## Usage Information <a id="usage-information"></a>
How the user will use the application and functionality of all the features.
${response.usage}

## License <a id="license"></a>
(WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under)

## Contributing <a id="contributing"></a>
(contributing guidelines)

## Tests <a id="tests"></a>
Preform tests on the application and report any bugs to the developer.
${response.tests}

## Questions <a id="questions"></a>
You can report any issues in the issues tab on Github. Or you can send any questions to the e-mail provided. 
Be clear with what repository you are referring to and as much detail as posible.
### Github Profile <a id="github"></a>
[${response.github}'s Github Profile](https://github.com/${response.github})
### E-mail <a id="email"></a>
${response.email}`

// Prompt with questions and return readme with input values.
inquirer
.prompt(questions)
.then((response) => {
    const readMePageContent = generateReadMe(response);
    
    // TODO: Create a function to write README file
    fs.writeFile('README.md', readMePageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md file')
    );
});



// TODO: Create a function to initialize app
function init() {}https://www.twitch.tv/justchri5

// Function call to initialize app
init();
