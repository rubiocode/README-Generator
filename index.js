// create variables for dependencies and other values
const inquirer = require('inquirer');

const fs = require('fs');

const util = require('util');

const writeMarkdown = util.promisify(fs.writeFile);

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter your full name.',
        validate: nameInput => (nameInput ? true : 'You MUST enter your full name')
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub username.',
        validate: usernameInput => (usernameInput ? true : 'You MUST enter your username')
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email.',
        default: 'noemail@github.com',
        validate: emailInput => (emailInput ? true : 'You MUST enter your email')
    },
    {
        type: 'input',
        name: 'currentYear',
        message: 'Please enter current year YYYY.',
        validate: yearInput => (yearInput ? true : 'You MUST enter current YYYY')
    },
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of your project.',
        validate: titleInput => (titleInput ? true : 'You MUST enter a title')
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe the project',
        validate: descriptionInput => (descriptionInput ? true : 'You MUST enter a description')
    },
    {
        type: 'input',
        name: 'url',
        message: 'Please enter the url to the deployed application',
        validate: urlInput => (urlInput ? true : 'You MUST enter your project url')
    },
    {
        type: 'input',
        name: 'installationGuide',
        message: 'Please, describe how to install this product',
        validate: installationInput => (installationInput ? true : 'You MUST enter installation guide')
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please, describe how to use this product.',
        validate: usageInput => (usageInput ? true : 'You MUST describe application usage')
    },
    {
        type: "list",
        name: "license",
        message: "Which license should be added to this project?",
        choices: [
            'MIT License',
            'Apache License 2.0',
            'GNU GPL v3',
            'Mozilla Public License 2.0',
            'Boost Software License 1.0',
            'none',
        ],
        validate: licenseInput => (licenseInput ? true : 'You MUST enter a license choice'),
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'How can users contribute to the project or who contributed to this project?',
        default: 'Make a pull request'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Test Instructions for the product',
        validate: testInput => (testInput ? true : 'You MUST explain tests')
    }
]

// prompt user in arrow function to populate questions
const promptUser = () => {
    return inquirer
        .prompt(questions)
};

// generating README file arrow function takes response as parameter
const writeToFile = (response) => {
    // doing a switch statement to present license badge and license information
    let licenseType;
    let licenseURL;
    switch (response.license) {
        case 'MIT License':
            licenseType = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            licenseURL = 'https://opensource.org/licenses/MIT';
            licenseDescription = 
            `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

            The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. You may obtain a copy of the License at ${licenseURL} 
            
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
            break;
        case 'Apache License 2.0':
            licenseType = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            licenseURL = 'http://www.apache.org/licenses/LICENSE-2.0';
            licenseDescription =  
            `Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at 
            ${licenseURL}
            Unless required by applicable law or agreed to in writing, software
            distributed under the License is distributed on an "AS IS" BASIS,
            WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            See the License for the specific language governing permissions and
            limitations under the License.`
            break;
        case 'GNU GPL v3':
            licenseType = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
            licenseURL = 'https://www.gnu.org/licenses/gpl-3.0';
            licenseDescription=
            `All rights granted under this License are granted for the term of copyright on the Program, and are irrevocable provided the stated conditions are met. This License explicitly affirms your unlimited permission to run the unmodified Program. The output from running a covered work is covered by this License only if the output, given its content, constitutes a covered work. This License acknowledges your rights of fair use or other equivalent, as provided by copyright law. You may obtain a copy of the License at ${licenseURL} 

            You may make, run and propagate covered works that you do not convey, without conditions so long as your license otherwise remains in force. You may convey covered works to others for the sole purpose of having them make modifications exclusively for you, or provide you with facilities for running those works, provided that you comply with the terms of this License in conveying all material for which you do not control copyright. Those thus making or running the covered works for you must do so exclusively on your behalf, under your direction and control, on terms that prohibit them from making any copies of your copyrighted material outside their relationship with you.

            Conveying under any other circumstances is permitted solely under the conditions stated below. Sublicensing is not allowed; section 10 makes it unnecessary.`;
            break;
        case 'Mozilla Public License 2.0':
            licenseType = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
            licenseURL = 'https://opensource.org/licenses/MPL-2.0';
            licenseDescription=
            `Each Contributor hereby grants You a world-wide, royalty-free,
            non-exclusive license:
            
            (a) under intellectual property rights (other than patent or trademark)
                Licensable by such Contributor to use, reproduce, make available,
                modify, display, perform, distribute, and otherwise exploit its
                Contributions, either on an unmodified basis, with Modifications, or
                as part of a Larger Work; and
            
            (b) Under no circumstances and under no legal theory, whether tort      
                (including negligence), contract, or otherwise, shall any           
                Contributor, or anyone who distributes Covered Software as          
                permitted above, be liable to You for any direct, indirect,         
                special, incidental, or consequential damages of any character      
                including, without limitation, damages for lost profits, loss of    
                goodwill, work stoppage, computer failure or malfunction, or any    
                and all other commercial damages or losses, even if such party      
                shall have been informed of the possibility of such damages. This   
                limitation of liability shall not apply to liability for death or   
                personal injury resulting from such party's negligence to the       
                extent applicable law prohibits such limitation. Some               
                jurisdictions do not allow the exclusion or limitation of           
                incidental or consequential damages, so this exclusion and          
                limitation may not apply to You.
                
                You may obtain a copy of the License at ${licenseURL}`
            break;
        case 'Boost Software License 1.0':
            licenseType = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
            licenseURL = 'https://www.boost.org/LICENSE_1_0.txt';
            licenseDescription = 
            `Permission is hereby granted, free of charge, to any person or organization
            obtaining a copy of the software and accompanying documentation covered by
            this license (the "Software") to use, reproduce, display, distribute,
            execute, and transmit the Software, and to prepare derivative works of the
            Software, and to permit third-parties to whom the Software is furnished to
            do so, all subject to the following:
            
            The copyright notices in the Software and this entire statement, including
            the above license grant, this restriction and the following disclaimer,
            must be included in all copies of the Software, in whole or in part, and
            all derivative works of the Software, unless such copies or derivative
            works are solely in the form of machine-executable object code generated by
            a source language processor. You may obtain a copy of the License at ${licenseURL}
            
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO EVENT
            SHALL THE COPYRIGHT HOLDERS OR ANYONE DISTRIBUTING THE SOFTWARE BE LIABLE
            FOR ANY DAMAGES OR OTHER LIABILITY, WHETHER IN CONTRACT, TORT OR OTHERWISE,
            ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
            DEALINGS IN THE SOFTWARE.`
            break;
    }


// creating template literal to create actual readme file
return `# ${response.title}
${licenseType}

Deployed Website: ${response.url}


## Table of Contents 

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)



## Description 

${response.description}.


## Installation

${response.installationGuide}.


## Usage 

${response.usage}.


## License 

${licenseDescription}

## Contributors

${response.contributors}

## Tests

${response.tests}

## Questions 

If you have any questions or issues on this repository please contact ${response.name} by email @ ${response.email} or through GitHub ${response.username}(https://github.com/${response.username})

---
© ${response.currentYear} ${response.license} ${response.name} `

};

/* initiating function to prompt user questions then use the response to generate readme file, notify user readme has been created or throw error*/

const init = () => {
    promptUser()
        .then((response) => writeMarkdown(`${response.title} README.md`, writeToFile(response)))
        .then(() => console.log('Congratulations! You have successfully created a ReadMe file'))
        .catch((err) => console.error(err));
};
init();

