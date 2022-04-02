import {settings} from "./settings";

export class Ground {
    canvasElement: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    private sprite: any;
    constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvasElement = canvasElement;
        this.ctx = ctx;
        this.sprite = new Image();
        this.createImage();
    }


    update() {
        this.draw()
    }
    createImage() {
        this.sprite.src = "./img/sprite.png";
        this.sprite.addEventListener("load", () => {
            this.update();
        });
    }

    private draw() {
        this.ctx.drawImage(this.sprite,settings.sprite.ground.sx, settings.sprite.ground.sy, settings.sprite.ground.sw, settings.sprite.ground.sh, settings.sprite.ground.dx ,this.canvasElement.height - settings.sprite.ground.dy,settings.sprite.ground.dw,settings.sprite.ground.dh);
    }
}
