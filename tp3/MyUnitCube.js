import { CGFobject } from '../lib/CGF.js';
/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCube extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [
            0.5, 0.5, 0.5,      //0 - 0 Top
            0.5, 0.5, 0.5,      //0 - 1 Right
            0.5, 0.5, 0.5,      //0 - 2 Front
            0.5, 0.5, -0.5,     //1 - 3 Top
            0.5, 0.5, -0.5,     //1 - 4 Right 
            0.5, 0.5, -0.5,     //1 - 5 Back
            0.5, -0.5, 0.5,     //2 - 6 Right
            0.5, -0.5, 0.5,     //2 - 7 Front
            0.5, -0.5, 0.5,     //2 - 8 Bottom
            0.5, -0.5, -0.5,    //3 - 9 Right
            0.5, -0.5, -0.5,    //3 - 10 Back
            0.5, -0.5, -0.5,    //3 - 11 Bottom
            -0.5, 0.5, 0.5,     //4 - 12 Top
            -0.5, 0.5, 0.5,     //4 - 13 Front 
            -0.5, 0.5, 0.5,     //4 - 14 Left
            -0.5, 0.5, -0.5,    //5 - 15 Top
            -0.5, 0.5, -0.5,    //5 - 16 Back
            -0.5, 0.5, -0.5,    //5 - 17 Left
            -0.5, -0.5, 0.5,	//6 - 18 Front
            -0.5, -0.5, 0.5,	//6 - 19 Left
            -0.5, -0.5, 0.5,	//6 - 20 Bottom
            -0.5, -0.5, -0.5,	//7 - 21 Back
            -0.5, -0.5, -0.5,	//7 - 22 Left
            -0.5, -0.5, -0.5,	//7 - 23 Bottom
        ];

        this.normals = [
            0, 1, 0,
            1, 0, 0,
            0, 0, 1,
            0, 1, 0,
            1, 0, 0,
            0, 0, -1,
            1, 0, 0,
            0, 0, 1,
            0, -1, 0,
            1, 0, 0,
            0, 0, -1,
            0, -1, 0,
            0, 1, 0,
            0, 0, 1,
            -1, 0, 0,
            0, 1, 0,
            0, 0, -1,
            -1, 0, 0,
            0, 0, 1,
            -1, 0, 0,
            0, -1, 0,
            0, 0, -1,
            -1, 0, 0,
            0, -1, 0
        ]

        //Counter-clockwise reference of vertices
        this.indices = [
            // Right face
            6, 4, 1,
            9, 4, 6,

            // Top face
            3, 12, 0,
            15, 12, 3,

            // Front face
            13, 7, 2,
            18, 7, 13,

            // Back face
            10, 16, 5,
            21, 16, 10,

            // Left face
            17, 19, 14,
            22, 19, 17,

            // Bottom face
            20, 11, 8,
            23, 11, 20 
        ];
        

        //The defined indices (and corresponding vertices)
        //will be read in groups of three to draw triangles
        this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }
}

