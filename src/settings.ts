export const settings = {
    sprite : {
        source : './img/sprite.png',
        sky : {
            day: {
                sx:0,
                sy:0,
                sw:228,
                sh: 511,
                dx:0,
                dy:0,
                dw:290,
                dh:511,
            },
            night : {
                sx:300,
                sy:0,
                sw:228,
                sh: 511,
                dx:0,
                dy:0,
                dw:228,
                dh:511,
            }
        },
        ground : {
                sx:(584),
                sy:0,
                sw:336,
                sh: 112,
                dx:0,
                dy:112,
                dw:336,
                dh:112,
                maxOffset :322,
        },
        birds : {
            x: 20,
            y: 200,
            sx: [6,62,118],
            sy:982,
            sw:34,
            sh:24,
            dx:34,
            dy:24,
            dw:34,
            dh:24,
            maxFallSpeed: 11,
            maxAnimationFrame: 2,
            animationSpeed : 7,
            maxRotationAngle:90,
        }
    }
}