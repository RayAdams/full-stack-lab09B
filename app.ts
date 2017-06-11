//OOP Class to make shapes:
// Shape constructor
class Shape {
    div: HTMLDivElement;
    name: string;
    width: number;
    height: number;
    radius: number;

    constructor(width: number, height: number){
            this.name = 'Shape';
            this.width = width;
            this.height = height;
            this.radius = this.height / 2;
            this.div = document.createElement('div');
            this.div.className = 'shape';
            this.div.style.width = width + 'px';
            this.div.style.height = height + 'px';
            this.div.style.marginLeft = Math.floor(Math.random() * (600 - width)) + 'px';
            this.div.style.marginTop = Math.floor(Math.random() * (600 - height)) + 'px';
            document.getElementById('myCanvas').appendChild(this.div);
            this.div.addEventListener('click', () => {
                this.describe();
            });
            this.div.addEventListener('dblclick', () => {
                this.div.remove();
            });
    } //constructor ending

    //method describe() that updates the stats in sidepanel
    describe(): any {
        document.getElementById('shapeName').innerHTML= this.name;
        document.getElementById('currentWidth').innerHTML = String(this.width);
        document.getElementById('currentHeight').innerHTML = String(this.height);
        document.getElementById('currentRadius').innerHTML = String(this.radius);
        document.getElementById('currentArea').innerHTML = String(this.area());
        document.getElementById('currentPerimeter').innerHTML = String(this.perimeter());
    }

    //General Shape methods
    area(): number {
        return this.width * this.height;
    }

    perimeter(): number {
        return this.width * 2 + this.height * 2;
    }
}
//Circle Class
class Circle extends Shape {
    constructor(radius: number) {
        super(radius, radius);
        this.name = "Circle";
        this.radius = radius;
        this.div.className = 'circle';
    }
    //Circle methods to define calculations
    area(): number {
        return Math.PI * Math.pow(this.radius, 2); 
    }
    perimeter(): number{
        return 2 * Math.PI * this.radius;      
    }
}

//Triangle Class
class Triangle extends Shape {
    constructor(height: number) {
        super(height, height);
        this.name = "Triangle";
        this.div.className = 'triangle';
        this.div.style.width = '0px';
        this.div.style.height = '0px';
        this.div.style.borderLeftWidth = this.height + 'px';
        this.div.style.borderBottomWidth = this.height + 'px';
    }
    //Triangle Methods to define claculations
    area(): number { 
        return (this.height * this.height) / 2;
    }

    perimeter(): number {  
        return 2 * this.height + (Math.sqrt(2* Math.pow(this.height, 2)));
    }
}

// //Rectangle Class
class Rectangle extends Shape {
    constructor(width: number, height: number){
        super(width, height);
        Shape.call(this, width, height);
        this.name = "Rectangle";
        this.div.className = 'rectangle';
    }
}

//Square Class
class Square extends Rectangle {
    constructor(height: number) {
        super(height, height);
        this.name = "Square";
        this.div.className = 'square';
    }
}



//event listeners
document.getElementById('circleBtn').addEventListener('click', () => {
    let radius = Number((<HTMLInputElement>document.getElementById('circle')).value);
    new Circle(radius);
})

document.getElementById('triangleBtn').addEventListener('click', () => {
    let height = Number((<HTMLInputElement>document.getElementById('triHeight')).value);
    new Triangle(height);
})

document.getElementById('rectangleBtn').addEventListener('click', () => {
    let width = Number((<HTMLInputElement>document.getElementById('recWidth')).value);
    let height = Number((<HTMLInputElement>document.getElementById('recHeight')).value);
    new Rectangle(width, height);
})

document.getElementById('squareBtn').addEventListener('click', () => {
    let height = Number((<HTMLInputElement>document.getElementById('sqSide')).value);
    new Square(height);
})