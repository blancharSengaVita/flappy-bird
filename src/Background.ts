import {settings} from "./settings";

export class Background {
    canvasElement: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    sprite: HTMLImageElement;

    constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvasElement = canvasElement;
        this.ctx = ctx;
        //on créer une instance image
        this.sprite = new Image();
        this.createImage();
        this.draw();
   }

    draw() {
        this.ctx.drawImage(this.sprite,settings.sprite.sky.night.sx, settings.sprite.sky.night.sy, settings.sprite.sky.night.sw, settings.sprite.sky.night.sh, settings.sprite.sky.night.dx, settings.sprite.sky.night.dy,settings.sprite.sky.night.dw,settings.sprite.sky.night.dh);
    }
    createImage() {
        this.sprite.src = settings.sprite.source;
        this.sprite.addEventListener("load",()=>{
            this.draw();
        });
    }
}