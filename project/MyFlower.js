import { CGFobject, CGFappearance } from '../../lib/CGF.js';
import { MyStem } from './MyStem.js';
import { MyReceptacle } from './MyReceptacle.js';
import { MyPetal } from './MyPetal.js';
import { MyCircle } from './MyCircle.js';

export class MyFlower extends CGFobject {
  
  constructor(scene, numPetals, [rPetal, gPetal, bPetal], radiusReceptacle, [rReceptacle, gReceptacle, bReceptacle], radiusStem,[rStem, gStem, bStem], [rLeaf, gLeaf, bLeaf]) {
    //scene, radiusFlower, numPetals, [rPetal, gPetal, bPetal], radiusReceptacle, [rReceptacle, gReceptacle, bReceptacle], radiusStem, heightStem, [rStem, gStem, bStem], [rLeaf, gLeaf, bLeaf]
    super(scene);
    //this.radiusFlower = radiusFlower;
    this.numPetals = numPetals;
    this.rPetal = rPetal;
    this.gPetal = gPetal;
    this.bPetal = bPetal;
    this.radiusReceptacle = radiusReceptacle;
    this.rReceptacle = rReceptacle;
    this.gReceptacle = gReceptacle;
    this.bReceptacle = bReceptacle;
    this.radiusStem = radiusStem;
    this.rStem = rStem;
    this.gStem = gStem;
    this.bStem = bStem;
    this.rLeaf = rLeaf;
    this.gLeaf = gLeaf;
    this.bLeaf = bLeaf;

    this.initBuffers();
  }

  initBuffers() {
    this.receptacle = new MyReceptacle(this.scene, this.rReceptacle, this.gReceptacle, this.bReceptacle);
    this.stem = new MyStem(this.scene, 100, 50, this.rStem, this.gStem, this.bStem);
    this.petal = new MyPetal(this.scene, this.rPetal, this.gPetal, this.bPetal);
    this.circle = new MyCircle(this.scene, 100, 30);
  }

  display() {
  this.scene.pushMatrix();
  this.scene.translate(0,10,0);
  this.scene.scale(this.radiusReceptacle,this.radiusReceptacle,this.radiusReceptacle);
  this.receptacle.display();
  this.scene.popMatrix();

  this.scene.pushMatrix();
  this.scene.rotate(-Math.PI/2 ,1,0,0);
  this.scene.scale(this.radiusStem,this.radiusStem,2);
  this.stem.display();
  this.scene.popMatrix();

  //const petalScaleFactor = this.radiusFlower / 8;

  for(let i = 0; i < this.numPetals; i++) {
    this.scene.pushMatrix();
    this.scene.rotate(i * 2 * Math.PI / this.numPetals, 0, 1, 0);
    this.scene.translate(this.radiusReceptacle-1, 9.5, 0); 
    this.scene.rotate(Math.PI / 4, 2, 0, 0);
    this.scene.scale(3, 3, 3);
    this.petal.display();
    this.scene.popMatrix();
  }

  this.circle.display();
}
}