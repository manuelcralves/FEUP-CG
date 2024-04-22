import { CGFobject, CGFappearance } from '../../lib/CGF.js';
import { MyCylinder } from '../primitives/MyCylinder.js';

export class MyStem extends CGFobject {
    constructor(scene,slices, stacks, height, r, g, b) {
        super(scene);
        this.height = height;
        this.r = r;
        this.g = g;
        this.b = b;
        this.slices = slices;
        this.stacks = stacks;

        this.cylinders = [];

        this.rotationAngles = []; 
        const minAngle = 0; // Adjust this to change the direction of inclination
        const maxAngle = Math.PI/32; 

        for (let i = 0; i < this.height; i++) {
            this.cylinders.push(new MyCylinder(this.scene, this.slices, this.stacks));
            let angle = Math.random() * (maxAngle - minAngle) + minAngle;
            this.rotationAngles.push(angle);
        }

        this.initAppearance();
    }

    initAppearance() {
        this.appearance = new CGFappearance(this.scene);
        this.appearance.setAmbient(this.r, this.g, this.b, 1.0);
        this.appearance.setDiffuse(this.r, this.g, this.b, 1.0);
        this.appearance.setSpecular(this.r, this.g, this.b, 1.0);
        this.appearance.setShininess(10.0);
      }

    display() {
        this.appearance.apply();
        for (let i = 0; i < this.height; i++) {
            this.scene.pushMatrix();
            this.scene.rotate(this.rotationAngles[i], 0, 1, 0); 
            this.scene.translate(0, 0, i); 
            this.cylinders[i].display();
            this.scene.popMatrix();
        }
}
}