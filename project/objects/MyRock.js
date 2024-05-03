import { CGFobject, CGFappearance, CGFtexture } from '../../lib/CGF.js';
import { MySphereVariable } from '../primitives/MySphereVariable.js';

export class MyRock extends CGFobject {
  constructor(scene, slices, stacks, texture, x = 0, y = 0, z = 0, scale) {
    super(scene);
    this.stacks = stacks;
    this.slices = slices;
    this.texture = texture;

    this.x = x;
    this.y = y;
    this.z = z;
    this.x_scale = Math.random() + scale;
    this.y_scale = Math.random() * 0.2 + scale;
    this.z_scale = Math.random() + scale;

    this.stoneTex = new CGFtexture(this.scene, this.texture);


    this.initBuffers();
    this.initAppearance();
  }

  initBuffers() {
    this.rock = new MySphereVariable(this.scene, this.slices, this.stacks, false, true);


    console.log(this.rock.vertices);
    console.log(this.rock.indices);
    console.log(this.rock.texCoords);
    console.log("Vertices: " + this.rock.vertices.length / 3 + "\nIndices: " + this.rock.indices.length / 3, "\nTextcoords: " + this.rock.texCoords.length / 2);
  }

  initAppearance() {
    this.appearance = new CGFappearance(this.scene);
    this.appearance.setAmbient(1, 1, 1, 1.0);
    this.appearance.setDiffuse(1, 1, 1, 1.0);
    this.appearance.setTexture(this.stoneTex);
  }

  display() {
    this.scene.pushMatrix();
    this.appearance.apply();
    this.scene.scale(this.x_scale, this.y_scale, this.z_scale);
    this.scene.translate(this.x, this.y + 1, this.z);
    this.rock.display();
    this.scene.popMatrix();
  }
}