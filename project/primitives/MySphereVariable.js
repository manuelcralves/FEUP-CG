import { CGFobject } from '../../lib/CGF.js';

export class MySphere extends CGFobject {
  constructor(scene, slices, stacks, inverted = false, variable = false) {
    super(scene);
    this.stacks = stacks * 2;
    this.slices = slices;
    this.inverted = inverted;
    this.variable = variable;
    this.min = Math.random() * 0.2;
    this.max = Math.random() * 0.5;

    this.initBuffers();
  }

  initBuffers() {
    this.vertices = [];
    this.indices = [];
    this.normals = [];
    this.texCoords = [];


    const delta_alpha = Math.PI / this.stacks;
    const delta_theta = 2 * Math.PI / (this.slices - 1);

    for (let latitude = 0; latitude <= this.stacks; latitude++) {
      const alpha = latitude * delta_alpha;

      for (let longitude = 0; longitude < this.slices; longitude++) {

        let theta = longitude * delta_theta;

        this.addVertex(alpha, theta);
        this.addIndices(latitude, longitude);
        this.addNormal(alpha, theta);
        if (latitude == 0) {
          this.texCoords.push(0.5, 0);
          break;
        }
        else if (latitude == this.stacks) {
          this.texCoords.push(0.5, 1);
          break;
        }
        else this.addTexCoord(longitude, latitude);

      }
    }
    this.primitiveType = this.scene.gl.TRIANGLES;
    this.initGLBuffers();
  }

  addVertex(alpha, theta) {
    const x = Math.cos(theta) * Math.sin(alpha);
    const y = Math.cos(alpha);
    const z = Math.sin(-theta) * Math.sin(alpha);
    this.vertices.push(
      this.variable ? x + Math.random() * (this.max - this.min) : x,
      this.variable ? y + Math.random() * (this.max - this.min) : y,
      this.variable ? z + Math.random() * (this.max - this.min) : z
    );
  }

  addIndices(latitude, longitude) {

    const latstart = 1 + (latitude - 1) * this.slices;

    if (latitude == 0) {
      for (let side = 0; side <= this.slices - 1; side++) {
        if (!this.inverted) {
          if (side == this.slices - 1) this.indices.push(0, side + 1, 1);
          else this.indices.push(0, side + 1, side + 2);
        }
        else if (this.inverted) {
          if (side == this.slices - 1) this.indices.push(1, side + 1, 0);
          else this.indices.push(side + 2, side + 1, 0)
        }
      }
    }
    if (latitude == this.stacks) {
      const curr = this.vertices.length / 3 - 1;
      for (let side = 0; side <= this.slices - 1; side++) {
        if (!this.inverted) {
          if (side == this.slices - 1) this.indices.push(curr, curr - this.slices, curr - this.slices + side);
          else this.indices.push(curr, curr - this.slices + side + 1, curr - this.slices + side);
        }
        else if (this.inverted) {
          if (side == this.slices - 1) this.indices.push(curr - this.slices + side, curr - this.slices, curr);
          else this.indices.push(curr - this.slices + side, curr - this.slices + side + 1, curr);
        }
      }
    }

    if (latitude > 0 && latitude < this.stacks - 1) {
      if (longitude < this.slices - 1) {
        const curr = latstart + longitude;
        const next = curr + this.slices;
        if (!this.inverted) {
          this.indices.push(curr, next, curr + 1);
          this.indices.push(next, next + 1, curr + 1);
        }
        else if (this.inverted) {
          this.indices.push(curr + 1, next, curr);
          this.indices.push(curr + 1, next + 1, next);
        }
      }
      else if (longitude == this.slices - 1) {
        const curr = latstart + longitude;
        const next = curr + this.slices;
        if (!this.inverted) {
          this.indices.push(curr, next, curr + 1 - this.slices);
          this.indices.push(next, curr + 1, curr + 1 - this.slices);
        }
        else if (this.inverted) {
          this.indices.push(curr + 1 - this.slices, next, curr);
          this.indices.push(curr + 1 - this.slices, curr + 1, next);
        }
      }
    }
  }

  addNormal(alpha, theta) {
    const x = Math.cos(theta) * Math.sin(alpha);
    const y = Math.cos(alpha);
    const z = Math.sin(-theta) * Math.sin(alpha);
    this.normals.push(this.inverted ? -x : x, this.inverted ? -y : y, this.inverted ? -z : z);
  }

  addTexCoord(longitude, latitude) {
    this.texCoords.push(longitude / this.slices, latitude / this.stacks);
  }
}