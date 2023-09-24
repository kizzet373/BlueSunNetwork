const sketch = function(p) {
    const Planet = require('@/assets/javascript/planet.js'); 
    let sun, canvas, sunTexture, textures={sunTexture,moonTexture,planetTextures:[]}, moonTexture;

    p.setup = () => {
        textures.sunTexture = p.loadImage(require('@/assets/images/p5/sun 2.jpg'));
        textures.planetTextures[0] = p.loadImage(require('@/assets/images/p5/mars.jpg'));
        textures.planetTextures[1] = p.loadImage(require('@/assets/images/p5/earth.jpg'));
        textures.planetTextures[2] = p.loadImage(require('@/assets/images/p5/mercury.jpg'));
        textures.planetTextures[3] = p.loadImage(require('@/assets/images/p5/planet2.png'));
        textures.moonTexture = p.loadImage(require('@/assets/images/p5/moon.jpg'));

        canvas = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
        canvas.position(0,0)
        canvas.style('z-index','-1')
        canvas.style('position','fixed')

        sun = new Planet(150, 0, 0, 0, textures.sunTexture, textures, p, "sun");
        sun.spawnMoons(4, 1);
    }

    p.draw = () => {
        p.background(0,0,0,0);
        p.ambientLight(255,255,255,50);
        p.pointLight(255, 255, 255, 0, 0, 0);
        sun.show();
        sun.orbit();
    }

    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    }
}

module.exports = sketch;