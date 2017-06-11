//OOP Class to make shapes:
// Shape constructor
function Shape(width, height) {
    this.name = 'Shape';
    this.width = width;
    this.height = height;
    this.div = document.createElement('div');
    this.div.className = 'shape';
    this.div.style.width = width + 'px';
    this.div.style.height = height + 'px';
    this.div.style.marginLeft = Math.floor(Math.random() * (600 - width)) + 'px';
    this.div.style.marginTop = Math.floor(Math.random() * (600 - height)) + 'px';
    document.getElementById('myCanvas').appendChild(this.div);
    this.div.addEventListener('click', function () {
        this.describe();
    }.bind(this));
    this.div.addEventListener('dblclick', this.removeShape);
}


//method describe() that updates the stats in sidepanel
Shape.prototype.describe = function() {
    document.getElementById('shapeName').innerHTML= this.name;
    document.getElementById('currentWidth').innerHTML = this.width;
    document.getElementById('currentHeight').innerHTML = this.height;
    document.getElementById('currentRadius').innerHTML = this.radius;
    document.getElementById('currentArea').innerHTML = this.area();
    document.getElementById('currentPerimeter').innerHTML = this.perimeter();
}

//General Shape methods
Shape.prototype.area = function () {
    return this.width * this.height;
}

Shape.prototype.perimeter = function () {
    return this.width * 2 + this.height * 2;
}

//doubleclick to remove shape from canvas
Shape.prototype.removeShape = function() {
    this.remove();
}

//Circle Class
function Circle(radius) {
    Shape.call(this, radius, radius);
    this.name = "Circle";
    this.radius = radius;
    this.div.className = 'circle';
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

//Circle methods to define calculations
Circle.prototype.area = function() {
    return Math.PI * Math.pow(this.radius, 2); 
}
Circle.prototype.perimeter = function(){
    return 2 * Math.PI * this.radius;      
}

//Triangle Class
function Triangle(height) {
    Shape.call(this, height);
    this.name = "Triangle";
    this.div.className = 'triangle';
    this.div.style.width = 0;
    this.div.style.height = 0;
    this.div.style.borderLeftWidth = this.height;
    this.div.style.borderBottomWidth = this.height;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

// //Triangle Methods to define claculations
Triangle.prototype.area = function() { 
    return (this.height * this.height) / 2;
}

Triangle.prototype.perimeter = function() {  
    return 2 * this.height + math.sqrt(2* Math.pow(this.height, 2));
}

// //Rectangle Class
function Rectangle(width, height) {
       Shape.call(this, width, height);
       this.name = "Rectangle";
        this.div.className = 'rectangle';
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

//Square Class
function Square(height) {
    Shape.call(this, height, height);
    this.name = "Square";
    this.div.className = 'square';
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

//event listeners
document.getElementById('circleBtn').addEventListener('click', function () {
    var radius = document.getElementById('circle').value;
    new Circle(radius);
})

document.getElementById('triangleBtn').addEventListener('click', function () {
    var height = document.getElementById('triHeight').value;
    new Triangle(height);
})

document.getElementById('rectangleBtn').addEventListener('click', function () {
    var width = document.getElementById('recWidth').value;
    var height = document.getElementById('recHeight').value;
    new Rectangle(width, height);
})

document.getElementById('squareBtn').addEventListener('click', function () {
    var height = document.getElementById('sqSide').value;
    new Square(height);
})