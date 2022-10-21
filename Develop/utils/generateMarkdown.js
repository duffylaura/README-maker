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
function generateMarkdown(data) { //Just create the string here then write the file on the main page  //This return string should be in generateMarkdown.js file (copy )
return (                     
    `# Title: ${data.title} 
      
    # Description 
    
      * ${data.describe}
      * ${data.motivation}
      * ${data.solve}
      * ${data.learn}
      * ${data.standout}
    
    # Table of Contents
    
    # Installation 
    
    ${data.installation}
    
    # Usage 
    
    ${data.usage}
    
    # Liscence
    
    
    # Collaborators 
    
    ${data.collaborators}
    
    # Questions   ` 
  )};

module.exports = generateMarkdown;  //Don't know what this is for 
