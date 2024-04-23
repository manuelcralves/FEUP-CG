import { CGFobject, CGFappearance, CGFtexture } from '../../lib/CGF.js';
import { MySphere } from '../primitives/MySphere.js';
import { MyCylinder } from '../primitives/MyCylinder.js';
import { MyPetal } from './MyPetal.js';
import { MyCircle } from '../primitives/MyCircle.js';

export class MyBee extends CGFobject {
  constructor(scene) {
    super(scene);

    this.initBuffers();
    this.initAppearance();
  }

    initBuffers() {
        this.body = new MySphere(this.scene,100,100);
        this.head = new MySphere(this.scene,100,100);
        this.antenna = new MyCylinder(this.scene,100,100);
        this.antennaTop = new MySphere(this.scene,100,100);
        this.foot = new MyCylinder(this.scene,100,100);
        this.footJoint = new MySphere(this.scene,100,100);
        this.wing = new MyCircle(this.scene, 100, 1);
    }

  initAppearance() {
    this.bodyAppearance = new CGFappearance(this.scene);
    this.bodyAppearance.setAmbient(1.0,1.0,1.0, 1.0);     
    this.bodyAppearance.setDiffuse(1.0,1.0,1.0, 1.0);
    this.bodyTex = new CGFtexture(this.scene, 'images/bee_body.jpg');
    this.bodyAppearance.setTexture(this.bodyTex);
    this.bodyAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

    this.headAppearance = new CGFappearance(this.scene);
    this.headAppearance.setAmbient(0.937, 0.765, 0.0, 1.0); 
    this.headAppearance.setDiffuse(0.937, 0.765, 0.0, 1.0); 
    this.headTex = new CGFtexture(this.scene, 'images/bee_face.png');
    this.headAppearance.setTexture(this.headTex);
    this.headAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

    this.antennaAppearance = new CGFappearance(this.scene);
    this.antennaAppearance.setAmbient(0.0,0.0,0.0, 1.0);     
    this.antennaAppearance.setDiffuse(0.0,0.0,0.0, 1.0);

    this.antennaTopAppearance = new CGFappearance(this.scene);
    this.antennaTopAppearance.setAmbient(0.1,0.1,0.1, 1.0);     
    this.antennaTopAppearance.setDiffuse(0.1,0.1,0.1, 1.0);

    this.footAppearance = new CGFappearance(this.scene);
    this.footAppearance.setAmbient(0.0,0.0,0.0, 1.0);     
    this.footAppearance.setDiffuse(0.0,0.0,0.0, 1.0);

    this.footJointAppearance = new CGFappearance(this.scene);
    this.footJointAppearance.setAmbient(0.1,0.1,0.1, 1.0);     
    this.footJointAppearance.setDiffuse(0.1,0.1,0.1, 1.0);

    this.wingAppearance = new CGFappearance(this.scene);
    this.wingAppearance.setAmbient(0.624, 0.882, 0.976, 0.4); 
    this.wingAppearance.setDiffuse(0.624, 0.882, 0.976, 0.4); 
    this.wingAppearance.setSpecular(0.624, 0.882, 0.976, 0.4); 
    this.wingAppearance.setEmission(0.0, 0.0, 0.0, 0.0);
  }

