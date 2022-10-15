#!/usr/bin/env node

const execSync = require('child_process').execSync;

const runCommand = command => {
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Failed to execute command: ${command}`, error);
    return false;
  }

  return true;
};

const repoName = process.argv[2] || 'react-ts-app';

const gitCheckoutCommand = `git clone --depth 1 https://github.com/tomascatena/react-boilerplate ${repoName}`;

const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning the repository with name ${repoName}`);

const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) {
  console.error('Failed to clone the repository');
  process.exit(1);
}

const installedDependencies = runCommand(installDepsCommand);
if (!installedDependencies) {
  console.error('Failed to install dependencies');
  process.exit(1);
}

console.log('Done!');
console.log(`cd into the ${repoName} directory and run npm start to start the development server`);
