import { CGFobject, CGFappearance } from '../../lib/CGF.js';
import { MySphere } from '../primitives/MySphere.js';

export class MyRock extends CGFobject {
  constructor(scene, slices, stacks) {
    super(scene);
    this.stacks = stacks * 2; 
    this.slices = slices;

    this.initBuffers();
    this.initAppearance();
  }

  initBuffers() {
    var max = Math.random()*10;
    var min = Math.random()*2;
    this.rock = new MySphere(this.scene, this.slices, this.stacks, false, min, max, false);
  }

  initAppearance() {
    this.appearance = new CGFappearance(this.scene);
    this.appearance.setAmbient(0.5, 0.5, 0.5, 1.0);
    this.appearance.setDiffuse(0.5, 0.5, 0.5, 1.0);
  }

  display() {
    this.appearance.apply();
    
    this.scene.pushMatrix();
    this.scene.scale(2,2,2);
    this.rock.display();
    this.scene.popMatrix();
  }
}