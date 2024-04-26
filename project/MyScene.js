  import { CGFscene, CGFcamera, CGFaxis, CGFappearance, CGFshader, CGFtexture } from "../lib/CGF.js";
  import { MyPanorama } from "./objects/MyPanorama.js";
  import { MyPetal } from "./objects/MyPetal.js";
  import { MyPlane } from "./MyPlane.js";
  import { MyReceptacle } from "./objects/MyReceptacle.js";
  import { MySphere } from "./primitives/MySphere.js";
  import { MyStem } from "./objects/MyStem.js";
  import { MyFlower } from "./objects/MyFlower.js";
  import { MyGarden } from "./MyGarden.js";
  import { MyBee } from "./objects/MyBee.js";
  import { MyCircle } from "./primitives/MyCircle.js";
import { MyPollen } from "./objects/MyPollen.js";

  /**
   * MyScene
   * @constructor
   */
  export class MyScene extends CGFscene {
    constructor() {
      super();
    }
    init(application) {
      super.init(application);
      
      this.initCameras();
      this.initLights();

      //Background color
      this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

      this.gl.clearDepth(100.0);
      this.gl.enable(this.gl.DEPTH_TEST);
      this.gl.enable(this.gl.CULL_FACE);
      this.gl.depthFunc(this.gl.LEQUAL);

      //Textures
      this.earthTex = new CGFtexture(this, 'images/earth.jpg');
      this.earthAppearance = new CGFappearance(this);
      this.earthAppearance.setTexture(this.earthTex);
      this.earthAppearance.setTextureWrap('REPEAT', 'REPEAT');

      this.panoramaTex = new CGFtexture(this, 'images/panorama1.jpg');

      this.numRows = 1; 
      this.numCols = 1; 
      this.spacing = 1;

      //Initialize scene objects
      this.axis = new CGFaxis(this);
      this.plane = new MyPlane(this,30);
      this.sphere = new MySphere(this, 100, 50);
      this.panorama = new MyPanorama(this, this.panoramaTex);
      //let radius = Math.random() * (7 - 3) + 3;
      //this.flower = new MyFlower(this, radius, 6, [1.0,0.0,0.0], 1, [1.0,1.0,0.0], 0.25, 10,[0.0,1.0,0.0], [0.2,0.4,0.2], -Math.PI/4, Math.PI/4); 
      this.garden = new MyGarden(this, this.numRows, this.numCols, this.spacing);
      this.bee = new MyBee(this, -5, 3, -5, 0);
      this.pollen = new MyPollen(this);

      //Objects connected to MyInterface
      this.displayAxis = true;
      this.scaleFactor = 1;
      this.speedFactor = 1;

      this.enableTextures(true);

  this.texture = new CGFtexture(this, "images/terrain.jpg");
  this.appearance = new CGFappearance(this);
  this.appearance.setTexture(this.texture);
  this.appearance.setTextureWrap('REPEAT', 'REPEAT');

    this.setUpdatePeriod(1000/60.0);
    this.previousTime = 0;
    }
    initLights() {
      this.lights[0].setPosition(15, 0, 5, 1);
      this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
      this.lights[0].enable();
      this.lights[0].update();
    }
    initCameras() {
      this.camera = new CGFcamera(
        1.5,
        0.1,
        1000,
        vec3.fromValues(-3, 5, 3),
        vec3.fromValues(0, 0, 0)
      );
    }
    setDefaultAppearance() {
      this.setAmbient(0.2, 0.4, 0.8, 1.0);
      this.setDiffuse(0.2, 0.4, 0.8, 1.0);
      this.setSpecular(0.2, 0.4, 0.8, 1.0);
      this.setShininess(10.0);
    }
    display() {
      // ---- BEGIN Background, camera and axis setup

      this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA)

      this.gl.enable(this.gl.BLEND)

      // Clear image and depth buffer everytime we update the scene
      this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
      this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
      // Initialize Model-View matrix as identity (no transformation
      this.updateProjectionMatrix();
      this.loadIdentity();
      // Apply transformations corresponding to the camera position relative to the origin
      this.applyViewMatrix();

      // Draw axis
      if (this.displayAxis) this.axis.display();

      // ---- BEGIN Primitive drawing section

      /*this.pushMatrix();
      this.earthAppearance.apply();
      this.scale(20,20,20);
      this.sphere.display();
      this.popMatrix();*/

      /*this.pushMatrix();
      this.appearance.apply();
      this.translate(0,-100,0);
      this.scale(400,400,400);
      this.rotate(-Math.PI/2.0,1,0,0);
      this.plane.display();
      this.popMatrix();*/

      this.panorama.display();

      this.bee.display();

      this.garden.display();

      //this.flower.display();

      // ---- END Primitive drawing section
    }
    updateGarden() {
        this.garden = new MyGarden(this, this.numRows, this.numCols, this.spacing);
    }

    update(t){
      if(this.previousTime != 0){
        var deltaTime = t - this.previousTime;
        this.bee.update(deltaTime);
      }
      this.previousTime = t;

      this.checkKeys();
    }

    checkKeys() {
      var text="Keys pressed: ";
      var keysPressed=false;

      if (this.gui.isKeyPressed("KeyW")) {
        text+=" W ";
        keysPressed=true;
        this.bee.accelerate(0.1*this.speedFactor);
      }
      if (this.gui.isKeyPressed("KeyS")) {
        text+=" S ";
        keysPressed=true;
        this.bee.accelerate(-0.1*this.speedFactor);
      }
      if (this.gui.isKeyPressed("KeyA")) {
        text+=" A ";
        keysPressed=true;
        this.bee.turn(0.1*this.speedFactor);
      }
      if (this.gui.isKeyPressed("KeyD")) {
        text+=" D ";
        keysPressed=true;
        this.bee.turn(-0.1*this.speedFactor);
      }
      if (this.gui.isKeyPressed("KeyF")) {
        text+=" F ";
        keysPressed=true;
        this.bee.vertical(-0.1*this.speedFactor);
      }
      if (this.gui.isKeyPressed("KeyP")) {
        text+=" P ";
        keysPressed=true;
        this.bee.vertical(0.1*this.speedFactor);
      }
      if (this.gui.isKeyPressed("KeyG")) {
        text+=" G ";
        keysPressed=true;
        this.bee.stop();
      }
      if (this.gui.isKeyPressed("KeyR")) {
        text+=" R ";
        keysPressed=true;
        this.bee = new MyBee(this, 0, 30, 0, 0);
      }
      if (keysPressed)
        console.log(text);
    }
  }
