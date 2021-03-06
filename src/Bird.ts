import {settings} from "./settings";
import {Canvas} from "./Canvas";
import {Pipe} from "./Pipe";
import {Animation} from "./Animation";

export class Bird {
    canvasElement: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    image: HTMLImageElement;
    frame: number;
    counter: number;
    rotationAngle: number;
    position: { x: number, y: number };
    fallSpeed: number;
    canvas: Canvas;
    animation: Animation;

    constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D, canvas: Canvas, animation: Animation) {
        this.canvasElement = canvasElement;
        this.ctx = ctx;
        this.canvas = canvas;
        this.animation = animation;
        this.image = new Image();
        this.frame = 0;
        this.counter = 0;
        this.rotationAngle = 0;
        this.position = {x: settings.sprite.birds.x, y: settings.sprite.birds.y};
        this.fallSpeed = 0;
        this.addEventlistener();
        this.createImage();

    }

    createImage() {
        this.image.src = settings.sprite.source;
        this.update();
    }

    update() {
        this.counter++

        if (this.counter % settings.sprite.birds.animationSpeed === 0) {
            this.frame = this.frame < settings.sprite.birds.maxAnimationFrame ? this.frame + 1 : 0;
        }

        if(this.fallSpeed < settings.sprite.birds.maxFallSpeed){
            this.fallSpeed++
        }

        this.rotationAngle = this.fallSpeed / settings.sprite.birds.maxFallSpeed;
        this.position.y += this.fallSpeed;

        this.draw();
        this.CollidingWithGround();
        this.collidingWithPipes()

    }

    draw() {
        this.ctx.save();

        this.ctx.translate(this.position.x, this.position.y);
        this.ctx.rotate(this.rotationAngle);

        this.ctx.drawImage(
            this.image,
            settings.sprite.birds.sx[this.frame],
            settings.sprite.birds.sy,
            settings.sprite.birds.sw,
            settings.sprite.birds.sh,
            -settings.sprite.birds.dx / 2,
            -settings.sprite.birds.dy / 2,
            settings.sprite.birds.dw,
            settings.sprite.birds.dh);

        this.ctx.restore();
    }

    CollidingWithGround() {
        if (this.position.y + settings.sprite.birds.dw/2 >= this.canvasElement.height - settings.sprite.ground.dh) {
            this.goUp();
        }
    }

    goUp(){
        this.fallSpeed = -settings.sprite.birds.maxFallSpeed;
    }

    addEventlistener(){
        window.addEventListener("keydown", (key:KeyboardEvent)=>{
            if(key.code === "Space") this.goUp();
        })
    }

    private collidingWithPipes() {
        this.canvas.pipes.forEach((pipe : Pipe)=>{
            if (this.position.x + settings.sprite.birds.dw / 2 > pipe.positionTop.x && this.position.x - settings.sprite.birds.dw /2 < pipe.positionTop.x + settings.sprite.pipes.top.dw) {
                if ((this.position.y - settings.sprite.birds.dh / 2) < pipe.positionTop.y + settings.sprite.pipes.top.dh || (this.position.y + settings.sprite.birds.dh/2) > pipe.positionBottom.y){
                    this.animation.cancelAnimation();
                }
            }
        })
    }
}