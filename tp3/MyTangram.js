import { CGFappearance, CGFobject } from '../lib/CGF.js';
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
        this.diamond = new MyDiamond(this.scene);
        this.trianglePink = new MyTriangle(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
        this.trianglePurple = new MyTriangleSmall(this.scene);
        this.triangleRed = new MyTriangleSmall(this.scene);
        this.triangleBlue = new MyTriangleBig(this.scene);
        this.triangleOrange = new MyTriangleBig(this.scene);

        this.initMaterials();
    }

    initMaterials() {
        // Red
        this.redMaterial = new CGFappearance(this.scene);
        this.redMaterial.setAmbient(1, 0, 0, 1);
        this.redMaterial.setSpecular(1, 1, 1, 1.0);

        // Yellow
        this.yellowMaterial = new CGFappearance(this.scene);
        this.yellowMaterial.setAmbient(1, 0.984, 0, 1);
        this.yellowMaterial.setSpecular(1, 1, 1, 1.0);

        // Blue
        this.blueMaterial = new CGFappearance(this.scene);
        this.blueMaterial.setAmbient(0, 0.635, 1, 1);
        this.blueMaterial.setSpecular(1, 1, 1, 1.0);

        // Orange
        this.orangeMaterial = new CGFappearance(this.scene);
        this.orangeMaterial.setAmbient(1, 0.71, 0, 1);
        this.orangeMaterial.setSpecular(1, 1, 1, 1.0);

        //Pink
        this.pinkMaterial = new CGFappearance(this.scene);
        this.pinkMaterial.setAmbient(1, 0.584, 0.788, 0.812);
        this.pinkMaterial.setSpecular(1, 1, 1, 1.0);

        //Purple
        this.purpleMaterial = new CGFappearance(this.scene);
        this.purpleMaterial.setAmbient(0.678, 0.302, 0.851, 1);
        this.purpleMaterial.setSpecular(1, 1, 1, 1.0);

        //Green
        this.greenMaterial = new CGFappearance(this.scene);
        this.greenMaterial.setAmbient(0, 1, 0.047, 1);
        this.greenMaterial.setSpecular(1, 1, 1, 1.0);
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
        this.scene.customMaterial.apply();
        this.diamond.display();
        this.scene.popMatrix()

        this.scene.pushMatrix()
        this.scene.translate(Math.SQRT2, 0, 0)
        this.scene.rotate(Math.PI / 180 * 225, 0, 0, 1)
        this.pinkMaterial.apply()
        this.trianglePink.display();
        this.scene.popMatrix()

        this.scene.pushMatrix()
        this.scene.translate(Math.SQRT2, -Math.SQRT2, 0)
        this.scene.rotate(Math.PI / 180 * 45, 0, 0, 1)
        this.orangeMaterial.apply()
        this.triangleOrange.display();
        this.scene.popMatrix()

        this.scene.pushMatrix()
        this.scene.translate(-Math.SQRT2, -Math.SQRT2, 0)
        this.scene.rotate(Math.PI / 180 * 225, 0, 0, 1)
        this.blueMaterial.apply()
        this.triangleBlue.display();
        this.scene.popMatrix()

        this.scene.pushMatrix()
        this.scene.translate(3 / 2 * Math.SQRT2 - 2, Math.SQRT2 / 2 + Math.SQRT2, 0)
        this.scene.rotate(Math.PI / 180 * 45, 0, 0, 1)
        this.purpleMaterial.apply()
        this.trianglePurple.display();
        this.scene.popMatrix()


        this.scene.pushMatrix()
        this.scene.translate(Math.SQRT2 / 2, -Math.SQRT2 / 2 - Math.sqrt(8), 0)
        this.scene.rotate(Math.PI / 180 * 135, 0, 0, 1)
        this.redMaterial.apply()
        this.triangleRed.display();
        this.scene.popMatrix()

        this.scene.pushMatrix()
        this.scene.translate(-3 / 2 * Math.sqrt(8), -3 / 2 * Math.sqrt(8), 0)
        this.scene.rotate(Math.PI / 180 * 45, 0, 0, 1)
        this.scene.rotate(Math.PI, 1, 0, 0)
        this.yellowMaterial.apply()
        this.parallelogram.display();
        this.scene.popMatrix()

        // ---- END Primitive drawing section
    }

    enableNormalViz() {
        this.diamond.enableNormalViz();
        this.triangleRed.enableNormalViz();
        this.trianglePurple.enableNormalViz();
        this.parallelogram.enableNormalViz();
        this.triangleOrange.enableNormalViz();
        this.triangleBlue.enableNormalViz();
        this.trianglePink.enableNormalViz();
    }

    disableNormalViz() {
        this.diamond.disableNormalViz();
        this.triangleRed.disableNormalViz();
        this.trianglePurple.disableNormalViz();
        this.parallelogram.disableNormalViz();
        this.triangleOrange.disableNormalViz();
        this.triangleBlue.disableNormalViz();
        this.trianglePink.disableNormalViz();
    }
}

