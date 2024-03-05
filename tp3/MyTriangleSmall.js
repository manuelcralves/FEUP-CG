import {CGFobject} from '../lib/CGF.js';
/**
 * MyTriangleSmall
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTriangleSmall extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
			-1, 0, 0,	//0 - 0 Front
			1, 0, 0,	//1 - 1 Front
			0, 1, 0,	//2 - 2 Front
			-1, 0, 0,	//0 - 3 Back
			1, 0, 0,	//1 - 4 Back
			0, 1, 0,	//2 - 5 Back
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			5, 4, 3
		];

		this.normals = [];
		for(var i = 0; i < 3; i++) {
			this.normals.push(0, 0, 1);	
		}

		for(var i = 0; i < 3; i++) {
			this.normals.push(0, 0, -1);
		}

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

