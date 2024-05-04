// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const colors = require('colors');
const { type } = require('os');
const { title } = require('process');
const { default: Choice } = require('inquirer/lib/objects/choice');
const { default: Choices } = require('inquirer/lib/objects/choices');
const generateReadMe = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input to access later with inquirer
// Added prompts in the messages along with clairity of where the inputs will go and what what they will look like.
const questions = [
    {
        type: "input",
        message: (colors.brightBlue("Enter title of the website/application. This will display at the top of the readme.")),
        name: 'title'
    },
    {
        type: "input",
        message: (colors.brightBlue("Enter a concept or brief description of the website/application. This will display below the Description header.")),
        name: 'description'
    },
    // Change to list type and added choices
    {
        type: "checkbox",
        message: (colors.brightBlue("Enter the technology used in the making and running of the website/application. This will display below the Technology header.")),
        name: 'technology',
        choices: ["HTML", "CSS", "Javascript", "API's", "Third-Party API's", "Server-Side API's", "Node.js", "OOP", "Express.js"]
    },
    {
        type: "input",
        message: (colors.brightBlue("Enter directions for installation or other programs needed to run. This will display below the Installation header.")),
        name: 'installation'
    },
    {
        type: "input",
        message: (colors.brightBlue("Enter all of the functionality of the website or application and how to navigate it. This will display below the Usage header.")),
        name: 'usage'
    },
    {
        type: 'list',
        message: (colors.brightBlue('Choose a license from the list provided.')),
        name: 'license',
        choices: ['MIT', 'Apache', 'No License']
    },
    {
        type: "input",
        message: (colors.brightBlue("Enter contributors and how the user can contribute if possible. This will display below the Contributing header.")),
        name: 'contributing'
    },
    {
        type: "input",
        message: (colors.brightBlue("Enter how the user can set up tests, run them, and interpreting the results. This will display below the Tests header.")),
        name: 'tests'
    },
    {
        type: "input",
        message: (colors.brightBlue("Enter future development ideas if given more time or resourses. This will display below the Future Developement header.")),
        name: 'futureDevelopement'
    },
    {
        type: "input",
        message: (colors.brightBlue("Enter Github username for link to profile.")),
        name: 'github'
    },
    {
        type: "input",
        message: (colors.brightBlue("Enter E-mail for the user to contact the developer.")),
        name: 'email'
    }

];

// TODO: Create a function to initialize app
// Prompt with questions and return readme with input values.
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            const readMePageContent = generateReadMe(response);

            // TODO: Create a function to write README file
            fs.writeFile('generated-README.md', readMePageContent, (err) =>
                err ? console.log(err) : console.log('Successfully created README.md file')
            );
        });
}

// Function call to initialize app
init();
