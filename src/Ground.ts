import {settings} from "./settings";

export class Ground {
    canvasElement: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    private sprite: any;
    private position: { x: number; y: number };
    constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvasElement = canvasElement;
        this.ctx = ctx;
        this.sprite = new Image();
        this.createImage();
        this.position = {
            x : settings.sprite.ground.dx,
            y : this.canvasElement.height - settings.sprite.ground.dy,
        }
    }
    update() {
        this.draw()
        this.position.x -=1
        if (this.position.x <= -(settings.sprite.ground.maxOffset - this.canvasElement.width)){
            this.position.x = 0;
        } else {
            this.position.x -=1;
        }
    }
    createImage() {
        this.sprite.src = settings.sprite.source;
        this.sprite.addEventListener("load", () => {
            this.update();
        });
    }

    private draw() {
        this.ctx.drawImage(this.sprite,settings.sprite.ground.sx, settings.sprite.ground.sy, settings.sprite.ground.sw, settings.sprite.ground.sh, this.position.x ,this.position.y,settings.sprite.ground.dw,settings.sprite.ground.dh);
    }
}
