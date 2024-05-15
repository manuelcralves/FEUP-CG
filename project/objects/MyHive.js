import { CGFobject, CGFappearance, CGFtexture } from '../../lib/CGF.js';
import { MyQuad } from '../primitives/MyQuad.js';
import { MySphere } from '../primitives/MySphere.js';
import { MyPollen } from './MyPollen.js';

export class MyHive extends CGFobject {
    constructor(scene, x, y, z, hasPollen) {
        super(scene);
        this.position = { x: x, y: y, z: z };
        this.hasPollen = hasPollen;
        this.initBuffers();
        this.initAppearance();
    }

    initBuffers() {
        this.square = new MyQuad(this.scene);
        this.pollen = new MyPollen(this.scene);
    }

    initAppearance() {
        this.hiveAppearance = new CGFappearance(this.scene);
        this.hiveAppearance.setAmbient(1.0, 0.5, 0.0, 1.0); 
        this.hiveAppearance.setDiffuse(1.0, 0.5, 0.0, 1.0);
        this.hiveTexture = new CGFtexture(this.scene, "images/wood.jpg");
        this.hiveAppearance.setTexture(this.hiveTexture);
        this.hiveAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
    }

    display() {
        this.hiveAppearance.apply();
        this.scene.pushMatrix();
        this.scene.translate(this.position.x, this.position.y+1, this.position.z-1);
        this.square.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(this.position.x, this.position.y+1, this.position.z+1);
        this.square.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(this.position.x-1, this.position.y+1, this.position.z);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.square.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(this.position.x+1, this.position.y+1, this.position.z);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.square.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(this.position.x, this.position.y, this.position.z);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.square.display();
        this.scene.popMatrix();

        if(this.hasPollen) {
            this.scene.pushMatrix();
            this.scene.translate(this.position.x, this.position.y+0.1, this.position.z);
            this.pollen.display();
            this.scene.popMatrix();
        }
    }
}