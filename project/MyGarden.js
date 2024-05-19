import { MyFlower } from './objects/MyFlower.js';

export class MyGarden {
  constructor(scene, rows, cols, spacing) {
  this.scene = scene;
  this.rows = rows;
  this.cols = cols;
  this.spacing = spacing;
  this.flowers = [];

  for (let i = 0; i < rows; i++) {
    this.flowers[i] = [];
    for (let j = 0; j < cols; j++) {
      let radiusFlower = Math.random() * (5-3) + 3; 
      let numPetals =   Math.floor(Math.random() * (7-3) + 3);
      let colorPetal = [Math.random(), Math.random(), Math.random()];
      let radiusReceptacle = Math.random() * (1-0.7) + 0.7; 
      let colorReceptacle = [Math.random(), Math.random(), Math.random()];
      let radiusStem = Math.random() * (0.3-0.1) + 0.1; 
      let heightStem = Math.random() * (15-2) + 2; 
      let colorStem = [0, Math.random()*(1-0.3)+0.2, 0];
      let colorLeaf = [0, Math.random()*(0.4-0.1) +0.1, 0];
      let minTilt = Math.random() * (-Math.PI/4);
      let maxTilt = Math.random() * Math.PI/4; 

      this.flowers[i][j] = new MyFlower(
        this.scene, radiusFlower, numPetals, colorPetal, radiusReceptacle, colorReceptacle,
        radiusStem, heightStem, colorStem, colorLeaf, minTilt, maxTilt
      );
    }
  }
}

  display() {
  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
      this.scene.pushMatrix();
      this.scene.translate(i * this.spacing, 0, j * this.spacing); 
      this.flowers[i][j].display();
      this.scene.popMatrix();
    }
  }
}
}