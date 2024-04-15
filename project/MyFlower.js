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
    this.stem = new MyStem(this.scene, 100, 100);
    this.petal1 = new MyPetal(this.scene);
    this.petal2 = new MyPetal(this.scene);
    this.petal3 = new MyPetal(this.scene);
    this.petal4 = new MyPetal(this.scene);
    this.petal5 = new MyPetal(this.scene);
  }

  display() {
    this.scene.pushMatrix();
    this.scene.translate(0,15,0);
    this.receptacle.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.rotate(-Math.PI/2 ,1,0,0);
    this.scene.scale(2,2,3);
    this.stem.display();
    this.scene.popMatrix();
    
    this.scene.pushMatrix();
    this.scene.translate(6,18,0);
    this.scene.scale(2,2,2);
    this.petal1.display();
    this.scene.popMatrix();
  }
}