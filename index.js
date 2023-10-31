//Packages used to create a Logo in Node
const inquirer = require('inquirer');
const fs = require('fs')
const { Triangle, Square, Circle } = require("./lib/shapes");


// function to prompt a user for imput on a new logo
   inquirer
    .prompt
  ([
      {
        type: "input",
        message: "Please enter 3 Characters to start your new logo",
        name: "Text",
      },
      {
        type: "input",
        message: "Please Enter a color or hex code for the text",
        name: "TextColor",
      },
      {
        type: "list",
        message: "Please Choose a shape for your new logo",
        choices: ["Circle", "Square", "Triangle"],
        name: "shape",
      },
      {
        type: "input",
        message: "Please Enter a color or hex code for the background",
        name: "Background",
      },
    ])
    .then((answers) => {
        writeFile("logo.svg", answers);
    });


// Function to write SVG file using user input from prompts
function writeFile(fileName, answers) {
    let svgString = "";
    svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgString += "<g>";
    svgString += `${answers.shape}`;
  
    let shapeChoice;
    if (answers.shape === "Circle") {
      shapeChoice = new Circle();
      svgString += `<circle cx="150" cy="115" r="80" fill="${answers.Background}"/>`;
    } else if (answers.shape === "Square") {
      shapeChoice = new Square();
      svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.Background}"/>`;
    } else {
      shapeChoice = new Triangle();
      svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.Background}"/>`;
    }
  
    svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.TextColor}">${answers.Text}</text>`;
    svgString += "</g>";
    svgString += "</svg>";
  
    fs.writeFile(fileName, svgString, (err) => {
      err ? console.log(err) : console.log("logo.svg has been created successfully");
    });
  }