import {settings} from "../settings";

export class Ball {
    private canvasElement: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private position: { x: number; y: number };

    constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvasElement = canvasElement;
        this.ctx = ctx;
        this.position = {
            x: settings.ball.initialPositionX,
            y: settings.ball.initialPositionY
        }

        this.draw();
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = 'red';
        this.ctx.arc(this.position.x, this.position.y, settings.ball.radius, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
    }
}