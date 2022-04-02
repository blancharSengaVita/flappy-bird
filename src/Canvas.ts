export class Canvas {
    private canvasElement: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D; //field declaration de variables

    constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvasElement = canvasElement; //creer les varibales
        this.ctx = ctx;
    }
}
