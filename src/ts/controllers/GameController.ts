import {BallCanvas} from "../canvases/BallCanvas";

export class GameController {
    private canvasElement: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private ballCanvas: BallCanvas;

    constructor() {
        this.canvasElement = document.getElementById("ball-canvas") as HTMLCanvasElement;
        this.ctx = this.canvasElement.getContext("2d") as CanvasRenderingContext2D;

        this.ballCanvas = new BallCanvas(this.canvasElement, this.ctx);
    }

}