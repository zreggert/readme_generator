// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  // add the license badge here

  ## Descrription
  ${data.description}

  ## Table of Contents
  *[Description]
  *[Installation]
  *[Usage]
  *[License]
  *[Contributions]
  *[Tests]
  *[Questions?]


  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributions
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  For any questions you can reach me at:
  ${data.email}

  Also please check out this applications repo and my other work at:
  ${data.github}

`;
}

module.exports = generateMarkdown;
