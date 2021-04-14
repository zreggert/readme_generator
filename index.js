// TODO: Include packages needed for this application

const fs = require('fs');

const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide installation instructions for your project.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How do you use this application?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines for your project?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What are the test instructions for you project?',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What licenses does your application have?',
        name: 'license',
    },
    {
        type: 'input',
        message: 'What is your github profile?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
];

const askQuestions = () => {
    inquirer.prompt(questions);
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    askQuestions();
}

// Function call to initialize app
init();
