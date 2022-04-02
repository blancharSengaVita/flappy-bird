export class Background {
    canvasElement: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    sprite: HTMLImageElement;

    constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvasElement = canvasElement;
        this.ctx = ctx;
        this.sprite = new Image();
        this.createImage()
    }


    private update() {
        this.draw()
    }

    private draw() {
        this.ctx.drawImage(this.sprite, 0, 0, 228,511, 0, 0, 228, 511);
    }
    private createImage() {
        this.sprite.src = "./img/sprite.png";
        this.sprite.addEventListener("load",()=>{
            this.draw();
        });

    }
}