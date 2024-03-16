import { CGFappearance, CGFobject } from "../lib/CGF.js";
import { MyQuad } from "./MyQuad.js";

export class MyUnitCubeQuad extends CGFobject {
    constructor(scene, top, front, right, back, left, bottom) {
        super(scene);
        this.initBuffers();
        this.initMats({top, front, right, back, left, bottom});
    }

    initBuffers() {
        this.scene.quad = new MyQuad(this.scene);
    }

    initMats(mats) {
        for (let side in mats) {
            this[side] = this.createAppearance(mats[side]);
        }
    }

    createAppearance(texture) {
        let appearance = new CGFappearance(this.scene);
        appearance.setAmbient(10, 10, 10, 1);
        appearance.setDiffuse(0.9, 0.9, 0.9, 1);
        appearance.setSpecular(0.1, 0.1, 0.1, 1);
        appearance.setShininess(10.0);
        appearance.loadTexture(texture);
        appearance.setTextureWrap('REPEAT', 'REPEAT');
        return appearance;
    }

    display() {
        this.displayFace(this.front, [0.0, 0.0, 0.5], []);
        this.displayFace(this.back, [0.0, 0.0, -0.5], [Math.PI, 0, 1, 0]);
        this.displayFace(this.right, [0.5, 0.0, 0.0], [Math.PI/2, 0, 1, 0]);
        this.displayFace(this.left, [-0.5, 0.0, 0.0], [3*Math.PI/2, 0, 1, 0]);
        this.displayFace(this.top, [0.0, 0.5, 0.0], [-Math.PI/2, 0, 0, 1, -Math.PI/2, 0, 1, 0]);
        this.displayFace(this.bottom, [0.0, -0.5, 0.0], [-Math.PI/2, 0, 0, 1, Math.PI/2, 0, 1, 0]);
    }

    displayFace(face, translateArgs, rotateArgs) {
        face.apply();
        this.setTextureFilter();
        this.scene.pushMatrix();
        this.scene.translate(...translateArgs);
        for (let i = 0; i < rotateArgs.length; i += 4) {
            this.scene.rotate(...rotateArgs.slice(i, i + 4));
        }
        this.scene.quad.display();
        this.scene.popMatrix();
    }

    setTextureFilter() {
        let filter = this.scene.nearestFilter ? this.scene.gl.NEAREST : this.scene.gl.LINEAR;
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, filter);
    }
}