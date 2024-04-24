import { CGFobject, CGFappearance, CGFtexture } from '../../../lib/CGF.js';
import { MySphere } from '../../primitives/MySphere.js';

export class MyBeeAntennaTop extends CGFobject {
    constructor(scene, appearance) {
        super(scene);
        this.appearance = appearance;

        this.initBuffers();   
    }

    initBuffers() {
        this.antennaTop = new MySphere(this.scene, 100, 100);
    }

   display() {
    //Antenna Tops

    //LEFT
    this.scene.pushMatrix();
    //this.scene.translate(0, Math.sin(this.offsetBee) / 2, 0);
    this.scene.scale(0.25, 0.25, 0.25);
    this.appearance.apply();
    this.scene.translate(-4.15, 2.65, 1.25);
    this.scene.rotate(Math.PI / 6, 0, 0, 1);
    this.scene.rotate(Math.PI / 6, 1, 0, 0);
    this.scene.scale(0.1, 0.1, 0.1);
    this.antennaTop.display();
    this.scene.popMatrix();

    //RIGHT
    this.scene.pushMatrix();
    //this.scene.translate(0, Math.sin(this.offsetBee) / 2, 0);
    this.scene.scale(0.25, 0.25, 0.25);
    this.appearance.apply();
    this.scene.translate(-4.15, 2.65, -1.25);
    this.scene.rotate(Math.PI / 6, 0, 0, 1);
    this.scene.rotate(Math.PI / 6, 1, 0, 0);
    this.scene.scale(0.1, 0.1, 0.1);
    this.antennaTop.display();
    this.scene.popMatrix();
    }
}