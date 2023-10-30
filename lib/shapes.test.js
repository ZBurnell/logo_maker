const { Triangle, Square, Circle } = require("./shapes.js");

describe("Circle", () => {
  test("test for a circle with a Yellow background", () => {
    const shape = new Circle();
    shape.setColor("Yellow");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="Yellow" />'
    );
  });
});

describe("Square", () => {
  test("test for a square with a Green background", () => {
    const shape = new Square();
    shape.setColor("Green");
    expect(shape.render()).toEqual(
      '<rect x="73" y="40" width="160" height="160" fill="Green" />'
    );
  });
});

describe("Triangle", () => {
  test("test for a triangle with a Red background", () => {
    const shape = new Triangle();
    shape.setColor("Red");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="Red" />'
    );
  });
});