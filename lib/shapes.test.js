//tested shapes and colors are in the Examples folder
const { Circle, Square, Triangle } = require("./shapes.js");

describe("Circle", () => {
  test("test for a circle with a black background", () => {
    const shape = new Circle();
    shape.setColor("black");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="Yellow" />'
    );
  });
});

describe("Square", () => {
  test("test for a square with a silver background", () => {
    const shape = new Square();
    shape.setColor("silver");
    expect(shape.render()).toEqual(
      '<rect x="73" y="40" width="160" height="160" fill="Green" />'
    );
  });
});

describe("Triangle", () => {
  test("test for a triangle with a red background", () => {
    const shape = new Triangle();
    shape.setColor("red");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="Red" />'
    );
  });
});