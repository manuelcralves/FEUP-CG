import { CGFobject, CGFappearance, CGFtexture } from '../../../lib/CGF.js';
import { MyCylinder } from '../../primitives/MyCylinder.js';

export class MyBeeFoot extends CGFobject {
    constructor(scene, appearance) {
        super(scene);
        this.appearance = appearance;

        this.initBuffers();   
    }

    initBuffers() {
        this.foot = new MyCylinder(this.scene, 100, 100);
    }

   display() {
//Feet (Diagonal)

    //LEFT FRONT
    this.scene.pushMatrix();
    //this.scene.translate(0, Math.sin(this.offsetBee) / 2, 0);
    this.scene.scale(0.25, 0.25, 0.25);
    this.appearance.apply();
    this.scene.translate(-1, 0, 1);
    this.scene.rotate(Math.PI / 6, 1, 0, 0);
    this.scene.scale(0.05, 0.05, 1.5);
    this.foot.display();
    this.scene.popMatrix();

    //RIGHT FRONT
    this.scene.pushMatrix();
    //this.scene.translate(0, Math.sin(this.offsetBee) / 2, 0);
    this.scene.scale(0.25, 0.25, 0.25);
    this.appearance.apply();
    this.scene.translate(-1, 0, -1);
    this.scene.rotate((5 * Math.PI) / 6, 1, 0, 0);
    this.scene.scale(0.05, 0.05, 1.5);
    this.foot.display();
    this.scene.popMatrix();

    //LEFT MIDDLE
    this.scene.pushMatrix();
    //this.scene.translate(0, Math.sin(this.offsetBee) / 2, 0);
    this.scene.scale(0.25, 0.25, 0.25);
    this.appearance.apply();
    this.scene.translate(0, 0, 1);
    this.scene.rotate(Math.PI / 6, 1, 0, 0);
    this.scene.scale(0.05, 0.05, 1.5);
    this.foot.display();
    this.scene.popMatrix();

    //RIGHT MIDDLE
    this.scene.pushMatrix();
    //this.scene.translate(0, Math.sin(this.offsetBee) / 2, 0);
    this.scene.scale(0.25, 0.25, 0.25);
    this.appearance.apply();
    this.scene.translate(0, 0, -1);
    this.scene.rotate((5 * Math.PI) / 6, 1, 0, 0);
    this.scene.scale(0.05, 0.05, 1.5);
    this.foot.display();
    this.scene.popMatrix();

    //LEFT BACK
    this.scene.pushMatrix();
    //this.scene.translate(0, Math.sin(this.offsetBee) / 2, 0);
    this.scene.scale(0.25, 0.25, 0.25);
    this.appearance.apply();
    this.scene.translate(1, 0, 1);
    this.scene.rotate(Math.PI / 6, 1, 0, 0);
    this.scene.scale(0.05, 0.05, 1.5);
    this.foot.display();
    this.scene.popMatrix();

    //RIGHT BACK
    this.scene.pushMatrix();
    //this.scene.translate(0, Math.sin(this.offsetBee) / 2, 0);
    this.scene.scale(0.25, 0.25, 0.25);
    this.appearance.apply();
    this.scene.translate(1, 0, -1);
    this.scene.rotate((5 * Math.PI) / 6, 1, 0, 0);
    this.scene.scale(0.05, 0.05, 1.5);
    this.foot.display();
    this.scene.popMatrix();

    //Feet (Vertical)

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
    this.scene.rotate(Math.PI / 2, 1, 0, 0);
    this.scene.scale(0.05, 0.05, 1);
    this.foot.display();
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
    this.scene.rotate(Math.PI / 2, 1, 0, 0);
    this.scene.scale(0.05, 0.05, 1);
    this.foot.display();
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
    this.scene.rotate(Math.PI / 2, 1, 0, 0);
    this.scene.scale(0.05, 0.05, 1);
    this.foot.display();
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
    this.scene.rotate(Math.PI / 2, 1, 0, 0);
    this.scene.scale(0.05, 0.05, 1);
    this.foot.display();
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
    this.scene.rotate(Math.PI / 2, 1, 0, 0);
    this.scene.scale(0.05, 0.05, 1);
    this.foot.display();
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
    this.scene.rotate(Math.PI / 2, 1, 0, 0);
    this.scene.scale(0.05, 0.05, 1);
    this.foot.display();
    this.scene.popMatrix();
    }
}