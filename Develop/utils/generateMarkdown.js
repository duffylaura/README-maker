// TODO: Create a function that returns a license badge based on which license is passed in. (If there is no license, return an empty string.)
// Got the "okay" during office hour meeting to combine three suggested functions into one function as they would all be running if-statements compared against the same list
//In output object must have badges & link
//RE USER VALIDATION: don't need to have possibility of nothing returned. Must select a license with this npm feature. Even if type in something random and hit enter, it will default to Apache

function licenseExtras(data) {

if (data.license === "Apache license 2.0") {
  let extra = {
    badge: "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
    link: "https://www.apache.org/licenses/LICENSE-2.0"}
return (extra); } 
  
if (data.license === "Boost Software License 1.0") {
  let extra = {
  badge: "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg",
  link: "https://www.boost.org/users/license.html"}
return (extra); } 
  
if (data.license === "Do What The F*ck You Want To Public License") {
  let extra = {
  badge: "https://img.shields.io/badge/License-WTFPL-brightgreen.svg",
  link: "http://www.wtfpl.net/"}
return (extra); } 
  
if (data.license === "Eclipse Public License 1.0") {
  let extra = {
  badge: "https://img.shields.io/badge/License-EPL_1.0-red.svg",
  link: "https://www.eclipse.org/legal/epl-v10.html"}
return (extra); } 
  
if (data.license === "MIT license") {
  let extra = {
  badge: "https://img.shields.io/badge/License-MIT-yellow.svg",
  link: "https://opensource.org/licenses/MIT"}
return (extra); } 

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) { 
  
  let extra =licenseExtras(data);

  return (                     
  `
  # Title: ${data.title} 

  [![License](${extra.badge})](${extra.link})
      
  ## Description 

    * ${data.describe}
    * ${data.motivation}
    * ${data.solve}
    * ${data.learn}
    * ${data.standout}
    
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.installation}
    
  ## Usage

  ${data.usage}
    
  ## License

  This project is licensed under the terms of ${data.license}.

  For more information on this license, please visit [this link](${extra.link}).
   
  ## Contributing 

  The following people collaborated on this project with me: ${data.collaborators}. 

  Interested in contributing!? There are many ways to contribute to this project. Get started [here](https://github.com/${data.username}/${data.repo}).

  ## Tests 

  ${data.test}
    
  ## Questions

  Please email ${data.email} or contact me thgrough [GitHub] (https://github.com/${data.username}/${data.repo}).
  ` 
  )};

module.exports = generateMarkdown;  //Exports generateMarkdown file (which is imported into index.js)
