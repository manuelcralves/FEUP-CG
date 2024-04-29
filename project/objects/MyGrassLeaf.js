import { CGFobject, CGFappearance, CGFtexture } from '../../lib/CGF.js';
import { MyTriangle } from '../primitives/MyTriangle.js';


export class MyGrassLeaf extends CGFobject {
    constructor(scene, stacks,texture) {
        super(scene);
        this.stacks = stacks;
        this.texture = texture;
        this.triangle1 = new MyTriangle(this.scene);
        this.triangle2 = new MyTriangle(this.scene);
        let colorLeaf = [0, Math.random()*(0.4-0.1) +0.1, 0];

        this.rTriangle = colorLeaf[0];
        this.gTriangle = colorLeaf[1];
        this.bTriangle = colorLeaf[2];

        this.initAppearance();    

        this.triangleAppearance = new CGFappearance(this.scene);
        this.triangleAppearance.setAmbient(this.rTriangle, this.gTriangle, this.bTriangle, 1);
        this.triangleAppearance.setDiffuse(this.rTriangle, this.gTriangle, this.bTriangle, 1);
        this.triangleAppearance.setSpecular(this.rTriangle, this.gTriangle, this.bTriangle, 1);
        this.triangleTexture = new CGFtexture(this.scene, this.texture);
        this.triangleAppearance.setTexture(this.triangleTexture);
        this.triangleAppearance.setTextureWrap('REPEAT', 'REPEAT');
    }
    }