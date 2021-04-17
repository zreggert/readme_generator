// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const renderLicenseBadge = (license) => {
  if (license === 'MIT') {
     return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === 'BSD3') {
    return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  } else if (license === 'EPL') {
    return "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
  } else if (license === 'GPLv3') {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return "https://opensource.org/licenses/MIT"
  } else if (license === 'BSD3') {
    return "https://opensource.org/licenses/BSD-3-Clause"
  } else if (license === 'EPL') {
    return "https://opensource.org/licenses/EPL-2.0"
  } else if (license === 'GPLv3') {
    return "https://opensource.org/licenses/GPL-3.0"
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return "This project is licensed under the MIT license."
  } else if (license === 'BSD3') {
    return "This project is licensed under the BSD 3-Clause license."
  } else if (license === 'EPL') {
    return "This project is licensed under the Eclipse Public License version 2.0."
  } else if (license === 'GPLv3') {
    return "This project is licensed under the GNU General Public License, version 3."
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}

  ## Descrription
  ${data.description}

  ## Table of Contents
  -[Description](#description)

  -[Installation](#installation)

  -[Usage](#usage)

  -[License](#license)

  -[Contributions](#contributions)

  -[Tests](#tests)

  -[Questions](#questions)


  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  Copyright (C) ${data.licenseYear} ${data.licenseName}

  ${renderLicenseSection(data.license)}

  ${renderLicenseLink(data.license)}

  ## Contributions
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  For any questions you can reach me at:
  ${data.email}

  Also please check out this application's repo and my other work at:
  ${data.github}

`;
}

module.exports = generateMarkdown




