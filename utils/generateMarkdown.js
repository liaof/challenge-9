// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function generateTOC(data) {
    return `
    ## Table of Contents
    1. [Abstract](#abstract)
    2. [Installation](#installation)
    3. [Usage](#usage)
    4. [Contribution](#contribution)
    5. [Test](#test)
   `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.reponame}
  
  ## Abstract <a name="abstract"></a>
  ${data.abstract}

  ## Installation Guide <a name="installation"></a>
  ${data.install}

  ## Usage Guide <a name="usage"></a>
  ${data.usage}

  ## Contribution Guildline <a name="coontribution"></a>
  ${data.contribution}

  ## Test Guidlines <a name="test"></a> 
  ${data.test}`;
}

module.exports = generateMarkdown;
