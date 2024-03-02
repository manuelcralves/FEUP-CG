import {CGFobject} from '../lib/CGF.js';
import { MyQuad } from "./MyQuad.js";
/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
        super(scene);
        this.quad = new MyQuad(scene);
    }
	
    display() {
    
        // ---- BEGIN Primitive drawing section
                
        // Top Face
        this.scene.pushMatrix();
        this.scene.translate(0.0, 0.0, 0.5);
        this.quad.display();
        this.scene.popMatrix();

        // Bottom Face
        this.scene.pushMatrix();
        this.scene.translate(0.0, 0.0, -0.5);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.quad.display();
        this.scene.popMatrix();

        // Front Face
        this.scene.pushMatrix();
        this.scene.translate(0.5, 0.0, 0.0);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.quad.display();
        this.scene.popMatrix();

        // Back Face
        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0.0, 0.0);
        this.scene.rotate(3*Math.PI/2, 0, 1, 0);
        this.quad.display();
        this.scene.popMatrix();

        // Right Face
        this.scene.pushMatrix();
        this.scene.translate(0.0, 0.5, 0.0);
        this.scene.rotate(-Math.PI/2, 0, 0, 1);
        this.scene.rotate(-Math.PI/2, 0, 1, 0);
        this.quad.display();
        this.scene.popMatrix();

        // Left Face
        this.scene.pushMatrix();
        this.scene.translate(0.0, -0.5, 0.0);
        this.scene.rotate(-Math.PI/2, 0, 0, 1);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.quad.display();
        this.scene.popMatrix();

        // ---- END Primitive drawing section
    }
}

