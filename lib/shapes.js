class Shapes {
    constructor() {
      this.color = "";
    }
    setColor(TextColor) {
      this.color = TextColor;
    }
  }
  
  class Triangle extends Shapes {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shapes {
    render() {
      return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
  }
  
  // Circle class inherits properties defined in Shape class
  class Circle extends Shapes {
    render() {
      return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
  }
  module.exports = { Triangle, Square, Circle };