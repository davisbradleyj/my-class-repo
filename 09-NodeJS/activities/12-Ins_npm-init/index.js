var badmath = require('badmath');

console.log(badmath.pie);

console.log(badmath.predictable());

// ✔️ npm init -y generates a package.json file with default values

// ✔️ npm install --save installs a module as a dependency in our package.json file

// ✔️ npm install --save-dev <package-name> installs a module as a development dependency in our package.json file

// ✔️ npm install -g <package-name> installs a module globally

// ✔️ npm uninstall uninstalls a module. It can be combined with -g, --save and --save-dev.

// ☝️ What does npm init -y do?

// 🙋 Using the -y, or "yes", flag with npm init accepts all default options and leaves optional fields blank.

// 🔑 npm init -y accepts the default options and automagically generates a package.json file for us.

// 📝 npm does not prompt us for details about our module.

// ☝️ How do we add dependencies, such as inquirer, to our package.json?

// 🙋 We use the --save flag with npm install, so, npm install --save inquirer

// ☝️ What does --save-dev do?

// 🙋 --save-dev installs a package as a development dependency. This is for packages that are only used locally, but won't be required when the application is deployed.

// ☝️ What does the -g flag do when running npm install?

// 🙋 The -g, or global, flag installs an npm package globally, meaning we can use it from any directory on our computer. By default, npm installs locally, or within the working directory where the command is run.

// ☝️ Why would we not want to install our dependencies globally by default?

// 🙋 To ensure that our applications are using the correct version of a package.

// ☝️ What are examples of packages we would want to install globally?

// 🙋 Developer tools that are not dependencies in our application code base.