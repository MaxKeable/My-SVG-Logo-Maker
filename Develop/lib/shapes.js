class Shape{
    // Defines a class called Shape which has a constructor intializing the color of the shape and sets the 'color' value.
    
        constructor(){
            this.color=''
        }
        setColor(color){
            this.color=(color);
        }
    }
    // Creates Circle class that adds to Shape class and renders an SVG Circle with position, size, and fill color based on the color set.
    class Circle extends Shape{
        render(){
            return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>`
        }
    }
    // Creates a Square class that adds to 'Shape' and renders an SVG Square it's fill color based on the current color set in 'color'. 
    class Square extends Shape{
        render(){
            return `<rect x="50" height="200" width="200" fill="${this.color}"/>`
        }
    }
    // Creates a Triangle class that extends Shape and renders an SVG using position, size, and fill color. 
    class Triangle extends Shape{
        render(){
            return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"/>`
        }
    };
    
    module.exports = {Circle, Square, Triangle}