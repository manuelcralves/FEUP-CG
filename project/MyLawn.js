import { CGFobject, CGFappearance, CGFtexture, CGFshader } from '../lib/CGF.js';
import { MyGrassLeaf } from './objects/MyGrassLeaf.js';

export class MyLawn extends CGFobject {
    constructor(scene) {
        super(scene);
        this.grass = [];
        this.spacing = [];
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

        //Shaders
        this.lawnShader = new CGFshader(this.scene.gl, "shaders/grassleaf.vert", "shaders/grassleaf.frag");

        /*         let x_offset = Math.random() * 0.5 + 0.1;
                let y_offset = Math.random() * 0.5 + 0.1;
                let z_offset = Math.random() * 0.5 + 0.1; 
        
                  this.lawnShader.setUniformsValues({ randomOffset1: x_offset });
                this.lawnShader.setUniformsValues({ randomOffset2: y_offset });
                this.lawnShader.setUniformsValues({ randomOffset3: z_offset }); */
        this.lawnShader.setUniformsValues({ uSampler2: 1 });
        this.lawnShader.setUniformsValues({ timeFactor: 0 });


        //Lawn generation
        for (let x = 0; x < this.size; x += 1) { //0.5) {
            this.grass[x] = [];
            this.spacing[x] = [];
            for (let z = 0; z < this.size; z += 1) { //0.5) {
                // Generate each individual leaf
                this.grass[x][z] = new MyGrassLeaf(scene, Math.floor(Math.random() * 4 + 3));
                // Generate corresponding leaf's random position offset
                this.spacing[x][z] = [x + Math.random() - 0.5, z + Math.random() - 0.5];
            }
        }

    }

    display() {
        this.scene.setActiveShader(this.lawnShader);
        for (let x = 0; x < this.size; x += 1) {//0.5) {
            for (let z = 0; z < this.size; z += 1) {//0.5) {
                this.scene.pushMatrix();
                this.appearance.apply();
                this.scene.translate(this.spacing[x][z][0], 0, this.spacing[x][z][1]);
                this.grass[x][z].display();
                this.scene.popMatrix();
            }
        }
    }

    //Unused animation possibility
    /*     update_lawn(t) {
            if (t >= 60) {
                for (let x = 0; x < this.size; x += 1) {//0.5) {
                    for (let z = 0; z < this.size; z += 1) { //0.5) {
                        this.grass[x][z].oscillate_leaf();
                    }
                }
            }
        } */
}