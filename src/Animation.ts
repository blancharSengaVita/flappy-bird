import { Canvas } from "./Canvas";
import {Pipe} from "./Pipe";

export class Animation {
    canvasElement: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    canvas: Canvas;
    private going: boolean;

    constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvasElement = canvasElement;
        this.ctx = ctx;
        this.canvas = new Canvas(this.canvasElement, this.ctx, this);
        this.going = true;
        this.animate();
    }
    animate(){
        if(this.going){
            this.ctx.clearRect(0,0, this.canvasElement.width, this.canvasElement.height)
            this.canvas.background.draw();
            this.canvas.ground.update();
            this.canvas.bird.update();
            this.canvas.pipes.forEach((pipe : Pipe)=>pipe.update())
            requestAnimationFrame(()=> this.animate()) //relance tous les 60 par secondeTR
        }
    }
    cancelAnimation(){
        this.going = false;
    }

}