import {Ball} from "../components/Ball";

export class BallCanvas {
    private canvasElement: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private ball: Ball;


    constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvasElement = canvasElement;
        this.ctx = ctx;

        this.ball = new Ball(this.canvasElement, this.ctx);

        this.resizeCanvas()
        this.addEventListeners()
    }

    resizeCanvas() {
        this.canvasElement.width = window.innerWidth;
        this.canvasElement.height = window.innerHeight;
        this.ball.draw();
    }

    addEventListeners() {
        addEventListener('resize', ()=>{
            this.resizeCanvas();
        })

    }
}

