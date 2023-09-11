export class Shape {
    calculateArea() {
        
    }
    calculateParameter(){

    }
    toString() {
        return `Shape - Area: ${this.calculateArea()}, Parameter: ${this.calculateParameter()}`;
    }
}

export class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculateParameter(){
        return 2* Math.PI * this.radius;
    }
}

export class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        console.log(this.width,this.height)
        return this.width * this.height;

    }

    calculateParameter(){
        return (2 * (this.height + this.width));
    }
}

export class Square extends Shape{
    constructor(length){
        super();
        this.length=length;
    }

    calculateArea(){
        return this.length*this.length;
    }
    calculateParameter(){
        return this.length * 4;
    }
}


