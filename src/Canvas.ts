import {Background} from "./Background";
import {Ground} from "./Ground";
import {Bird} from "./Bird";
import {Pipe} from "./Pipe";


export class Canvas {
    canvasElement: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D; //field declaration de variables
    background: Background;
    ground: Ground;
    bird: Bird;
    pipe: Pipe;

    constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvasElement = canvasElement; //creer les varibales
        this.ctx = ctx;
        this.background = new Background(canvasElement, ctx);
        this.ground = new Ground(canvasElement, ctx);
        this.bird = new Bird(canvasElement, ctx);
        this.pipe = new Pipe(canvasElement, ctx);
    }
}

