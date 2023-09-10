// Define the Shape class with common properties and methods
export class Shape {
    constructor() {
        this.color = 'default';
    }

    calculateArea() {
        throw new Error('calculateArea() method must be implemented.');
    }

    calculatePerimeter() {
        throw new Error('calculatePerimeter() method must be implemented.');
    }

    toString() {
        return `Shape [Color: ${this.color}]`;
    }
}

// Define Rectangle class as a subclass of Shape
export class Rectangle extends Shape {
    constructor(width, height, color) {
        super();
        this.width = width;
        this.height = height;
        this.color = color;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }

    toString() {
        return `Rectangle [Color: ${this.color}, Width: ${this.width}, Height: ${this.height}, Area: ${this.calculateArea()}, Perimeter: ${this.calculatePerimeter()}]`;
    }
}

// Define Square class as a subclass of Rectangle
export class Square extends Rectangle {
    constructor(side, color) {
        super(side, side, color);
    }

    toString() {
        return `Square [Color: ${this.color}, Side: ${this.width}, Area: ${this.calculateArea()}, Perimeter: ${this.calculatePerimeter()}]`;
    }
}

  // Define Circle class as a subclass of Shape
export class Circle extends Shape {
    constructor(radius, color) {
        super();
        this.radius = radius;
        this.color = color;
    }

    calculateArea() {
        return Math.PI * this.radius ** 2;
    }

    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }

    toString() {
        return `Circle [Color: ${this.color}, Radius: ${this.radius}, Area: ${this.calculateArea()}, Circumference: ${this.calculatePerimeter()}]`;
    }
}
