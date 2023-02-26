// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}\n\n
  ## Table of Contents\n\n
  * [Description](#description)\n
  * [Installation](#installation)\n
  * [Usage](#usage)\n
  * [License](#license)\n
  * [Contributing](#contributing)\n
  * [Tests](#tests)\n
  * [Questions](#questions)\n\n
  ## Description\n\n${data.description}\n\n
  ## Installation\n\n${data.installation}\n\n
  ## Usage\n\n${data.usage}\n\n
  ## License\n\n
  This project is licensed under the ${data.license} license.\n\n
  ## Contributing\n\n${data.contributing}\n\n
  ## Tests\n\n${data.tests}\n\n
  ## Questions\n\n
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://www.github.com/${data.github}/).\n\n
  `
}

module.exports = generateMarkdown;
