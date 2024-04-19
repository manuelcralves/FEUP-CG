import { CGFobject, CGFappearance } from '../../lib/CGF.js';
import { MyCylinder } from './MyCylinder.js';

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
        for (let i = 0; i < this.height; i++) {
            this.cylinders.push(new MyCylinder(this.scene, this.slices, this.stacks));
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
            this.scene.translate(0, 0, i); 
            this.cylinders[i].display();
            this.scene.popMatrix();
        }
}
}