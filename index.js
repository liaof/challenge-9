// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const writeMarkdown = require('./utils/writeMarkdown');
// TODO: Create an array of questions for user input
const questions = [ 
  {
    type: 'input',
    name: 'username',
    message: 'Enter your GitHub Username (Required)',
    validate: usernameInput => {
      if (usernameInput) {
        return true;
      } else {
        console.log('Please enter your repo URL!');
        return false;
      }
    }
  },     
  {
    type: 'input',
    name: 'reponame',
    message: 'Enter the name of your project (Required)',
    validate: reponameInput => {
      if (reponameInput) {
        return true;
      } else {
        console.log('Please enter your project name!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email (Required)',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter your project name!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'abstract',
    message: 'Give a brief description of your project (Required)',
    validate: abstractInput => {
      if (abstractInput) {
        return true;
      } else {
        console.log('Please enter a bried description of your project!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'install',
    message: 'Enter the install instructions (Required) (use </br> to start a new line)',
    validate: installInput => {
      if (installInput) {
        return true;
      } else {
        console.log('Please enter your instructions!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter the usage information (Required) (use </br> to start a new line)',
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
        console.log('Please enter your guidelines!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Enter contribution guidelines (Required) (use </br> to start a new line)',
    validate: contributionInput => {
      if (contributionInput) {
        return true;
      } else {
        console.log('Please enter your guidelines!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'test',
    message: 'Enter test guidelines (Required) (use </br> to start a new line)',
    validate: contributionInput => {
      if (contributionInput) {
        return true;
      } else {
        console.log('Please enter your guidelines!');
        return false;
      }
    }
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Which licenses does your project use? (Check all that apply)',
    choices: ['Eclipse', 'MIT', 'Creative Commons Licenses', 'GPLv3', 'Open Source']
  },
  ];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {

//}
const writeToFile = (fileName, data) =>{

}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init().then(data => {
    console.log(data.license);
    return generateMarkdown(data);
  }).then(htmlCode => {
      return writeMarkdown(htmlCode);
  })
;

//init().then(generateMarkDown(inputData);)
