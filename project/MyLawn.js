import { CGFobject, CGFappearance, CGFtexture } from '../lib/CGF.js';
import { MyGrassLeaf } from './objects/MyGrassLeaf.js';

export class MyLawn extends CGFobject {
    constructor(scene) {
        super(scene);
        this.grass = [];
        this.lawn_size = 500;
        this.size = 100;
        this.texture = 'images/leaf.jpg';

        let colorLeaf = [0, Math.random() * 0.8 + 0.5, 0];
        this.rTriangle = colorLeaf[0];
        this.gTriangle = colorLeaf[1];
        this.bTriangle = colorLeaf[2];

        this.appearance = new CGFappearance(this.scene);
        this.appearance.setAmbient(this.rTriangle, this.gTriangle, this.bTriangle, 1);
        this.appearance.setDiffuse(this.rTriangle, this.gTriangle, this.bTriangle, 1);
        this.appearance.setSpecular(this.rTriangle, this.gTriangle, this.bTriangle, 1);

        this.leafTexture = new CGFtexture(this.scene, this.texture);
        this.appearance.setTexture(this.leafTexture);
        //this.appearance.setTextureWrap('CLAMP', 'CLAMP');


        for (let x = 0; x < this.size; x++) {
            this.grass[x] = [];
            for (let z = 0; z < this.size; z++) {
                this.grass[x][z] = new MyGrassLeaf(scene, Math.floor(Math.random() * 4 + 2));
            }
        }

    }

    display() {
        for (let x = 0; x < this.size; x++) {
            for (let z = 0; z < this.size; z++) {
                {
                    this.scene.pushMatrix();
                    this.appearance.apply();
                    this.scene.translate(x, 0, z);
                    this.grass[x][z].display();
                    this.scene.popMatrix();
                }
            }
        }
    }

    update_lawn() {
        for (let x = 0; x < this.size; x++) {
            for (let z = 0; z < this.size; z++) {
                this.grass[x][z].oscillate_leaf();
            }
        }
    }
}