  display() {
    //Body
    this.scene.pushMatrix();
    this.bodyAppearance.apply();
    this.scene.scale(2.5,1.5,1.5);
    this.scene.rotate(Math.PI/2,0,0,1);
    this.body.display();
    this.scene.popMatrix();

    //Head
    this.scene.pushMatrix();
    this.headAppearance.apply();
    this.scene.translate(-3,0.5,0);
    this.scene.scale(1.5,1.5,1.5);
    this.head.display();
    this.scene.popMatrix();

    //Antennas

    //LEFT
    this.scene.pushMatrix();
    this.antennaAppearance.apply();
    this.scene.translate(-3.5,1.5,0.5);
    this.scene.rotate(Math.PI/6, 0,0,1);
    this.scene.rotate(Math.PI/6, 1,0,0);
    this.scene.scale(0.05,1.5,0.05);
    this.scene.rotate(-Math.PI/2,1,0,0);
    this.antenna.display();
    this.scene.popMatrix();

    //RIGHT
    this.scene.pushMatrix();
    this.antennaAppearance.apply();
    this.scene.translate(-3.5,1.5,-0.5);
    this.scene.rotate(Math.PI/6, 0,0,1);
    this.scene.rotate(-Math.PI/6, 1,0,0);
    this.scene.scale(0.05,1.5,0.05);
    this.scene.rotate(-Math.PI/2,1,0,0);
    this.antenna.display();
    this.scene.popMatrix();

    //Antenna Tops

    //LEFT
    this.scene.pushMatrix();
    this.antennaTopAppearance.apply();
    this.scene.translate(-4.15,2.65,1.25);
    this.scene.rotate(Math.PI/6, 0,0,1);
    this.scene.rotate(Math.PI/6, 1,0,0);
    this.scene.scale(0.1,0.1,0.1);
    this.antennaTop.display();
    this.scene.popMatrix();

    //RIGHT
    this.scene.pushMatrix();
    this.antennaTopAppearance.apply();
    this.scene.translate(-4.15,2.65,-1.25);
    this.scene.rotate(Math.PI/6, 0,0,1);
    this.scene.rotate(Math.PI/6, 1,0,0);
    this.scene.scale(0.1,0.1,0.1);
    this.antennaTop.display();
    this.scene.popMatrix();

    //Feet (Diagonal)

    //LEFT FRONT
    this.scene.pushMatrix();
    this.footAppearance.apply();
    this.scene.translate(-1,0,1);
    this.scene.rotate(Math.PI/6,1,0,0);
    this.scene.scale(0.05,0.05,1.5);
    this.foot.display();
    this.scene.popMatrix();

    //RIGHT FRONT
    this.scene.pushMatrix();
    this.footAppearance.apply();
    this.scene.translate(-1,0,-1);
    this.scene.rotate(5*Math.PI/6,1,0,0);
    this.scene.scale(0.05,0.05,1.5);
    this.foot.display();
    this.scene.popMatrix();

    //LEFT MIDDLE
    this.scene.pushMatrix();
    this.footAppearance.apply();
    this.scene.translate(0,0,1);
    this.scene.rotate(Math.PI/6,1,0,0);
    this.scene.scale(0.05,0.05,1.5);
    this.foot.display();
    this.scene.popMatrix();

    //RIGHT MIDDLE
    this.scene.pushMatrix();
    this.footAppearance.apply();
    this.scene.translate(0,0,-1);
    this.scene.rotate(5*Math.PI/6,1,0,0);
    this.scene.scale(0.05,0.05,1.5);
    this.foot.display();
    this.scene.popMatrix();

    //LEFT BACK
    this.scene.pushMatrix();
    this.footAppearance.apply();
    this.scene.translate(1,0,1);
    this.scene.rotate(Math.PI/6,1,0,0);
    this.scene.scale(0.05,0.05,1.5);
    this.foot.display();
    this.scene.popMatrix();

    //RIGHT BACK
    this.scene.pushMatrix();
    this.footAppearance.apply();
    this.scene.translate(1,0,-1);
    this.scene.rotate(5*Math.PI/6,1,0,0);
    this.scene.scale(0.05,0.05,1.5);
    this.foot.display();
    this.scene.popMatrix();

    //Feet (Vertical)

    //LEFT FRONT
    this.scene.pushMatrix();
    this.footAppearance.apply();
    this.scene.translate(-1,0-1.5*Math.sin(Math.PI/6),1+1.5*Math.cos(Math.PI/6));
    this.scene.rotate(Math.PI/2,1,0,0);
    this.scene.scale(0.05,0.05,1);
    this.foot.display();
    this.scene.popMatrix();

    //RIGHT FRONT
    this.scene.pushMatrix();
    this.footAppearance.apply();
    this.scene.translate(-1,0-1.5*Math.sin(5*Math.PI/6),-1+1.5*Math.cos(5*Math.PI/6));
    this.scene.rotate(Math.PI/2,1,0,0);
    this.scene.scale(0.05,0.05,1);
    this.foot.display();
    this.scene.popMatrix();

    //LEFT MIDDLE
    this.scene.pushMatrix();
    this.footAppearance.apply();
    this.scene.translate(0,0-1.5*Math.sin(Math.PI/6),1+1.5*Math.cos(Math.PI/6));
    this.scene.rotate(Math.PI/2,1,0,0);
    this.scene.scale(0.05,0.05,1);
    this.foot.display();
    this.scene.popMatrix();

    //RIGHT MIDDLE
    this.scene.pushMatrix();
    this.footAppearance.apply();
    this.scene.translate(0,0-1.5*Math.sin(5*Math.PI/6),-1+1.5*Math.cos(5*Math.PI/6));
    this.scene.rotate(Math.PI/2,1,0,0);
    this.scene.scale(0.05,0.05,1);
    this.foot.display();
    this.scene.popMatrix();

    //LEFT BACK
    this.scene.pushMatrix();
    this.footAppearance.apply();
    this.scene.translate(1,0-1.5*Math.sin(Math.PI/6),1+1.5*Math.cos(Math.PI/6));
    this.scene.rotate(Math.PI/2,1,0,0);
    this.scene.scale(0.05,0.05,1);
    this.foot.display();
    this.scene.popMatrix();

    //RIGHT BACK
    this.scene.pushMatrix();
    this.footAppearance.apply();
    this.scene.translate(1,0-1.5*Math.sin(5*Math.PI/6),-1+1.5*Math.cos(5*Math.PI/6));
    this.scene.rotate(Math.PI/2,1,0,0);
    this.scene.scale(0.05,0.05,1);
    this.foot.display();
    this.scene.popMatrix();

    //Feet Joints

    //LEFT FRONT
    this.scene.pushMatrix();
    this.footJointAppearance.apply();
    this.scene.translate(-1,0-1.5*Math.sin(Math.PI/6),1+1.5*Math.cos(Math.PI/6));
    this.scene.rotate(Math.PI/6,1,0,0);
    this.scene.scale(0.1,0.1,0.1);
    this.footJoint.display();
    this.scene.popMatrix();

    //RIGHT FRONT
    this.scene.pushMatrix();
    this.footJointAppearance.apply();
    this.scene.translate(-1,0-1.5*Math.sin(5*Math.PI/6),-1+1.5*Math.cos(5*Math.PI/6));
    this.scene.rotate(5*Math.PI/6,1,0,0);
    this.scene.scale(0.1,0.1,0.1);
    this.footJoint.display();
    this.scene.popMatrix();

    //LEFT MIDDLE
    this.scene.pushMatrix();
    this.footJointAppearance.apply();
    this.scene.translate(0,0-1.5*Math.sin(Math.PI/6),1+1.5*Math.cos(Math.PI/6));
    this.scene.rotate(Math.PI/6,1,0,0);
    this.scene.scale(0.1,0.1,0.1);
    this.footJoint.display();
    this.scene.popMatrix();

    //RIGHT MIDDLE
    this.scene.pushMatrix();
    this.footJointAppearance.apply();
    this.scene.translate(0,0-1.5*Math.sin(5*Math.PI/6),-1+1.5*Math.cos(5*Math.PI/6));
    this.scene.rotate(5*Math.PI/6,1,0,0);
    this.scene.scale(0.1,0.1,0.1);
    this.footJoint.display();
    this.scene.popMatrix();

    //LEFT BACK
    this.scene.pushMatrix();
    this.footJointAppearance.apply();
    this.scene.translate(1,0-1.5*Math.sin(Math.PI/6),1+1.5*Math.cos(Math.PI/6));
    this.scene.rotate(Math.PI/6,1,0,0);
    this.scene.scale(0.1,0.1,0.1);
    this.footJoint.display();
    this.scene.popMatrix();

    //RIGHT BACK
    this.scene.pushMatrix();
    this.footJointAppearance.apply();
    this.scene.translate(1,0-1.5*Math.sin(5*Math.PI/6),-1+1.5*Math.cos(5*Math.PI/6));
    this.scene.rotate(5*Math.PI/6,1,0,0);
    this.scene.scale(0.1,0.1,0.1);
    this.footJoint.display();
    this.scene.popMatrix();

    //Wings

    //LEFT FRONT
    this.scene.pushMatrix();
    this.wingAppearance.apply();
    this.scene.translate(-0.25,2,-1);
    this.scene.rotate(Math.PI/4,1,0,0);
    this.scene.scale(0.5,1,1);
    this.wing.display();
    this.scene.popMatrix();

    //RIGHT FRONT
    this.scene.pushMatrix();
    this.wingAppearance.apply();
    this.scene.translate(-0.25,2,1);
    this.scene.rotate(3*Math.PI/4,1,0,0);
    this.scene.scale(0.5,1,1);
    this.wing.display();
    this.scene.popMatrix();

    //LEFT BACK
    this.scene.pushMatrix();
    this.wingAppearance.apply();
    this.scene.translate(0.25,1.75,-1);
    this.scene.rotate(Math.PI/4,1,0,0);
    this.scene.scale(0.3,0.7,0.7);
    this.wing.display();
    this.scene.popMatrix();

    //RIGHT BACK
    this.scene.pushMatrix();
    this.wingAppearance.apply();
    this.scene.translate(0.25,1.75,1);
    this.scene.rotate(3*Math.PI/4,1,0,0);
    this.scene.scale(0.3,0.7,0.7);
    this.wing.display();
    this.scene.popMatrix();
  }
}