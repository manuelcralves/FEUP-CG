import { CGFobject, CGFappearance, CGFtexture } from '../../lib/CGF.js';
import { MySphere } from '../primitives/MySphere.js';

export class MyPollen extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
        this.initAppearance();
    }

    initBuffers() {
        this.pollen = new MySphere(this.scene, 100, 50);
    }

    initAppearance() {
        this.pollenAppearance = new CGFappearance(this.scene);
        this.pollenAppearance.setAmbient(1.0, 0.5, 0.0, 1.0); 
        this.pollenAppearance.setDiffuse(1.0, 0.5, 0.0, 1.0);
        this.pollenTexture = new CGFtexture(this.scene, "images/pollen.jpg");
        this.pollenAppearance.setTexture(this.pollenTexture);
        this.pollenAppearance.setTextureWrap('MIRROR', 'MIRROR');
    }

    display() {
        this.pollenAppearance.apply();

        this.scene.pushMatrix();
        this.scene.scale(0.05,0.05,0.05);  
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.scale(1, 1.5, 1); 
        this.pollen.display();
        this.scene.popMatrix();
    }
}