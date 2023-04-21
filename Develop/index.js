// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generatemarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe the purpose and function of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please describe the installation process for your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please describe the usage of your project.',
    },
    { 
        type: 'checkbox',
        name: 'license',
        message: 'Select a license for your project.',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Please describe the contribution guidelines for your project.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please describe the test instructions for your project.',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log('Generating README file ...');
        writeToFile('README.md', generatemarkdown({... responses}));
    });
}

// Function call to initialize app
init();
