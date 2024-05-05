import { CGFobject, CGFappearance, CGFtexture, CGFshader } from '../../lib/CGF.js';

export class MyGrassLeaf extends CGFobject {
    constructor(scene, stacks) {
        super(scene);
        this.stacks = stacks;
        this.texture = 'images/leaf.jpg';
        this.baseWidth = Math.random() * 0.4 + 0.1;
        this.thickness = 0.05;
        this.height = Math.random() * 2 + 4;
        this.oscillation = 0;

        //this.shader = new CGFshader(this.gl, "shaders/grassleaf.vert", "shaders/grassleaf.frag");


        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        let delta_height = this.height / this.stacks;
        let delta_width = (this.baseWidth + 0.1) / this.stacks;

        for (var stack = 0; stack < this.stacks; stack++) {
            this.vertices.push(delta_width * stack + Math.random() * 0.1, delta_height * stack, Math.random() * 0.1);
            this.vertices.push(this.baseWidth - delta_width * stack + Math.random() * 0.1, delta_height * stack, Math.random() * 0.1);
            this.texCoords.push(1 - stack * (1 / this.stacks), 1);
            this.texCoords.push(1 - stack * (1 / this.stacks), 0);
            /* this.vertices.push(delta_width * stack, delta_height * stack, this.thickness);
            this.vertices.push(this.baseWidth - delta_width * stack, delta_height * stack, this.thickness); */
            if (stack < this.stacks - 1) {
                this.indices.push(stack * 2, stack * 2 + 1, stack * 2 + 2);
                this.indices.push(stack * 2 + 1, stack * 2 + 3, stack * 2 + 2);
                this.indices.push(stack * 2 + 2, stack * 2 + 1, stack * 2);
                this.indices.push(stack * 2 + 2, stack * 2 + 3, stack * 2 + 1);
            }
        }
        this.texCoords.push(0, 1, 0, 0);
        //this.vertices.push(this.baseWidth / 2, this.height, 0);
        //this.indices.push((this.stacks - 1) * 2, (this.stacks - 1) * 2 + 1, (this.stacks - 1) * 2 + 2);
        console.log(this.vertices);
        console.log(this.indices);
        console.log(this.texCoords);
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }



    oscillate_leaf() {
        for (let vertice = 3; vertice < this.vertices.length; vertice++) {
            if (this.oscillation == 0) { this.vertices[vertice] -= Math.random() * 0.5 + 0.1; }
            else if (this.oscillation == 1) { this.vertices[vertice] += Math.random() * 0.5 + 0.1; }
        }
        this.oscillation = this.oscillation === 0 ? 1 : 0;
    }

}