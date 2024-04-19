import { CGFobject, CGFappearance } from '../../lib/CGF.js';
import { MySphere } from './MySphere.js'; 

export class MyReceptacle extends CGFobject {
  
  constructor(scene) {
    super(scene);

    this.initBuffers();
    this.initAppearance();
  }

  initBuffers() {
    this.receptacle = new MySphere(this.scene, 100, 50); 
  }

  initAppearance() {
    this.appearance = new CGFappearance(this.scene);
    this.appearance.setAmbient(1.0, 1.0, 0.0, 1.0); 
    this.appearance.setDiffuse(1.0, 1.0, 0.0, 1.0); 
  }

  display() {
    this.appearance.apply();
    
    this.scene.pushMatrix();
    this.scene.scale(3,3,3);
    this.receptacle.display();
    this.scene.popMatrix();
  }
}