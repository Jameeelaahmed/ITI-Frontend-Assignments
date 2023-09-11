import { Shape, Circle, Rectangle, Square } from "./q2.js";

const circle = new Circle(7);
console.log(`Circle Area: ${circle.calculateArea()} 
Circle Parameter: ${circle.calculateParameter()}`);
console.log(circle.toString());

const rectangle = new Rectangle(8, 9);
console.log(`Rectangle Area: ${ rectangle.calculateArea()}
Reactangle parameter: ${rectangle.calculateParameter()}`);
console.log(rectangle.toString());

const square= new Square(4);
console.log(`Square area: ${square.calculateArea()}
square parameter: ${square.calculateParameter()}`);
console.log(square.toString());