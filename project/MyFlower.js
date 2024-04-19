import { CGFobject, CGFappearance } from '../../lib/CGF.js';
import { MyStem } from './MyStem.js';
import { MyReceptacle } from './MyReceptacle.js';
import { MyPetal } from './MyPetal.js';

export class MyFlower extends CGFobject {
  
  constructor(scene) {
    super(scene);

    this.initBuffers();
  }

  initBuffers() {
    this.receptacle = new MyReceptacle(this.scene);
    this.stem = new MyStem(this.scene, 100, 50);
    this.petal = new MyPetal(this.scene);
  }

  display() {
  this.scene.pushMatrix();
  this.scene.translate(0,15,0);
  this.scene.scale(0.5,0.5,0.5);
  this.receptacle.display();
  this.scene.popMatrix();

  this.scene.pushMatrix();
  this.scene.rotate(-Math.PI/2 ,1,0,0);
  this.scene.scale(0.5,0.5,3);
  this.stem.display();
  this.scene.popMatrix();

  for(let i = 0; i < 6; i++) {
    this.scene.pushMatrix();
    this.scene.rotate(i * 2 * Math.PI / 6, 0, 1, 0);
    this.scene.translate(0, 14, 0); 
    this.scene.rotate(Math.PI / 4, 1, 0, 0);
    this.petal.display();
    this.scene.popMatrix();
  }
}
}