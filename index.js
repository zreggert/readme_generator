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
        message: 'Who contributed to this project?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What are the test instructions for you project?',
        name: 'test',
    },
    {
        type: 'list',
        message: 'What licenses does your application have?',
        name: 'license',
        choices: [
            'MIT',
            'BSD3',
            'EPL',
            'GPLv3',
        ]
    },
    {
        type: 'input',
        message: 'What year did you copyright this project?',
        name: 'licenseYear',
    },
    {
        type: 'input',
        message: 'What name would you like on the copyright?',
        name: 'licenseName',
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
    inquirer.prompt(questions)
    .then((data) => {
        const fileName = `README-${data.title.toLowerCase().split(' ').join('-')}.md`;

        writeToFile(fileName, data);
    });
    
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => 
    err ? console.log(err) : console.log('Success!')
    );
};


// TODO: Create a function to initialize app
function init() {
    askQuestions();
}

// Function call to initialize app
init();

