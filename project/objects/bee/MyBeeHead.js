import { CGFobject, CGFappearance, CGFtexture } from '../../../lib/CGF.js';
import { MySphere } from '../../primitives/MySphere.js';

export class MyBeeHead extends CGFobject {
    constructor(scene, appearance) {
        super(scene);
        this.appearance = appearance;

        this.initBuffers();   
    }

    initBuffers() {
        this.head = new MySphere(this.scene,100,100);
    }

   display() {
    this.scene.pushMatrix();
    this.appearance.apply();
    //this.scene.translate(0, Math.sin(this.offsetBee) / 2, 0);
    this.scene.scale(0.25, 0.25, 0.25);
    this.scene.translate(-3, 0.5, 0);
    this.scene.scale(1.5, 1.5, 1.5);
    this.head.display();
    this.scene.popMatrix();
    }
}