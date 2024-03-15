import { CGFobject, CGFappearance } from '../lib/CGF.js';
import { MyDiamond } from "./MyDiamond.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyParallelogram } from "./MyParallelogram.js";
import { MyTriangleBigOrange } from "./MyTriangleBigOrange.js";
import { MyTriangleBigBlue } from './MyTriangleBigBlue.js';
import { MyTriangleSmallRed } from "./MyTriangleSmallRed.js";
import { MyTriangleSmallPurple } from './MyTriangleSmallPurple.js';
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
        this.triangleSmallRed = new MyTriangleSmallRed(scene);
        this.triangleSmallPurple = new MyTriangleSmallPurple(scene);
        this.triangleBigOrange = new MyTriangleBigOrange(scene);
        this.triangleBigBlue = new MyTriangleBigBlue(scene);

        this.tangramMaterial = new CGFappearance(scene);
        this.tangramMaterial.setAmbient(10, 10, 10, 1);
        this.tangramMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.tangramMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.tangramMaterial.setShininess(10.0);
        this.tangramMaterial.loadTexture('images/tangram.png');
        this.tangramMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {
        var translateDiamond = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            Math.SQRT2 - 1, Math.SQRT2, 0, 1
        ];

        // ---- BEGIN Primitive drawing section
        this.scene.pushMatrix()
        this.scene.multMatrix(translateDiamond);
        this.tangramMaterial.apply();
        this.diamond.display();
        this.scene.popMatrix()

        this.scene.pushMatrix()
        this.scene.translate(Math.SQRT2, 0, 0)
        this.scene.rotate(Math.PI / 180 * 225, 0, 0, 1)
        this.tangramMaterial.apply();
        this.triangle.display();
        this.scene.popMatrix()

        this.scene.pushMatrix()
        this.scene.translate(Math.SQRT2, -Math.SQRT2, 0)
        this.scene.rotate(Math.PI / 180 * 45, 0, 0, 1)
        this.tangramMaterial.apply();
        this.triangleBigOrange.display();
        this.scene.popMatrix()

        this.scene.pushMatrix()
        this.scene.translate(-Math.SQRT2, -Math.SQRT2, 0)
        this.scene.rotate(Math.PI / 180 * 225, 0, 0, 1)
        this.tangramMaterial.apply();
        this.triangleBigBlue.display();
        this.scene.popMatrix()

        this.scene.pushMatrix()
        this.scene.translate(3 / 2 * Math.SQRT2 - 2, Math.SQRT2 / 2 + Math.SQRT2, 0)
        this.scene.rotate(Math.PI / 180 * 45, 0, 0, 1)
        this.tangramMaterial.apply();
        this.triangleSmallPurple.display();
        this.scene.popMatrix()

        this.scene.pushMatrix()
        this.scene.translate(Math.SQRT2 / 2, -Math.SQRT2 / 2 - Math.sqrt(8), 0)
        this.scene.rotate(Math.PI / 180 * 135, 0, 0, 1)
        this.tangramMaterial.apply();
        this.triangleSmallRed.display();
        this.scene.popMatrix()

        this.scene.pushMatrix()
        this.scene.translate(-3 / 2 * Math.sqrt(8), -3 / 2 * Math.sqrt(8), 0)
        this.scene.rotate(Math.PI / 180 * 45, 0, 0, 1)
        this.scene.rotate(Math.PI, 1, 0, 0)
        this.tangramMaterial.apply();
        this.parallelogram.display();
        this.scene.popMatrix()

        // ---- END Primitive drawing section
    }
}

