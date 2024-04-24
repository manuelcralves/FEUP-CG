import { CGFobject, CGFappearance, CGFtexture } from '../../../lib/CGF.js';
import { MyCircle } from '../../primitives/MyCircle.js';

export class MyBeeWing extends CGFobject {
    constructor(scene, appearance, offsetWing) {
        super(scene);
        this.appearance = appearance;
        offsetWing = offsetWing;

        this.initBuffers();   
    }

    initBuffers() {
        this.wing = new MyCircle(this.scene, 100, 1);
    }

   display(offsetWing) {
    //Wings

    //LEFT FRONT
    this.scene.pushMatrix();
    this.scene.scale(0.25, 0.25, 0.25);
    this.appearance.apply();
    this.scene.translate(-0.25, 2, -1);
    this.scene.rotate(Math.PI / 4 + Math.sin(offsetWing) / 8, 1, 0, 0);
    this.scene.scale(0.5, 1, 1);
    this.wing.display();
    this.scene.popMatrix();

    //RIGHT FRONT
    this.scene.pushMatrix();
    this.scene.scale(0.25, 0.25, 0.25);
    this.appearance.apply();
    this.scene.translate(-0.25, 2, 1);
    this.scene.rotate((3 * Math.PI) / 4 - Math.sin(offsetWing) / 8,1,0,0);
    this.scene.scale(0.5, 1, 1);
    this.wing.display();
    this.scene.popMatrix();

    //LEFT BACK
    this.scene.pushMatrix();
    this.scene.scale(0.25, 0.25, 0.25);
    this.appearance.apply();
    this.scene.translate(0.25, 1.75, -1);
    this.scene.rotate(Math.PI / 4 + Math.sin(offsetWing) / 8, 1, 0, 0);
    this.scene.scale(0.3, 0.7, 0.7);
    this.wing.display();
    this.scene.popMatrix();

    //RIGHT BACK
    this.scene.pushMatrix();
    this.scene.scale(0.25, 0.25, 0.25);
    this.appearance.apply();
    this.scene.translate(0.25, 1.75, 1);
    this.scene.rotate((3 * Math.PI) / 4 - Math.sin(offsetWing) / 8,1,0,0);
    this.scene.scale(0.3, 0.7, 0.7);
    this.wing.display();
    this.scene.popMatrix();
}

update(t) {
    offsetWing += this.velocityWing * t;
  }
}