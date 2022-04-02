import {Canvas} from "./Canvas";

class Main {
    canvasElement: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    constructor() {
        this.canvasElement = document.getElementById("my-canvas") as HTMLCanvasElement;
        this.ctx = this.canvasElement.getContext("2d") as CanvasRenderingContext2D;
        this.Canvas = new Canvas(this.canvasElement, this.ctx);

    }
}

new Main();