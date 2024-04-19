import { CGFobject, CGFappearance } from '../../lib/CGF.js';
import { MySphere } from './MySphere.js'; 

export class MyReceptacle extends CGFobject {
  
  constructor(scene, r, g, b) {
    super(scene);

    this.r = r;
    this.g = g;
    this.b = b;

    this.initBuffers();
    this.initAppearance();
  }

  initBuffers() {
    this.receptacle = new MySphere(this.scene, 100, 50); 
  }

  initAppearance() {
    this.appearance = new CGFappearance(this.scene);
    this.appearance.setAmbient(this.r, this.g, this.b, 1.0); 
    this.appearance.setDiffuse(this.r, this.g, this.b, 1.0); 
  }

  display() {
    this.appearance.apply();

    this.scene.pushMatrix();
    this.scene.scale(1,0.5,1);
    this.receptacle.display();
    this.scene.popMatrix();
  }
}