const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d'); //c stands for context

canvas.width = innerWidth;
canvas.height = innerHeight;

class Player {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }

    draw() {
        c.beginPath()
        /*the arc function draws an arc! the 0 and Math.PI * 2 are starting
        and ending angles, where Math.PI * 2 just equals 360 degrees. The false
        is asking to draw counterclockwise, which we are not.
        */
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fill()
    }
}

const player = new Player(100, 100, 30, 'blue')

player.draw();