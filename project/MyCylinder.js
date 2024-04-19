import { CGFobject } from '../lib/CGF.js';

export class MyCylinder extends CGFobject {
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

        var alphaAng = 2 * Math.PI / this.slices;
        var deltaZ = 1 / this.stacks;

        for (var stack = 0; stack <= this.stacks; stack++) {
            var z = stack * deltaZ;
            for (var slice = 0; slice < this.slices; slice++) {
                var ang = slice * alphaAng;

                var sa = Math.sin(ang);
                var ca = Math.cos(ang);

                this.vertices.push(ca, sa, z);
                this.normals.push(ca, sa, 0);

                if (stack < this.stacks) {
                    var nextStack = stack + 1;
                    var nextSlice = (slice + 1) % this.slices;

                    this.indices.push(stack * this.slices + slice, stack * this.slices + nextSlice, nextStack * this.slices + slice);
                    this.indices.push(nextStack * this.slices + slice, stack * this.slices + nextSlice, nextStack * this.slices + nextSlice);
                }
            }
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}