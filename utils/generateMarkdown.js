// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if (license === 'No License' || license === undefined) {//Check if no license was selected or no license was found.
    badge = ""
    return badge;
  }
  else {
    badge = `![Static Badge](https://img.shields.io/badge/${license}-Badge-red?style=flat)`// Creates a badge based on which license was selected
    return badge;
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// Switch case to find which license was entered a returns the correct license link.
function renderLicenseLink(license) {
  let link = '';
  switch (license){
    case "Apache":
      link = "http://www.apache.org/licenses/LICENSE-2.0"
    break;
    case "MIT":
      link = "https://opensource.org/license/mit"
    break;
    case "No License":
      link = ""
    break;
  }
  return link
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// renderLicenseSection is called in the generateReadMe function
function renderLicenseSection(license) {
  const licenseSection = `## License <a id="license"></a>
  ### ${license}
  * ${renderLicenseBadge(license)}
  * [Link to License Page](${renderLicenseLink(license)})`
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
const generateReadMe = (response) => {
  const readMe = `# ${response.title}
  
  ## Table of Contents
  * [Description](#description)
  * [Technology Used](#technology-used)
  * [Installation](#installation)
  * [Usage Information](#usage-information)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Github Profile](#github)
  * [E-mail](#email)
  
  ## Description <a id="description"></a>
  ${response.description}
  
  ## Technology Used <a id="technology-used"></a>
  ${response.technology}
  
  ## Installation <a id="installation"></a>
  ${response.installation}
  
  ## Usage Information <a id="usage-information"></a>
  How the user will use the application and functionality of all the features.
  ${response.usage}
  
  ${renderLicenseSection(response.license)}
  
  ## Contributing <a id="contributing"></a>
  ${response.contributing}
  
  ## Tests <a id="tests"></a>
  Preform tests on the application and report any bugs to the developer.
  ${response.tests}
  
  ## Questions <a id="questions"></a>
  You can report any issues in the issues tab on Github. Or you can send any questions to the e-mail provided. 
  Be clear with what repository you are referring to and as much detail as posible.
  ### Github Profile <a id="github"></a>
  [${response.github}'s Github Profile](https://github.com/${response.github})
  ### E-mail <a id="email"></a>
  ${response.email}`
  return readMe;
}

module.exports = generateReadMe;
