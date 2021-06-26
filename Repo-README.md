<div align="center">

# READMe file generator using Node.js and ES6
 

GitHub Repository: https://github.com/rubiocode/README-Generator



</div>

## Table of Contents 

* [Description](#description)
* [View](#view)
* [Usage](#usage)
* [Installation](#installation)
* [Built With](#built-with)
* [Credits](#credits)


## Description 

Quickly and easily, through a series of prompts, create high-quality README files with this _README file generator_ by using command-line application to dynamically generate a README file for your next GitHub project!

> A README file acts like a virtual storefront to a repository—it's the first thing that a person sees when they visit a repo on GitHub. But it's also much more than that: README files contain essential information about the repo's project. Thus, the quality of a README file can differentiate a high-quality repo from a low-quality one.

### User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```
### Acceptance Criteria

- [x] Command line that accepts user input
- [x] A high-quality, professional README file is generated
- [x] README file contains 'Title, Description, Table of Contents, Installation, Usage, License, Contribuitors, Tests, and Questions. 
- [x] Given title - from user input- becomes the title of the README file 
- [x] License prompted as a list of options in terminal
- [x] License badge is added near the top of README file and a notice explaining the license is added to the license section 
- [x] Questions section contains username, github profile, and email address
- [x] All links in README file work appropiately

## View

Here is a screen recording of what the prompts in command-line application look like

![Untitled_ Jun 26, 2021 12_08 PM](https://user-images.githubusercontent.com/78938193/123522644-57f21c80-d673-11eb-82a1-cc6a5d13df1b.gif)


## Usage 

Simply open your preferred terminal and run the command below

```bash
    node index.js
```

this command will populate a series of prompts that will generate you professional and high-quality README file. Have the following prompts ready to answer:

```bash
    Please enter your full name.
    Please enter your GitHub username.
    Please enter your email.
    Please enter current year YYYY.
    Please enter the title of your project.
    Please describe the project.
    Please enter the url to the deployed application.
    Please, describe how to install this product.
    Please, describe how to use this product.
    Which license should be added to this project. 
        choices [
            'MIT License', 
            'Apache License 2.0', 
            'GNU GPL v3', 
            'Mozilla Public License 2.0', 
            'Boost Software License 1.0',
            'none',
        ]
    How can users contribute to the project or who contributed to this project.
    Test Instructions to the product
```

## Installation 

To start using this README generator you must follow these instructions:

* Fork and clone this repository and save it to your computer. For help how to fork and clone click [here](https://guides.github.com/activities/forking/) 

* Open your terminal and make sure noje.js is installed. To download node.js click [here](https://nodejs.org/en/download/)

* Once you have downloaded node.js, run 'node index.js' to get the prompts to populate

* README file will generate automatically in your terminal, you can then save your README file on your project folder or copy paste the information to Github README file. 


## Built With

* [JavaScript ES6](https://www.w3schools.com/Js/js_es6.asp) - Programming language that creates dynamic website content. ES6 or ECMAScript 6 was the second major revision to JavaScript.

* [Node.js](https://nodejs.dev/learn/) - Node.js is an open-source, low-level, back-end JavaScript runtime platform that uses asynchronous programming and is a popular tool for almost any kind of project!. 

* [Inquirer package](https://www.npmjs.com/package/inquirer) - A collection of common interactive commands line user interfaces.


## Credits

 * 2021 Trilogy Education Services, LLC, a 2U, Inc. brand.

 


 ---
  © 2021 Rubidia Rubio
