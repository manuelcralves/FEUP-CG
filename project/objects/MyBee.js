import { CGFobject, CGFappearance, CGFtexture } from '../../lib/CGF.js';
import { MyBeeBody } from './bee/MyBeeBody.js';
import { MyBeeHead } from './bee/MyBeeHead.js';
import { MyBeeAntenna } from './bee/MyBeeAntenna.js';
import { MyBeeAntennaTop } from './bee/MyBeeAntennaTop.js';
import { MyBeeFoot } from './bee/MyBeeFoot.js';
import { MyBeeFootJoint } from './bee/MyBeeFootJoint.js';
import { MyBeeWing } from './bee/MyBeeWing.js';
import { MyGarden } from '../MyGarden.js';
import { MyFlower } from './MyFlower.js';

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

    this.collision = false;

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
    if(this.velocity.y == 0) {
      this.scene.translate(this.position.x, (Math.sin(this.offsetBee) / 2)+this.position.y, this.position.z);
    } else {
      this.scene.translate(this.position.x, +this.position.y, this.position.z);
    }
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

    this.checkCollisions(this.scene.garden);
    console.log(this.collision)

    if (!this.collision) {
        this.position.x += this.velocity.x * t;
        this.position.y += this.velocity.y * t;
        this.position.z += this.velocity.z * t;
    } else {
      this.position.x -= this.velocity.x * t * 2;
      this.position.y -= this.velocity.y * t * 2;
      this.position.z -= this.velocity.z * t * 2;
      this.stop();
      this.collision = false;
  }
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
}

vertical(v) {
  this.velocity.y += v/100;
}

stop() {
  this.velocity.x = 0;
  this.velocity.y = 0;
  this.velocity.z = 0;
}

checkCollisions(garden) {
  for (let i = 0; i < garden.rows; i++) {
      for (let j = 0; j < garden.cols; j++) {
          const flower = garden.flowers[i][j];
          if(this.position.y < flower.heightStem-flower.radiusReceptacle) {
            console.log("Stem Level");
            const distanceStem = Math.sqrt(
              Math.pow(this.position.x - i*garden.spacing, 2) +
              Math.pow(this.position.z - j*garden.spacing, 2)
          );

          if (distanceStem < flower.radiusStem + 2) {
              console.log("Collide Stem");
              this.collision = true;
          }
          } else if (this.position.y > flower.heightStem+2*flower.radiusReceptacle){
            console.log("Receptacle Level");
            const distanceFlower = Math.sqrt(
              Math.pow(this.position.x - i*garden.spacing, 2) +
              Math.pow(this.position.y - (flower.heightStem+flower.radiusReceptacle), 2) +
              Math.pow(this.position.z - j*garden.spacing, 2)
          );

          if (distanceFlower < flower.radiusReceptacle+1) {
            console.log("Colllide Receptacle");
           this.collision = true;
        }
          } else {
            console.log("Flower Level");
            const distanceFlower = Math.sqrt(
              Math.pow(this.position.x - i*garden.spacing, 2) +
              Math.pow(this.position.y - (flower.heightStem+flower.radiusReceptacle), 2) +
              Math.pow(this.position.z - j*garden.spacing, 2)
          );

          if (distanceFlower < flower.radiusFlower + 1) {
            console.log("Collide Flower");
           this.collision = true;
        }
          }
      }
  }
}
}
