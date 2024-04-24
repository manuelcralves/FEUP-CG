import { CGFobject, CGFappearance, CGFtexture } from '../../../lib/CGF.js';
import { MyCylinder } from '../../primitives/MyCylinder.js';

export class MyBeeAntenna extends CGFobject {
    constructor(scene, appearance) {
        super(scene);
        this.appearance = appearance;

        this.initBuffers();   
    }

    initBuffers() {
        this.antenna = new MyCylinder(this.scene, 100, 100);
    }

   display() {

    //LEFT
    this.scene.pushMatrix();
    //this.scene.translate(0, Math.sin(this.offsetBee) / 2, 0);
    this.scene.scale(0.25, 0.25, 0.25);
    this.appearance.apply();
    this.scene.translate(-3.5, 1.5, 0.5);
    this.scene.rotate(Math.PI / 6, 0, 0, 1);
    this.scene.rotate(Math.PI / 6, 1, 0, 0);
    this.scene.scale(0.05, 1.5, 0.05);
    this.scene.rotate(-Math.PI / 2, 1, 0, 0);
    this.antenna.display();
    this.scene.popMatrix();

    //RIGHT
    this.scene.pushMatrix();
    //this.scene.translate(0, Math.sin(this.offsetBee) / 2, 0);
    this.scene.scale(0.25, 0.25, 0.25);
    this.appearance.apply();
    this.scene.translate(-3.5, 1.5, -0.5);
    this.scene.rotate(Math.PI / 6, 0, 0, 1);
    this.scene.rotate(-Math.PI / 6, 1, 0, 0);
    this.scene.scale(0.05, 1.5, 0.05);
    this.scene.rotate(-Math.PI / 2, 1, 0, 0);
    this.antenna.display();
    this.scene.popMatrix();
    }
}