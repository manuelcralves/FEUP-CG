import { CGFobject } from '../lib/CGF.js';

export class MyCircle extends CGFobject {
  constructor(scene, slices, radius) {
    super(scene);
    this.slices = slices;
    this.radius = radius;

    this.initBuffers();
  }

  initBuffers() {
    this.vertices = [];
    this.indices = [];
    this.normals = [];
    this.texCoords = [];

    const delta_theta = 2 * Math.PI / this.slices;

    for (let i = 0; i <= this.slices; i++) {
      const theta = i * delta_theta;
      this.addVertex(theta);
      this.addIndices(i);
      this.addNormal(1); // Normal pointing up
      this.addTexCoord(i);
    }

    // Add vertices, indices, normals and texCoords for the opposite side
    for (let i = 0; i <= this.slices; i++) {
      const theta = i * delta_theta;
      this.addVertex(theta);
      this.addIndicesOppositeSide(i);
      this.addNormal(-1); // Normal pointing down
      this.addTexCoord(i);
    }

    this.primitiveType = this.scene.gl.TRIANGLES;
    this.initGLBuffers();
  }

  addVertex(theta) {
    const x = this.radius * Math.cos(theta);
    const z = this.radius * Math.sin(theta);
    this.vertices.push(x, 0, z);
  }

  addIndices(i) {
    if (i < this.slices) {
      this.indices.push(0, i, i + 1);
    }
  }

  addIndicesOppositeSide(i) {
    if (i < this.slices) {
      const base = this.slices + 1;
      this.indices.push(base, base + i + 1, base + i);
    }
  }

  addNormal(direction) {
    this.normals.push(0, direction, 0);
  }

  addTexCoord(i) {
    this.texCoords.push(i / this.slices, 0);
  }
}