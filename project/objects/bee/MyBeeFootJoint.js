import { CGFobject, CGFappearance, CGFtexture } from '../../../lib/CGF.js';
import { MySphere } from '../../primitives/MySphere.js';

export class MyBeeFootJoint extends CGFobject {
    constructor(scene, appearance) {
        super(scene);
        this.appearance = appearance;

        this.initBuffers();   
    }

    initBuffers() {
        this.footJoint = new MySphere(this.scene, 100, 100);
    }

   display() {
//Feet Joints

    //LEFT FRONT
    this.scene.pushMatrix();
    //this.scene.translate(0, Math.sin(this.offsetBee) / 2, 0);
    this.scene.scale(0.25, 0.25, 0.25);
    this.appearance.apply();
    this.scene.translate(
      -1,
      0 - 1.5 * Math.sin(Math.PI / 6),
      1 + 1.5 * Math.cos(Math.PI / 6)
    );
    this.scene.rotate(Math.PI / 6, 1, 0, 0);
    this.scene.scale(0.1, 0.1, 0.1);
    this.footJoint.display();
    this.scene.popMatrix();

    //RIGHT FRONT
    this.scene.pushMatrix();
    //this.scene.translate(0, Math.sin(this.offsetBee) / 2, 0);
    this.scene.scale(0.25, 0.25, 0.25);
    this.appearance.apply();
    this.scene.translate(
      -1,
      0 - 1.5 * Math.sin((5 * Math.PI) / 6),
      -1 + 1.5 * Math.cos((5 * Math.PI) / 6)
    );
    this.scene.rotate((5 * Math.PI) / 6, 1, 0, 0);
    this.scene.scale(0.1, 0.1, 0.1);
    this.footJoint.display();
    this.scene.popMatrix();

    //LEFT MIDDLE
    this.scene.pushMatrix();
    //this.scene.translate(0, Math.sin(this.offsetBee) / 2, 0);
    this.scene.scale(0.25, 0.25, 0.25);
    this.appearance.apply();
    this.scene.translate(
      0,
      0 - 1.5 * Math.sin(Math.PI / 6),
      1 + 1.5 * Math.cos(Math.PI / 6)
    );
    this.scene.rotate(Math.PI / 6, 1, 0, 0);
    this.scene.scale(0.1, 0.1, 0.1);
    this.footJoint.display();
    this.scene.popMatrix();

    //RIGHT MIDDLE
    this.scene.pushMatrix();
    //this.scene.translate(0, Math.sin(this.offsetBee) / 2, 0);
    this.scene.scale(0.25, 0.25, 0.25);
    this.appearance.apply();
    this.scene.translate(
      0,
      0 - 1.5 * Math.sin((5 * Math.PI) / 6),
      -1 + 1.5 * Math.cos((5 * Math.PI) / 6)
    );
    this.scene.rotate((5 * Math.PI) / 6, 1, 0, 0);
    this.scene.scale(0.1, 0.1, 0.1);
    this.footJoint.display();
    this.scene.popMatrix();

    //LEFT BACK
    this.scene.pushMatrix();
    //this.scene.translate(0, Math.sin(this.offsetBee) / 2, 0);
    this.scene.scale(0.25, 0.25, 0.25);
    this.appearance.apply();
    this.scene.translate(
      1,
      0 - 1.5 * Math.sin(Math.PI / 6),
      1 + 1.5 * Math.cos(Math.PI / 6)
    );
    this.scene.rotate(Math.PI / 6, 1, 0, 0);
    this.scene.scale(0.1, 0.1, 0.1);
    this.footJoint.display();
    this.scene.popMatrix();

    //RIGHT BACK
    this.scene.pushMatrix();
    //this.scene.translate(0, Math.sin(this.offsetBee) / 2, 0);
    this.scene.scale(0.25, 0.25, 0.25);
    this.appearance.apply();
    this.scene.translate(
      1,
      0 - 1.5 * Math.sin((5 * Math.PI) / 6),
      -1 + 1.5 * Math.cos((5 * Math.PI) / 6)
    );
    this.scene.rotate((5 * Math.PI) / 6, 1, 0, 0);
    this.scene.scale(0.1, 0.1, 0.1);
    this.footJoint.display();
    this.scene.popMatrix();
}
}