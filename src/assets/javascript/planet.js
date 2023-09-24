const p5 = require('p5/lib/p5.js'); 

class Planet {
    constructor(_r, _rs, _d, _o, _img, _textures, _p, _type) {
      //this is the p5 instance
      this.p = _p;
      let p = this.p;

      this.type = _type;
      this.textures = _textures;      
      this.vector = p5.Vector.random3D();
      this.radius = _r;
      this.distance = _d;
      this.vector.mult(this.distance);
      this.angle = p.random(p.TWO_PI);
      this.orbitSpeed = _o;
      this.rotationSpeed = _rs;
      this.planets = null;
  
      // Since there is no direct equivalent of PShape in p.js, we have
      // to save the texture for later use instead of creating a globe.
      this.texture = _img;
    }
  
    orbit() {
      this.angle = this.angle + this.orbitSpeed;
      if (this.planets != null) {
        for (let i = 0; i < this.planets.length; i++) {
          this.planets[i].orbit();
        }
      }
    }
  
    spawnMoons(total, level) {
      let p = this.p;
      this.planets = [];
      for (let i = 0; i < total; i++) {
        let moonRadius = p.random(this.radius / 6, this.radius / 4);
        let moonDistance = this.type == "sun" ? p.random(this.radius + moonRadius * 1.5, (this.radius + moonRadius) * 2.5) : this.radius * 1.5;
        let moonOrbitSpeed = p.random(-0.01, 0.01) * level;
        let moonRotationSpeed = p.random(1,2);
        let texture = level == 1 ? this.textures.planetTextures[p.int(p.random(0, this.textures.planetTextures.length))] : this.textures.moonTexture;
        this.planets[i] = new Planet(moonRadius, moonRotationSpeed, moonDistance, moonOrbitSpeed, texture, this.textures, this.p, "planet");
        if (level < 2) {
          let num = p.int(p.random(0, 3));
          this.planets[i].spawnMoons(num, level + 1);
        }
      }
    }
  
    show() {
      let p = this.p;      
      p.push();
      p.noStroke();
      let v2 = p.createVector(1, 0, 1);
      let perp = this.vector.cross(v2);
        // Rotation around a 0-length axis doesn't work in p5.js, so don't do that.
        if (perp.x != 0 || perp.y != 0 || perp.z != 0) {          
          p.rotate(this.angle, perp);
          p.rotate(p.millis()/1000,this.vector);
        }
        else{
          //rotates the sun on the y axis
          p.rotate(p.millis()/8000,p.createVector(0,1,0));
        }
                
        p.translate(this.vector.x, this.vector.y, this.vector.z);                
        p.noStroke();
        p.fill(255);
        // Since we don't have a PShape, we draw a textured sphere instead.
        //if(this.type == "sun") 
          //p.drawingContext.shadowColor = 'white'
        p.texture(this.texture);   
        
               
        
        p.sphere(this.radius);
        //ellipse(0, 0, this.radius * 2, this.radius * 2);
        if (this.planets != null) {
            for (let i = 0; i < this.planets.length; i++) {
                this.planets[i].show();
            }
        }
        p.pop();
    }
}   

  module.exports = Planet;