import { CGFobject, CGFappearance, CGFtexture } from '../../../lib/CGF.js';
import { MySphere } from '../../primitives/MySphere.js'; 

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

    this.texture = new CGFtexture(this.scene, 'images/receptacle.jpg');
    this.appearance.setTexture(this.texture);
    this.appearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
  }

  display() {
    this.appearance.apply();

    this.scene.pushMatrix();
    this.receptacle.display();
    this.scene.popMatrix();
  }
}