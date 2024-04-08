import { CGFobject } from '../lib/CGF.js';

export class MySphere extends CGFobject {
  constructor(scene, slices, stacks) {
    super(scene);
    this.stacks = stacks * 2; 
    this.slices = slices; 

    this.initBuffers();
  }

  initBuffers() {
    this.vertices = [];
    this.indices = [];
    this.normals = [];
    this.texCoords = [];

    let alpha = 0;
    let delta_alpha = Math.PI / this.stacks;

    for (let latitude = 0; latitude <= this.stacks; latitude++) {
      let theta = 0;

      for (let longitude = 0; longitude <= this.slices; longitude++) {
        const x = Math.cos(theta) * Math.sin(alpha);
        const y = Math.cos(alpha);
        const z = Math.sin(-theta) * Math.sin(alpha);
        this.vertices.push(x, y, z);

        if (latitude < this.stacks && longitude < this.slices) {
          const curr = latitude * (this.slices + 1) + longitude;
          const next = curr + (this.slices + 1);
          this.indices.push(curr, next, curr + 1);
          this.indices.push(next, next + 1, curr + 1);
        }

        this.normals.push(x, y, z);
        this.texCoords.push(longitude / this.slices, latitude / this.stacks)

        theta += (2 * Math.PI) / this.slices;
      }

      alpha += delta_alpha;
    }

    this.primitiveType = this.scene.gl.TRIANGLES;
    this.initGLBuffers();
  }
}