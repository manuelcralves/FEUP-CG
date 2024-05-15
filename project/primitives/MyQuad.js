import { CGFobject } from '../../lib/CGF.js';
/**
 * MyQuad
 * @constructor
 * @param {MyScene} scene - Reference to MyScene object
 * @param {Array} coords - Array of texture coordinates (optional)
 */
export class MyQuad extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
			-1, -1, 0, //0
			1, -1, 0,  //1
			-1, 1, 0,  //2
			1, 1, 0,   //3
	
			-1, -1, 0, //4
			1, -1, 0,  //5
			-1, 1, 0,  //6
			1, 1, 0    //7
		];
	
		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			1, 3, 2,
			4, 6, 5,
			5, 6, 7
		];
	
		//Facing Z positive and Z negative
		this.normals = [
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
	
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1
		];
	
		this.texCoords = [
			0, 1,
			1, 1,
			0, 0,
			1, 0,
	
			0, 1,
			1, 1,
			0, 0,
			1, 0
		]
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

