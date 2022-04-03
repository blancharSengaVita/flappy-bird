import {Background} from "./Background";
import {Ground} from "./Ground";
import {Bird} from "./Bird";
import {Pipe} from "./Pipe";
import {settings} from "./settings";
import {Animation} from "./Animation";


export class Canvas {
    canvasElement: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D; //field declaration de variables
    background: Background;
    ground: Ground;
    bird: Bird;
    pipes: Pipe[];
    animation: Animation;

    constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D, animation :Animation) {
        this.canvasElement = canvasElement;
        this.ctx = ctx;
        this.pipes = [];
        this.animation = animation; //creer les varibales

        this.createPipes();


        this.background = new Background(this.canvasElement, this.ctx);
        this.ground = new Ground(this.canvasElement, this.ctx);
        this.bird = new Bird(this.canvasElement, this.ctx, this, this.animation);
    }

    private createPipes() {
        for(let i=0; i< settings.sprite.pipes.maxCount; i++) this.pipes.push(new Pipe(this.canvasElement, this.ctx, this.pipes)) ;
    }
}

