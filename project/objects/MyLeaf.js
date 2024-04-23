import { CGFobject, CGFappearance } from '../../lib/CGF.js';
import { MyCylinder } from '../primitives/MyCylinder.js';
import { MyTriangle } from '../primitives/MyTriangle.js';

export class MyLeaf extends CGFobject {
    constructor(scene, [rCylinder, gCylinder, bCylinder], [rTriangle, gTriangle, bTriangle]) {
        super(scene);
        this.cylinder = new MyCylinder(this.scene, 100, 100);
        this.triangle1 = new MyTriangle(this.scene);
        this.triangle2 = new MyTriangle(this.scene);

        this.rCylinder = rCylinder;
        this.gCylinder = gCylinder;
        this.bCylinder = bCylinder;
        this.rTriangle = rTriangle;
        this.gTriangle = gTriangle;
        this.bTriangle = bTriangle;

        this.initAppearance();        
    }

    initAppearance() {
        // Create appearances for the cylinder and triangles
        this.cylinderAppearance = new CGFappearance(this.scene);
        this.cylinderAppearance.setAmbient(this.rCylinder, this.gCylinder, this.bCylinder, 1);
        this.cylinderAppearance.setDiffuse(this.rCylinder, this.gCylinder, this.bCylinder, 1);
        this.cylinderAppearance.setSpecular(this.rCylinder, this.gCylinder, this.bCylinder, 1);
        this.triangleAppearance = new CGFappearance(this.scene);
        this.triangleAppearance.setAmbient(this.rTriangle, this.gTriangle, this.bTriangle, 1);
        this.triangleAppearance.setDiffuse(this.rTriangle, this.gTriangle, this.bTriangle, 1);
        this.triangleAppearance.setSpecular(this.rTriangle, this.gTriangle, this.bTriangle, 1);
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