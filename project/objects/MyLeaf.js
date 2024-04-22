import { CGFobject, CGFappearance } from '../../lib/CGF.js';
import { MyCylinder } from '../primitives/MyCylinder.js';
import { MyTriangle } from '../primitives/MyTriangle.js';

export class MyLeaf extends CGFobject {
    constructor(scene) {
        super(scene);
        this.cylinder = new MyCylinder(this.scene, 100, 100);
        this.triangle1 = new MyTriangle(this.scene);
        this.triangle2 = new MyTriangle(this.scene);

        // Create appearances for the cylinder and triangles
        this.cylinderAppearance = new CGFappearance(this.scene);
        this.cylinderAppearance.setAmbient(0, 1, 0, 1);
        this.cylinderAppearance.setDiffuse(0, 1, 0, 1);
        this.cylinderAppearance.setSpecular(0, 1, 0, 1);
        this.triangleAppearance = new CGFappearance(this.scene);
        this.triangleAppearance.setAmbient(0, 0.3, 0, 1);
        this.triangleAppearance.setDiffuse(0, 0.3, 0, 1);
        this.triangleAppearance.setSpecular(0, 0.3, 0, 1);
    }

   display() {
    this.scene.pushMatrix();
    this.cylinderAppearance.apply();
    this.scene.scale(0.1, 1, 0.1);
    this.scene.rotate(-Math.PI / 2, 1, 0, 0); 
    this.cylinder.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.triangleAppearance.apply();
    this.scene.translate(0.3, 1, 0);
    this.scene.scale(0.1, 0.1, 0.1);
    this.scene.rotate(Math.PI/2, 1, 1, 0);
    this.triangle1.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.triangleAppearance.apply();
    this.scene.rotate(Math.PI, 0, 1, 0);
    this.scene.translate(0.3, 0.5, 0);
    this.scene.scale(0.1, 0.1, 0.1);
    this.scene.rotate(Math.PI/2, 1, 1, 0);
    this.triangle2.display();
    this.scene.popMatrix();
}
}