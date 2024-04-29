import { CGFobject, CGFappearance, CGFtexture } from '../../lib/CGF.js';
import { MySphere } from '../primitives/MySphere.js';
import { MyPollen } from './MyPollen.js';

export class MyHive extends CGFobject {
    constructor(scene, x, y, z, hasPollen=false) {
        super(scene);
        this.position = { x: x, y: y, z: z };
        this.hasPollen = hasPollen;
        this.initBuffers();
        this.initAppearance();
    }

    initBuffers() {
        this.hive = new MySphere(this.scene, 100, 50);
        this.pollen = new MyPollen(this.scene);
    }

    initAppearance() {
        this.hiveAppearance = new CGFappearance(this.scene);
        this.hiveAppearance.setAmbient(1.0, 0.5, 0.0, 1.0); 
        this.hiveAppearance.setDiffuse(1.0, 0.5, 0.0, 1.0);
        this.hiveTexture = new CGFtexture(this.scene, "images/hive.jpg");
        this.hiveAppearance.setTexture(this.hiveTexture);
        this.hiveAppearance.setTextureWrap('MIRROR', 'MIRROR');
    }

    display() {
        this.hiveAppearance.apply();
        this.scene.pushMatrix();
        this.scene.translate(this.position.x, this.position.y, this.position.z);
        this.scene.scale(1, 1.5, 1); 
        this.hive.display();
        this.scene.popMatrix();

        if(this.hasPollen) {
            this.scene.pushMatrix();
            this.scene.translate(this.position.x, this.position.y+1.55, this.position.z);
            this.pollen.display();
            this.scene.popMatrix();
        }
    }
}