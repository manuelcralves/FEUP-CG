import { CGFobject, CGFappearance, CGFtexture } from '../../lib/CGF.js';
import {MyGrassLeaf} from './objects/MyGrassLeaf.js';

export class MyLawn {
    constructor(scene, texture) {
    this.grass = [];
    this.lawn_size = 150;
    this.texture = texture;

        for (leaf = 0; leaf < lawn_size; leaf++) {
    this.grass.push(new MyGrassLeaf(scene, Math.random()*4 +1, texture));
        }
    }

    display() {
    for (let leaf = 0; leaf < this.grass.length; leaf++) {
        this.scene.pushMatrix();
        this.grass[leaf].display();
        this.scene.popMatrix();
        }
    }
}