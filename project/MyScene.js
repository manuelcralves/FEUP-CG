import { CGFscene, CGFcamera, CGFaxis, CGFappearance, CGFshader, CGFtexture } from "../lib/CGF.js";
import { MyPanorama } from "./objects/panorama/MyPanorama.js";
import { MyPlane } from "./MyPlane.js";
import { MyGarden } from "./objects/garden/MyGarden.js";
import { MyBee } from "./objects/bee/MyBee.js";
import { MyHive } from "./objects/hive/MyHive.js";
import { MyLawn } from "./objects/grass/MyLawn.js";
import { MyRockSet } from "./objects/rock/MyRockSet.js";

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

    this.numRows = 5;
    this.numCols = 5;
    this.spacing = 10;

    //Initialize scene objects
    this.axis = new CGFaxis(this);
    this.plane = new MyPlane(this, 30);
    //this.sphere = new MySphere(this, 100, 50);
    this.panorama = new MyPanorama(this, this.panoramaTex);
    //let radius = Math.random() * (7 - 3) + 3;
    //this.flower = new MyFlower(this, radius, 6, [1.0, 0.0, 0.0], 1, [1.0, 1.0, 0.0], 0.25, 10, [0.0, 1.0, 0.0], [0.2, 0.4, 0.2], -Math.PI / 4, Math.PI / 4);
    this.garden = new MyGarden(this, this.numRows, this.numCols, this.spacing);
    this.bee = new MyBee(this, 15, 13, -10, 0);
    //this.pollen = new MyPollen(this);

    //this.rock = new MyRock(this, 7, 5, './images/stone.jpg', 0, 0, 0, 1);
    this.rockset1 = new MyRockSet(this, 7, 8, './images/stone.jpg');
    this.rockset2 = new MyRockSet(this, 7, 5, './images/stone.jpg');
    this.rockset3 = new MyRockSet(this, 7, 6, './images/stone.jpg');
    this.hive = new MyHive(this, 15, 0.1, -10, false);
    this.lawn = new MyLawn(this);

    //Objects connected to MyInterface
    this.displayAxis = true;
    this.scaleFactor = 1;
    this.speedFactor = 1;

    this.enableTextures(true);

    this.texture = new CGFtexture(this, "images/garden.jpg");
    this.appearance = new CGFappearance(this);
    this.appearance.setAmbient(0, 0.8, 0, 1);
    this.appearance.setDiffuse(0, 0.8, 0, 1);
    this.appearance.setSpecular(0, 0.8, 0, 1);
    this.appearance.setTexture(this.texture);
    this.appearance.setTextureWrap('REPEAT', 'REPEAT');

    this.setUpdatePeriod(1000 / 60.0);

    this.elapsedTime = 0;
    this.modifier = 1;
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
      vec3.fromValues(10, 17, -15),
      vec3.fromValues(15, 13, -10)
    );
  }
  setDefaultAppearance() {
    this.setAmbient(0.2, 0.4, 0.8, 0.4);
    this.setDiffuse(0.2, 0.4, 0.8, 0.4);
    this.setSpecular(0.2, 0.4, 0.8, 0.4);
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

    this.pushMatrix();
    this.appearance.apply();
    this.translate(20, 0, 20);
    this.scale(200, 200, 200);
    this.rotate(-Math.PI / 2.0, 1, 0, 0);
    this.plane.display();
    this.popMatrix();

    this.panorama.display();
    this.bee.display();

    //this.flower.display();
    this.garden.display();

    this.hive.display();

    //this.rock.display();

    this.pushMatrix()
    this.translate(30, 0, -10);
    this.rockset1.display();
    this.popMatrix();

    this.pushMatrix();
    this.translate(45, 0, -15);
    this.rockset2.display();
    this.popMatrix();

    this.pushMatrix();
    this.translate(15, 0, -20);
    this.rockset3.display();
    this.popMatrix(); 

    this.pushMatrix();
    this.scale(1, 0.5, 1);
    this.lawn.display();
    this.popMatrix();
    this.setActiveShader(this.defaultShader);


    // ---- END Primitive drawing section
  }
  updateGarden() {
    this.garden = new MyGarden(this, this.numRows, this.numCols, this.spacing);
  }

  update(t) {
    this.elapsedTime++;
    /*     let x_offset = Math.random() * 0.5 + 0.1;
        let y_offset = Math.random() * 0.5 + 0.1;
        let z_offset = Math.random() * 0.5 + 0.1; */
    let oscillation;
    let cycle = 500 * this.modifier;

    if (this.elapsedTime / cycle > 1) {
      this.modifier = Math.random() + 0.5;
      this.elapsedTime = 0;
    }
    oscillation = 0.1 * Math.sin(t / (500 * this.modifier));
    /*     this.lawn.lawnShader.setUniformsValues({ randomOffset1: x_offset });
        this.lawn.lawnShader.setUniformsValues({ randomOffset2: y_offset });
        this.lawn.lawnShader.setUniformsValues({ randomOffset3: z_offset }); */
    this.lawn.lawnShader.setUniformsValues({ timeFactor: oscillation });

    if (this.previousTime != 0) {
      var deltaTime = t - this.previousTime;
      this.bee.update(deltaTime);
    }
    this.previousTime = t;
    this.checkKeys();
  }

  checkKeys() {
    var text = "Keys pressed: ";
    var keysPressed = false;

    if (this.gui.isKeyPressed("KeyW")) {
      text += " W ";
      keysPressed = true;
      this.bee.accelerate(0.1 * this.speedFactor);
    }
    if (this.gui.isKeyPressed("KeyS")) {
      text += " S ";
      keysPressed = true;
      this.bee.accelerate(-0.1 * this.speedFactor);
    }
    if (this.gui.isKeyPressed("KeyA")) {
      text += " A ";
      keysPressed = true;
      this.bee.turn(0.1 * this.speedFactor);
    }
    if (this.gui.isKeyPressed("KeyD")) {
      text += " D ";
      keysPressed = true;
      this.bee.turn(-0.1 * this.speedFactor);
    }
    if (this.gui.isKeyPressed("KeyF")) {
      text += " F ";
      keysPressed = true;
      this.bee.vertical(-0.1 * this.speedFactor);
    }
    if (this.gui.isKeyPressed("KeyP")) {
      text += " P ";
      keysPressed = true;
      this.bee.vertical(0.1 * this.speedFactor);
    }
    if (this.gui.isKeyPressed("KeyG")) {
      text += " G ";
      keysPressed = true;
      this.bee.stop();
    }
    if (this.gui.isKeyPressed("KeyR")) {
      text += " R ";
      keysPressed = true;
      this.bee = new MyBee(this, 15, 13, -10, 0);
      //this.updateGarden();
    }
    if (this.gui.isKeyPressed("KeyO")) {
      text += " O ";
      keysPressed = true;
      var dropPollen = this.bee.goToHive(15, -10);
      if (this.bee.grabbingPollen && dropPollen && this.bee.position.y < 5) {
        this.bee.stop();
        this.hive.hasPollen = true;
        this.bee.grabbingPollen = false;
        this.hive.display();
      }
      console.log(this.bee.grabbingPollen);
      console.log(this.hive.hasPollen);
      console.log(dropPollen);
    }
    if (keysPressed)
      console.log(text);
  }
}
