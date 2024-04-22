import { CGFobject } from '../../lib/CGF.js';

export class MySphere extends CGFobject {
  constructor(scene, slices, stacks, inverted = false, min, max, variable =false) {
    super(scene);
    this.stacks = stacks * 2; 
    this.slices = slices; 
    this.inverted = inverted;
    this.variable = variable;
    this.min = min;
    this.max = max;

    this.initBuffers();
  }

  initBuffers() {
    this.vertices = [];
    this.indices = [];
    this.normals = [];
    this.texCoords = [];

    const delta_alpha = Math.PI / this.stacks;
    const delta_theta = 2 * Math.PI / this.slices;

    for (let latitude = 0; latitude <= this.stacks; latitude++) {
      const alpha = latitude * delta_alpha;

      for (let longitude = 0; longitude <= this.slices; longitude++) {
        const theta = longitude * delta_theta;
        this.addVertex(alpha, theta);
        this.addIndices(latitude, longitude);
        this.addNormal(alpha, theta);
        this.addTexCoord(latitude, longitude);
      }
    }
console.log("vertices number" + this.vertices.length)/3;
    this.primitiveType = this.scene.gl.TRIANGLES;
    this.initGLBuffers();
  }

  addVertex(alpha, theta) {
    const x = Math.cos(theta) * Math.sin(alpha);
    const y = Math.cos(alpha);
    const z = Math.sin(-theta) * Math.sin(alpha);
    this.vertices.push(
      this.variable ? x+Math.random()*(this.max-this.min) : x,
      this.variable ? y+Math.random()*(this.max-this.min) : y,
      this.variable ? z+Math.random()*(this.max-this.min) : z);
  }

  addIndices(latitude, longitude) {
    if (latitude < this.stacks && longitude < this.slices) {
      const curr = latitude * (this.slices + 1) + longitude;
      const next = curr + (this.slices + 1);
      if(!this.inverted){
        this.indices.push(curr, next, curr + 1);
        this.indices.push(next, next + 1, curr + 1);
      }
      else{
        this.indices.push(curr + 1, next, curr);
        this.indices.push(curr + 1, next + 1, next);
      }
    }
  }

  addNormal(alpha, theta) {
    const x = Math.cos(theta) * Math.sin(alpha);
    const y = Math.cos(alpha);
    const z = Math.sin(-theta) * Math.sin(alpha);
    this.normals.push(this.inverted ? -x : x, this.inverted ? -y : y, this.inverted ? -z : z);
  }

  addTexCoord(latitude, longitude) {
    this.texCoords.push(longitude / this.slices, latitude / this.stacks);
  }
}