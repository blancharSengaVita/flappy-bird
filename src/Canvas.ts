import {Background} from "./Background";
import {Ground} from "./Ground";
import {Bird} from "./Bird";
import {Pipe} from "./Pipe";
import {settings} from "./settings";


export class Canvas {
    canvasElement: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D; //field declaration de variables
    background: Background;
    ground: Ground;
    bird: Bird;
    pipes: Pipe[];

    constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvasElement = canvasElement; //creer les varibales
        this.ctx = ctx;
        this.pipes = [];

        this.createPipes();


        this.background = new Background(canvasElement, ctx);
        this.ground = new Ground(canvasElement, ctx);
        this.bird = new Bird(canvasElement, ctx);
    }

    private createPipes() {
        for(let i=0; i< settings.sprite.pipes.maxCount; i++) this.pipes.push(new Pipe(this.canvasElement, this.ctx, this.pipes)) ;
    }
}

