import {CGFobject} from '../lib/CGF.js';
/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyDiamond extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
			-1, 0, 0,	//0 - 0 Front
			0, -1, 0,	//1 - 1 Front
			0, 1, 0,	//2 - 2 Front
			1, 0, 0,	//3 - 3 Front
			-1, 0, 0,	//0 - 4 Back
			0, -1, 0,	//1 - 5 Back
			0, 1, 0,	//2 - 6 Back
			1, 0, 0		//3 - 7 Back
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			1, 3, 2,
			6, 5, 4,
			6, 7, 5
		];

		this.normals = [];

		for(var i=0; i < 4; i++) {
			this.normals.push(0,0, 1);
		}

		for(var i=0; i < 4; i++) {
			this.normals.push(0,0, -1);
		}

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

