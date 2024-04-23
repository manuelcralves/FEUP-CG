import { CGFobject, CGFappearance } from '../../lib/CGF.js';
import { MyCylinder } from '../primitives/MyCylinder.js';
import { MyLeaf } from './MyLeaf.js';

export class MyStem extends CGFobject {
    constructor(scene,slices, stacks, height, r, g, b, radiusStem) {
        super(scene);
        this.height = height;
        this.r = r;
        this.g = g;
        this.b = b;
        this.slices = slices;
        this.stacks = stacks;
        this.radiusStem = radiusStem;

        this.cylinders = [];

        this.rotationAngles = []; 
        const minAngle = -Math.PI/64; // Adjust this to change the direction of inclination
        const maxAngle = Math.PI/64; 

        this.rotationLeaves = []; 
        const minAngleLeaves = 0; // Adjust this to change the direction of inclination
        const maxAngleLeaves = 2*Math.PI; 

        for (let i = 0; i < this.height - 1; i++) {
            let angleLeaf = Math.random() * (maxAngleLeaves - minAngleLeaves) + minAngleLeaves;
            this.rotationLeaves.push(angleLeaf);
        }

        let lastAngle = 0; // Initialize last angle to 0

        this.leaf = new MyLeaf(this.scene, [0.0, 1.0, 0.0], [0.0, 0.3, 0.0]);

        for (let i = 0; i < this.height; i++) {
            this.cylinders.push(new MyCylinder(this.scene, this.slices, this.stacks));
            let angle = Math.random() * (maxAngle - minAngle) + minAngle;
            lastAngle += angle; // Add the new angle to the last angle
            this.rotationAngles.push(lastAngle);
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
        for (let i = 0; i < this.height; i++) {
            this.appearance.apply();
            this.scene.pushMatrix();
            this.scene.rotate(-Math.PI/2 ,1,0,0);
            this.scene.scale(this.radiusStem,this.radiusStem,1);
            this.scene.rotate(this.rotationAngles[i], 0, 1, 0); 
            this.scene.translate(0, 0, i); 
            this.cylinders[i].display();
            this.scene.popMatrix();

            if(i < this.height - 1) {
                this.scene.pushMatrix();
                this.scene.translate(0, this.height/this.cylinders.length*(i+1), 0);
                this.scene.rotate(this.rotationLeaves[i], 0, 1, 0); 
                this.scene.rotate(Math.PI/4, 1, 0, 0);
                this.leaf.display();
                this.scene.popMatrix();
            }
        }
}
}