const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

class Svg {
  constructor() {
    this.textElement = '';
    this.shapeElement = '';
  }

  render() {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
  }

  setTextElement(text, color) {
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
  }

  setShapeElement(shape) {
    this.shapeElement = shape.render();
  }
}

// creates questions using inquirer
const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'TEXT: Enter up to (3) Characters:',
  },
  {
    type: 'input',
    name: 'text-color',
    message: 'TEXT COLOR: Enter a SVG color keyword (OR a hexadecimal number):',
  },
  {
    type: 'input',
    name: 'shape-color',
    message: 'SHAPE COLOR: Enter a SVG color keyword (OR a hexadecimal number):',
  },
  {
    type: 'list',
    name: 'pixel-image',
    message: 'Choose which Pixel Image you would like?',
    choices: ['Circle', 'Square', 'Triangle'],
  },
];

// Function write data to file
function writeToFile(fileName, data) {
  console.log(`Writing [${data}] to file [${fileName}]`);
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log('YAY!!, you have Generated a logo.svg!');
  });
}

async function init() {
  console.log('Starting init');
  let svgString = '';
  const svg_file = 'logo.svg';

  // Prompt the user for answers to questions
  const answers = await inquirer.prompt(questions);

  // User text
  const userText = answers.text.slice(0, 3);
  console.log(`User text: [${userText}]`);

  // User font color
  const userFontColor = answers['text-color'];
  console.log(`User font color: [${userFontColor}]`);

  // User shape color
  const userShapeColor = answers['shape-color'];
  console.log(`User shape color: [${userShapeColor}]`);

  // User shape type
  const userShapeType = answers['pixel-image'];
  console.log(`User entered shape = [${userShapeType}]`);

  // User shape
  let userShape;
  if (userShapeType.toLowerCase() === 'square') {
    userShape = new Square();
    console.log('User selected Square shape');
  } else if (userShapeType.toLowerCase() === 'circle') {
    userShape = new Circle();
    console.log('User selected Circle shape');
  } else if (userShapeType.toLowerCase() === 'triangle') {
    userShape = new Triangle();
    console.log('User selected Triangle shape');
  } else {
    console.log('Invalid shape!');
    return;
  }
  userShape.setColor(userShapeColor);

  // Create a new Svg and add the shape and text elements to it
  const svg = new Svg();
  svg.setTextElement(userText, userFontColor);
  svg.setShapeElement(userShape);
  svgString = svg.render();

  // Print shape to log
console.log("Displaying shape:\n\n" + svgString);


console.log("Shape generation complete!");
console.log("Writing shape to file...");
// putting created svg file into Examples folder
const filePath = './Examples/' + svg_file;
writeToFile(filePath, svgString); 
}
init()



