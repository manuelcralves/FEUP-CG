import { CGFobject } from '../lib/CGF.js';
/**
 * MyPrism
 * @constructor
 * @param scene - Reference to MyScene object
 * @param slices - Number of divisions around the Z axis
 * @param stacks - Number of divisions along the Z axis
 */
export class MyPrism extends CGFobject {
    constructor(scene, slices, stacks) {
        super(scene);
        this.slices = slices;
        this.stacks = stacks;
        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];

        var ang = 0;
        var z = 0;
        var alphaAng = 2 * Math.PI / this.slices;
        var deltaZ = 1 / this.stacks;

        // Generate vertices counter-clockwise from the X axis
        for (var stack = 0; stack <= this.stacks; stack++) {
            ang = 0;
            for (var slice = 0; slice < this.slices; slice++) {

                var sa = Math.sin(ang);
                var saa = Math.sin(ang + alphaAng);
                var ca = Math.cos(ang);
                var caa = Math.cos(ang + alphaAng);

                this.vertices.push(ca, sa, z); //First vertex of the slice
                this.vertices.push(caa, saa, z); //Second vertex of the slice

                // Normal calculation
                var normal = [(saa - sa) * deltaZ, -(caa - ca) * deltaZ, 0];

                // Normalization
                var nsize = Math.sqrt(
                    normal[0] * normal[0] +
                    normal[1] * normal[1] +
                    normal[2] * normal[2]
                );
                normal[0] /= nsize;
                normal[1] /= nsize;
                normal[2] /= nsize;

                // Normals of the new pair of vertices
                this.normals.push(...normal);
                this.normals.push(...normal);

                ang += alphaAng;
            }
            z += deltaZ; // Z Offset for the vertices of each stack base
        }
        //console.log(this.vertices);

        // Generate exterior indices
        for (var stack = 0; stack < this.stacks; stack++) {
            for (var slice = 0; slice < 2 * this.slices; slice++) {
                this.indices.push((stack * this.slices * 2) + slice);
                this.indices.push((stack * this.slices * 2) + slice + 1);
                this.indices.push((stack * this.slices * 2) + slice + this.slices * 2);
                this.indices.push((stack * this.slices * 2) + slice + this.slices * 2);
                this.indices.push((stack * this.slices * 2) + slice + 1);
                this.indices.push((stack * this.slices * 2) + slice + this.slices * 2 + 1);
                slice++;
            }
        }

        // Generate interior indices
        for (var stack = 0; stack < this.stacks; stack++) {
            for (var slice = 0; slice < 2 * this.slices; slice++) {
                this.indices.push((stack * this.slices * 2) + slice + this.slices * 2 + 1);
                this.indices.push((stack * this.slices * 2) + slice + 1);
                this.indices.push((stack * this.slices * 2) + slice + this.slices * 2);
                this.indices.push((stack * this.slices * 2) + slice + this.slices * 2);
                this.indices.push((stack * this.slices * 2) + slice + 1);
                this.indices.push((stack * this.slices * 2) + slice);
                slice++;
            }
        }
        //console.log(this.indices);

        //The defined indices (and corresponding vertices)
        //will be read in groups of three to draw triangles
        this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }

    /**
    * Called when user interacts with GUI to change object's complexity.
    * @param {integer} complexity - changes number of slices
    */
    /* 
    updateBuffers(complexity) {
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
    */
}
