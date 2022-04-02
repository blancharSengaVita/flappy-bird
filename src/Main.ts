class Main {
    canvasElement: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    constructor() {
        this.canvasElement = document.getElementById("my-canvas") as HTMLCanvasElement;
        this.ctx = this.canvasElement.getContext("2d") as CanvasRenderingContext2D;
    }
}

new Main();