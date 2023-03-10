const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [


{
    type: 'input',
    message: "Choose a title for your project...",
    name: 'title'
},
{
    type: 'input',
    message: "Please write a description of your project...",
    name: 'description'
},
{
    type: 'input',
    message: "Write steps which a user can follow to install your project...",
    name: 'installation'
},
{
    type: 'input',
    message: "Write some usage instructions for your project...",
    name: 'usage'
},
{
    type: 'input',
    message: "Enter the contribution guidelines for your project...",
    name: 'contributing'
},
{
    type: 'input',
    message: "Enter the test instructions for your project...",
    name: 'tests'
},
{
    type: 'list',
    message: "Choose a license for your project...",
    name: 'license',
    choices:["MIT", "ISC"]
    
},
{
    type: 'input',
    message: "Enter your GitHub username...",
    name: 'github'
},
{
    type: 'input',
    message: "Last question :) please: Enter your email address...",
    name: 'email'
}
]

// function to write README file
// function writeToFile(fileName, data) {
// }


// function to initialize program
async function init() {
    console.log('Hi ! Welcome to the README Generator !')
        const answers = await inquirer.prompt(questions);
        const readme = generateMarkdown(answers);
        await writeFileAsync('README.md', readme);
        console.log('Congrats ! Your README.md is created !');
}
// function call to initialize program
init();
