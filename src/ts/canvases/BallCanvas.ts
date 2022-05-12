import {Ball} from "../components/Ball";

export class BallCanvas {
    private canvasElement: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private ball: Ball;


    constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvasElement = canvasElement;
        this.ctx = ctx;

        this.resizeCanvas()

        this.ball = new Ball(this.canvasElement, this.ctx);
    }

    resizeCanvas() {
        this.canvasElement.width = window.innerWidth;
        this.canvasElement.height = window.innerHeight;
    }
}

