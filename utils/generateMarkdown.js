// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    //[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)
    //[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
    //
    //[![CC-0 license](https://img.shields.io/badge/License-CC--0-blue.svg)](https://creativecommons.org/licenses/by-nd/4.0)
    //[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)
    //[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
    let temp ="";
    for (var u = 0; u<license.length; u++){
        if (license[u]=="Eclipse"){
            temp += "![Eclipse License](https://img.shields.io/badge/License-EPL%201.0-red.svg) "
        } else if (license[u]=="MIT") {
            temp += "![MIT license](https://img.shields.io/badge/License-MIT-blue.svg) "
        } else if (license[u]=="Creative Commons Licenses") {
            temp += "![CC-0 license](https://img.shields.io/badge/License-CC--0-blue.svg) "
        } else if (license[u]=="GPLv3") {
            temp += "![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg "
        } else if (license[u]=="Open Source") {
            temp += "![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103) "
        }
    }
    return temp;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license.length>0){
        let temp = "";
        temp ="7. [licenses](#licenses)";
        return temp;
    } else return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    let temp ="";
    //only make a Licesense header if there's content to display
    if (license.length>0){
        temp += "## Licenses <a name='licenses'></a></br>"
    };
    for (var u = 0; u<license.length; u++){
    
        if (license[u]=="Eclipse"){
            temp += "[Eclipse License](https://img.shields.io/badge/License-EPL%201.0-red.svg) "
        } else if (license[u]=="MIT") {
            temp += "[MIT license](https://lbesson.mit-license.org/) "
        } else if (license[u]=="Creative Commons Licenses") {
            temp += "[CC-0 license](https://creativecommons.org/licenses/by-nd/4.0) "
        } else if (license[u]=="GPLv3") {
            temp += "[GPLv3 license](http://perso.crans.org/besson/LICENSE.html) "
        } else if (license[u]=="Open Source") {
            temp += "[Open Source](https://github.com/ellerbrock/open-source-badges/) "
        }
    }
    return temp;
};
function renderQuestions(username, email) {
  return `
  My Github can be found [HERE](https://github.com/${username})
    
  You can also contact me via email @ ${email}`;
}
function generateTOC(license) {
  return `
  ## Table of Contents
  1. [Description](#abstract)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contribution](#contribution)
  5. [Test](#test)
  6. [Questions](#questions)
  ${renderLicenseLink(license)}
 
   `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.reponame} ${renderLicenseBadge(data.license)}
  
  ${generateTOC(data.license)}

  ## Description <a name="abstract"></a>
  ${data.abstract}

  ## Installation Guide <a name="installation"></a>
  ${data.install}

  ## Usage Guide <a name="usage"></a>
  ${data.usage}

  ## Contribution Guildline <a name="coontribution"></a>
  ${data.contribution}

  ## Test Guidlines <a name="test"></a> 
  ${data.test}
  
  ### Questions 
  ${renderQuestions(data.username, data.email)}
  
  ${renderLicenseSection(data.license)}`
};

module.exports = generateMarkdown;

