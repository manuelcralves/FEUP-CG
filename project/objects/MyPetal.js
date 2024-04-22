import { CGFobject, CGFappearance } from '../../lib/CGF.js';
import { MyTriangle } from '../primitives/MyTriangle.js'; 

export class MyPetal extends CGFobject {
  
  constructor(scene, r, g, b, angle) {
    super(scene);
    this.r = r;
    this.g = g;
    this.b = b;
    this.angle = angle;

    this.initBuffers();
    this.initAppearance();
  }

  initBuffers() {
    this.traingle = new MyTriangle(this.scene); 
  }

  initAppearance() {
    this.appearance = new CGFappearance(this.scene);
    this.appearance.setAmbient(this.r, this.g, this.b, 1.0);     
    this.appearance.setDiffuse(this.r, this.g, this.b, 1.0); 
  }

  display() {
  this.appearance.apply();
  
  this.scene.pushMatrix();
  this.scene.translate(2,2,0); 
  this.traingle.display();
  this.scene.popMatrix();

  this.scene.pushMatrix();
  this.scene.translate(2,2,0); 
  this.scene.rotate(this.angle, -1, 1, 0);
  this.scene.rotate(Math.PI, 1, -1, 0);
  this.traingle.display();
  this.scene.popMatrix();
}
}