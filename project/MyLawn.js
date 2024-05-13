import { CGFobject, CGFappearance, CGFtexture, CGFshader } from '../lib/CGF.js';
import { MyGrassLeaf } from './objects/MyGrassLeaf.js';

export class MyLawn extends CGFobject {
    constructor(scene) {
        super(scene);
        this.grass = [];
        this.spacingX = [];
        this.spacingZ = [];
        this.lawn_size = 500;
        this.size = 50;
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


        //Shaders
        this.lawnShader = new CGFshader(this.scene.gl, "shaders/grassleaf.vert", "shaders/grassleaf.frag");
        
        let x_offset = Math.random() * 0.5 + 0.1;
        let y_offset = Math.random() * 0.5 + 0.1;
        let z_offset = Math.random() * 0.5 + 0.1;

        this.lawnShader.setUniformsValues({ randomOffset1: x_offset });
        this.lawnShader.setUniformsValues({ randomOffset2: y_offset });
        this.lawnShader.setUniformsValues({ randomOffset3: z_offset });
        this.lawnShader.setUniformsValues({ uSampler2: 1 });
        this.lawnShader.setUniformsValues({ timeFactor: 0 });


        for (let x = 0; x < this.size; x += 1){ //0.5) {
            this.grass[x] = [];
            this.spacingX[x] = [];
            this.spacingZ[x] = [];
            for (let z = 0; z < this.size; z += 1){ //0.5) {
                this.grass[x][z] = new MyGrassLeaf(scene, Math.floor(Math.random() * 4 + 2));
                this.spacingX[z] = x + Math.random() * 0.5;
                this.spacingZ[z] = z + Math.random() * 0.5;
        
            }
        console.log("X at " + x + ": " + this.spacingX[x]);
        console.log("Z at " + x + ": " + this.spacingZ[x]);
        }



    }

    display() {
        this.scene.setActiveShader(this.lawnShader);
        for (let x = 0; x < this.size; x += 1) {//0.5) {
            for (let z = 0; z < this.size; z += 1) {//0.5) {
                    this.scene.pushMatrix();
                    this.appearance.apply();
                    this.scene.translate(this.spacingX[x][z], 0, this.spacingZ[x][z]);
                    //this.scene.translate(x /*+ Math.random() * 0.5*/, 0, z /*+ Math.random() * 0.5*/);
                    this.grass[x][z].display();
                    this.scene.popMatrix();
            }
        }
    }

    //Unused
    update_lawn(t) {
        if (t >= 60) {
            for (let x = 0; x < this.size; x += 1) {//0.5) {
                for (let z = 0; z < this.size; z += 1){ //0.5) {
                    this.grass[x][z].oscillate_leaf();
                }
            }
        }
    }
}