import {settings} from "./settings";

export class Pipe {
    canvasElement : HTMLCanvasElement;
    ctx : CanvasRenderingContext2D;
    image: HTMLImageElement;
    positionTop: { x: number; y: number };
    positionBottom: { x: number; y: number };
    startX: number;
    start: boolean;
    pipes: Pipe[];

    constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D, pipes: Pipe[]) {
        this.canvasElement = canvasElement;
        this.ctx = ctx;
        this.image = new Image();
        this.startX = this.canvasElement.width
        this.pipes = pipes;
        this.positionTop = {
            x: this.pipes.length ===0 ? this.startX : this.pipes[this.pipes.length-1].positionTop.x + settings.sprite.pipes.gap.h,
            y:-Math.floor(Math.random() * settings.sprite.pipes.top.dh/2)}
        this.positionBottom = {x:this.positionTop.x, y:this.positionTop.y + settings.sprite.pipes.top.dh + settings.sprite.pipes.gap.v};
        this.start = false;

        this.addEventlistener();
        this.createImage();
    }

    private createImage() {
        this.image.src = settings.sprite.source;
        this.update();
    }

    update() {
        if(this.start){
            this.positionTop.x--;
            this.positionBottom.x = this.positionTop.x;
        }
        if (this.positionTop.x < -settings.sprite.pipes.top.dw){
            this.positionTop = {
                x: this.startX,
                y:-Math.floor(Math.random() * settings.sprite.pipes.top.dh/2)}
            this.positionBottom = {x:this.positionTop.x, y:this.positionTop.y + settings.sprite.pipes.top.dh + settings.sprite.pipes.gap.v};
        }
        this.draw();
    }

    private draw() {
        this.ctx.drawImage(
            this.image,
            settings.sprite.pipes.top.sx,
            settings.sprite.pipes.top.sy,
            settings.sprite.pipes.top.sw,
            settings.sprite.pipes.top.sh,
            this.positionTop.x,
            this.positionTop.y,
            settings.sprite.pipes.top.dw,
            settings.sprite.pipes.top.dh,)

        this.ctx.drawImage(
            this.image,
            settings.sprite.pipes.bottom.sx,
            settings.sprite.pipes.bottom.sy,
            settings.sprite.pipes.bottom.sw,
            settings.sprite.pipes.bottom.sh,
            this.positionBottom.x,
            this.positionBottom.y,
            settings.sprite.pipes.bottom.dw,
            settings.sprite.pipes.bottom.dh,);
    }
    addEventlistener(){
        window.addEventListener("keydown", (key:KeyboardEvent)=>{
            if(key.code === "Space") this.start = true;
        })
    }
}