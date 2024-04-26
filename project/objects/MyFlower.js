import { CGFobject, CGFappearance } from '../../lib/CGF.js';
import { MyStem } from './MyStem.js';
import { MyReceptacle } from './MyReceptacle.js';
import { MyPetal } from './MyPetal.js';
import { MyCircle } from '../primitives/MyCircle.js';
import { MyPollen } from "./MyPollen.js";

export class MyFlower extends CGFobject {
  
  constructor(scene, radiusFlower, numPetals, [rPetal, gPetal, bPetal], radiusReceptacle, [rReceptacle, gReceptacle, bReceptacle], radiusStem, heightStem, [rStem, gStem, bStem], [rLeaf, gLeaf, bLeaf], minTilt, maxTilt) {
    super(scene);
    this.radiusFlower = radiusFlower;
    this.numPetals = numPetals;
    this.rPetal = rPetal;
    this.gPetal = gPetal;
    this.bPetal = bPetal;
    this.radiusReceptacle = radiusReceptacle;
    this.rReceptacle = rReceptacle;
    this.gReceptacle = gReceptacle;
    this.bReceptacle = bReceptacle;
    this.radiusStem = radiusStem;
    this.heightStem = heightStem;
    this.rStem = rStem;
    this.gStem = gStem;
    this.bStem = bStem;
    this.rLeaf = rLeaf;
    this.gLeaf = gLeaf;
    this.bLeaf = bLeaf;
    this.tilt = Math.random() * (maxTilt - minTilt) + minTilt;
    this.randomRotation = Math.random() * 2 * Math.PI; 

    this.initBuffers();
  }

  initBuffers() {
    this.receptacle = new MyReceptacle(this.scene, this.rReceptacle, this.gReceptacle, this.bReceptacle);
    this.stem = new MyStem(this.scene, 100, 50, this.heightStem, this.rStem, this.gStem, this.bStem, this.radiusStem, this.rLeaf, this.gLeaf, this.bLeaf);
    this.petals = [];
    for(let i = 0; i < this.numPetals; i++) {
      const angle = Math.random() * (Math.PI/4);
      this.petals.push(new MyPetal(this.scene, this.rPetal, this.gPetal, this.bPetal, angle, -Math.PI/6, Math.PI/6));
    }
    this.circle = new MyCircle(this.scene, 100, this.radiusFlower);
    this.pollen = new MyPollen(this.scene);
  }

  display() {
  this.scene.pushMatrix();
  this.scene.translate(0,this.heightStem + this.radiusReceptacle/2,0);
  this.scene.scale(this.radiusReceptacle,this.radiusReceptacle,this.radiusReceptacle);
  this.receptacle.display();
  this.scene.popMatrix();

  this.scene.pushMatrix();
  this.scene.translate(0,this.heightStem + this.radiusReceptacle*1.5,0);
  this.scene.rotate(this.randomRotation, 0, 1, 0);
  this.pollen.display();
  this.scene.popMatrix();

  this.scene.pushMatrix();
  this.stem.display();
  this.scene.popMatrix();

  const petalScaleFactor = this.radiusFlower / 6;

  for(let i = 0; i < this.numPetals; i++) {
    this.scene.pushMatrix();
    this.scene.translate(this.radiusReceptacle-1, this.heightStem + this.radiusReceptacle/2, 0); 
    this.scene.rotate(this.tilt, 0, 0, 1);
    this.scene.rotate(i* 2 * Math.PI / this.numPetals, 0, 1, 0);
    this.scene.scale(petalScaleFactor, petalScaleFactor, petalScaleFactor);
    this.scene.rotate(Math.PI / 2, 1, 0, 0);
    this.petals[i].display(); 
    this.scene.popMatrix();
  }
}
}