import { CGFobject, CGFappearance } from '../../lib/CGF.js';
import { MyTriangle } from '../primitives/MyTriangle.js'; 

export class MyPetal extends CGFobject {
  
  constructor(scene, r, g, b) {
    super(scene);
    this.r = r;
    this.g = g;
    this.b = b;

    this.initBuffers();
    this.initAppearance();
  }

  initBuffers() {
    this.petal = new MyTriangle(this.scene); 
  }

  initAppearance() {
    this.appearance = new CGFappearance(this.scene);
    this.appearance.setAmbient(this.r, this.g, this.b, 1.0);     
    this.appearance.setDiffuse(this.r, this.g, this.b, 1.0); 
  }

  display() {
    this.appearance.apply();
    
    this.scene.pushMatrix();
    this.scene.translate(2,2,0)
    this.petal.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(2,2,0)
    this.scene.scale(-1,-1, 1);
    this.petal.display();
    this.scene.popMatrix();
  }
}