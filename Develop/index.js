// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
//NEED table of contents with functional links

inquirer
    .prompt([

    //project title
    {
    type:'input',
    name: 'title',
    message: 'What is the title of your project?',
    },
    
    //description/what app is for
    {
    type:'input',
    name: 'description',
    message: 'Enter a description for your project.',
    },

    //installation/how to install
    {
    type:'input',
    name: 'installation',
    message: 'Describe how a user would install your project.',
    },
    
    //usage
    {
    type:'input',
    name: 'usage',
    message: 'Enter how your project is intented to be used.',
    }, 

    //license--need to have options
    //https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository
    //https://github.blog/2015-03-09-open-source-license-usage-on-github-com/
    {
    type: 'list',
    name: 'license',
    message: 'Which license would you like to use?',
    choices: [
        ''
    }, 
    
    //contributing
    {
    type:'input',
    name: 'contributing',
    message: 'How can others make contributions to your project?',
    },

    //tests
    {
    type:'input',
    name: 'tests',
    message: 'How can users test your project?',
    },

    //questions--enter github user name, link to profile
    {
    type:'input',
    name: 'username',
    message: 'Enter your github username:',
    }, 
    //questions--enter email, w/ instructions on how to reach out with more qu
    {
    type:'input',
    name: 'email',
    message: 'Enter your email:',
    }, 
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
