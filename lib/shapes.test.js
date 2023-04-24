const { Circle, Square, Triangle } = require('./shapes');

describe('Shape', () => {
  let shape;

  beforeEach(() => {
    shape = new Square();
  });

  test('it should set the color of the shape', () => {
    shape.setColor('red');
    expect(shape.color).toBe('red');
  });
});

describe('Circle', () => {
  let circle;

  beforeEach(() => {
    circle = new Circle();
  });

  test('it should render an SVG circle', () => {
    circle.setColor('blue');
    expect(circle.render()).toBe('<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="blue"/>');
  });
});

describe('Square', () => {
  let square;

  beforeEach(() => {
    square = new Square();
  });

  test('it should render an SVG square', () => {
    square.setColor('green');
    expect(square.render()).toBe('<rect x="50" height="200" width="200" fill="green"/>');
  });
});

describe('Triangle', () => {
  let triangle;

  beforeEach(() => {
    triangle = new Triangle();
  });

  test('it should render an SVG triangle', () => {
    triangle.setColor('yellow');
    expect(triangle.render()).toBe('<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="yellow"/>');
  });
});

