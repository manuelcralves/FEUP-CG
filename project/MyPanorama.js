import { CGFobject, CGFappearance } from '../../lib/CGF.js';
import { MySphere } from './MySphere.js'; 

export class MyPanorama extends CGFobject {
  
  constructor(scene, texture) {
    super(scene);
    
    this.texture = texture;
    this.panoramaAppearance = new CGFappearance(this.scene);
    this.panoramaAppearance.setEmission(1,1,1,1);
    this.panoramaAppearance.setTexture(this.texture);

    this.initBuffers();
  }

  initBuffers() {
   
    this.panorama = new MySphere(this.scene, 100, 50, true); 
  }

  display() {
    this.scene.pushMatrix();
    this.panoramaAppearance.apply();
    this.scene.translate(...this.scene.camera.position);
    this.scene.scale(200,200,200);
    
    this.panorama.display();
    this.scene.popMatrix();
  }
}