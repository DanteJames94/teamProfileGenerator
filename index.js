const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter Team Members Name:',
      name: 'teamMemberName',
    },
    {
      type: "list",
      message:"Select the members role. Use the arrow keys to move. Use enter to submit.",
      choices: ["Engineer", "Intern", "Manager"],
      name: "role",
    },
    {
      type: 'input',
      message: 'Enter Team Members ID:',
      name: 'id',
    },
    {
      type: 'input',
      message: 'Enter Team Members Email Address:',
      name: 'email',
    },
    
    {
      type: 'input',
      message: 'Enter Team Members Office Number:',
      name: 'email',
    },
    
  ])