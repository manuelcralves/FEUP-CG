attribute vec3 aVertexPosition;

//attribute vec3 aVertexNormal;
//attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

//varying vec2 vTextureCoord;
//uniform sampler2D uSampler2;
//uniform float normScale;
//uniform float timeFactor;

uniform float randomOffset1;
uniform float randomOffset2;
uniform float randomOffset3;

void main() {

	vec3 newPosition =aVertexPosition;
	if (newPosition.y > 0) {
	newPosition.x += randomOffset1;
	newPosition.y += randomOffset2;
	newPosition.z += randomOffset3;
	}
	
	gl_Position = uPMatrix * uMVMatrix * vec4(newPosition, 1.0);

}