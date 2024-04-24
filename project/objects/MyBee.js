import { CGFobject, CGFappearance, CGFtexture } from '../../lib/CGF.js';
import { MyBeeBody } from './bee/MyBeeBody.js';
import { MyBeeHead } from './bee/MyBeeHead.js';
import { MyBeeAntenna } from './bee/MyBeeAntenna.js';
import { MyBeeAntennaTop } from './bee/MyBeeAntennaTop.js';
import { MyBeeFoot } from './bee/MyBeeFoot.js';
import { MyBeeFootJoint } from './bee/MyBeeFootJoint.js';
import { MyBeeWing } from './bee/MyBeeWing.js';

export class MyBee extends CGFobject {
  constructor(scene, x, y, z, orientation) {
    super(scene);

    this.offsetBee = 0;
    this.offsetWing = 0;
    this.velocityBee = 0.005;
    this.velocityWing = 0.025;

    this.position = { x: x, y: y, z: z };
    this.orientation = orientation;
    this.velocity = { x: 0, y: 0, z: 0 };

    this.initBuffers();
  }

  initBuffers() {
    this.setBody();
    this.setHead();
    this.setAntennas();
    this.setAntennasTop();
    this.setFeet();
    this.setFeetJoints();
    this.setWings();
  }


  setBody() {
    this.bodyAppearance = new CGFappearance(this.scene);
    this.bodyAppearance.setAmbient(1.0, 1.0, 1.0, 1.0);
    this.bodyAppearance.setDiffuse(1.0, 1.0, 1.0, 1.0);
    this.bodyTex = new CGFtexture(this.scene, "./images/bee_body.jpg");
    this.bodyAppearance.setTexture(this.bodyTex);
    this.bodyAppearance.setTextureWrap("CLAMP_TO_EDGE", "CLAMP_TO_EDGE");

    this.body = new MyBeeBody(this.scene, this.bodyAppearance);
  }

  setHead() {
    this.headAppearance = new CGFappearance(this.scene);
    this.headAppearance.setAmbient(0.937, 0.765, 0.0, 1.0);
    this.headAppearance.setDiffuse(0.937, 0.765, 0.0, 1.0);
    this.headTex = new CGFtexture(this.scene, "images/bee_face.png");
    this.headAppearance.setTexture(this.headTex);
    this.headAppearance.setTextureWrap("CLAMP_TO_EDGE", "CLAMP_TO_EDGE");

    this.head = new MyBeeHead(this.scene, this.headAppearance);
  }

  setAntennas() {
    this.antennaAppearance = new CGFappearance(this.scene);
    this.antennaAppearance.setAmbient(0.0, 0.0, 0.0, 1.0);
    this.antennaAppearance.setDiffuse(0.0, 0.0, 0.0, 1.0);

    this.antenna = new MyBeeAntenna(this.scene, this.antennaAppearance);
  }

  setAntennasTop() {
    this.antennaTopAppearance = new CGFappearance(this.scene);
    this.antennaTopAppearance.setAmbient(0.1, 0.1, 0.1, 1.0);
    this.antennaTopAppearance.setDiffuse(0.1, 0.1, 0.1, 1.0);
    this.antennaTop = new MyBeeAntennaTop(this.scene, this.antennaTopAppearance);
  }

  setFeet() {
    this.footAppearance = new CGFappearance(this.scene);
    this.footAppearance.setAmbient(0.0, 0.0, 0.0, 1.0);
    this.footAppearance.setDiffuse(0.0, 0.0, 0.0, 1.0);

    this.feet = new MyBeeFoot(this.scene, this.footAppearance);
  }

  setFeetJoints() {
    this.footJointAppearance = new CGFappearance(this.scene);
    this.footJointAppearance.setAmbient(0.1, 0.1, 0.1, 1.0);
    this.footJointAppearance.setDiffuse(0.1, 0.1, 0.1, 1.0);

    this.feetJoints = new MyBeeFootJoint(this.scene, this.footJointAppearance);
  }

  setWings() {
    this.wingAppearance = new CGFappearance(this.scene);
    this.wingAppearance.setAmbient(0.624, 0.882, 0.976, 0.4);
    this.wingAppearance.setDiffuse(0.624, 0.882, 0.976, 0.4);
    this.wingAppearance.setSpecular(0.624, 0.882, 0.976, 0.4);
    this.wingAppearance.setEmission(0.0, 0.0, 0.0, 0.0);

    this.wings = new MyBeeWing(this.scene, this.wingAppearance);
  }

  display() {
    this.scene.pushMatrix();
    this.scene.translate(this.position.x, (Math.sin(this.offsetBee) / 2)+this.position.y, this.position.z);
    this.scene.rotate(this.orientation*Math.PI, 0, 1, 0);
    this.scene.scale(this.scene.scaleFactor, this.scene.scaleFactor, this.scene.scaleFactor);
    this.body.display();
    this.head.display();
    this.antenna.display();
    this.antennaTop.display();
    this.feet.display();
    this.feetJoints.display(); 
    this.wings.display(this.offsetWing);
    this.scene.popMatrix();
  }

  update(t) {
  this.offsetBee += this.velocityBee * t;
  this.offsetWing += this.velocityWing * t;

  this.position.x += this.velocity.x * t;
  this.position.z += this.velocity.z * t;
}

turn(v) {
  // Calculate the current speed
  const speed = Math.sqrt(this.velocity.x ** 2 + this.velocity.y ** 2 + this.velocity.z ** 2);

  // Change the orientation
  this.orientation += v/3*this.scene.speedFactor;

  // Calculate the new direction
  const newDirectionX = -Math.cos(this.orientation*Math.PI) * speed;
  const newDirectionZ = Math.sin(this.orientation*Math.PI) * speed;

  // Apply the speed in the new direction
  this.velocity.x = newDirectionX;
  this.velocity.z = newDirectionZ;
}

  accelerate(v) {
  const maxSpeed = Math.abs(v)/10; // Define your maximum speed here

  if(v > 0) {
    this.velocity.x -= v*Math.cos(this.orientation*Math.PI)/150;
    this.velocity.z +=v*Math.sin(this.orientation*Math.PI)/150;
  } else if (v < 0){
    const speed = Math.sqrt(this.velocity.x ** 2 + this.velocity.y ** 2 + this.velocity.z ** 2);
    if (speed <= 0.001) {
      this.velocity.x = 0;
      this.velocity.y = 0;
      this.velocity.z = 0;
      return; 
    }
    this.velocity.x -= v*Math.cos(this.orientation*Math.PI)/150;
    this.velocity.z +=v*Math.sin(this.orientation*Math.PI)/150;
  }

  const currentSpeed = Math.sqrt(this.velocity.x ** 2 + this.velocity.y ** 2 + this.velocity.z ** 2);
  if (currentSpeed > maxSpeed) {
    const speedFactor = maxSpeed / currentSpeed;
    this.velocity.x *= speedFactor;
    this.velocity.z *= speedFactor;
  }
  console.log(v);
  console.log(currentSpeed);
}
}
