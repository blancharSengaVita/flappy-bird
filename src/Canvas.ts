import {Background} from "./Background";

export class Canvas {
    canvasElement: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D; //field declaration de variables
    background: Background;

    constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvasElement = canvasElement; //creer les varibales
        this.ctx = ctx;
        this.background = new Background(canvasElement, ctx);
    }
}
