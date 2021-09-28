// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const createBadges = { //badges made here: https://shields.io/endpoint and https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba and https://gist.github.com/artem-solovev/e1602722f84835f35daef4dfb3df5500
    'Apache': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    //'Academic',
    'GNU': '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)',
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Mozilla': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    'ODbl': '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)',
  };
  return createBadges;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

Feel free to direct questions about this project via my email [${email}] or Github @${github}.
`;
}

//renderLicenseBadge(data.license);
//renderLicenseLink(license);
//renderLicenseSection(data.license);

module.exports = generateMarkdown;
