import {CGFobject} from '../lib/CGF.js';
import { MyDiamond } from "./MyDiamond.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyParallelogram } from "./MyParallelogram.js";
import { MyTriangleBig } from "./MyTriangleBig.js";
import { MyTriangleSmall } from "./MyTriangleSmall.js";
/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
        this.diamond = new MyDiamond(scene);
        this.triangle = new MyTriangle(scene);
        this.parallelogram = new MyParallelogram(scene);
        this.triangleSmall = new MyTriangleSmall(scene);
        this.triangleBig = new MyTriangleBig(scene);
	}
	
    display() {
        var translateDiamond = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            Math.SQRT2-1, Math.SQRT2, 0, 1
        ];
    
        // ---- BEGIN Primitive drawing section
        this.scene.pushMatrix()
        this.scene.multMatrix(translateDiamond);
        this.diamond.display();
        this.scene.popMatrix()
    
        this.scene.pushMatrix()
        this.scene.translate(Math.SQRT2,0,0)
        this.scene.rotate(Math.PI/180*225, 0, 0, 1)
        this.triangle.display();
        this.scene.popMatrix()
    
        this.scene.pushMatrix()
        this.scene.translate(Math.SQRT2,-Math.SQRT2,0)
        this.scene.rotate(Math.PI/180*45, 0, 0, 1)
        this.triangleBig.display();
        this.scene.popMatrix()
    
        this.scene.pushMatrix()
        this.scene.translate(-Math.SQRT2,-Math.SQRT2,0)
        this.scene.rotate(Math.PI/180*225, 0, 0, 1)
        this.triangleBig.display();
        this.scene.popMatrix()
    
        this.scene.pushMatrix()
        this.scene.translate(0.12,2.12,0)
        this.scene.rotate(Math.PI/180*45, 0, 0, 1)
        this.triangleSmall.display();
        this.scene.popMatrix()
    
    
        this.scene.pushMatrix()
        this.scene.translate(Math.SQRT2/2,-3.535,0)
        this.scene.rotate(Math.PI/180*135, 0, 0, 1)
        this.triangleSmall.display();
        this.scene.popMatrix()
    
        this.scene.pushMatrix()
        this.scene.translate(-4.2425,-4.2425,0)
        this.scene.rotate(Math.PI/180*45, 0, 0, 1)
        this.scene.rotate(Math.PI, 1, 0, 0)
        this.parallelogram.display();
        this.scene.popMatrix()
    
        // ---- END Primitive drawing section
    }
}

