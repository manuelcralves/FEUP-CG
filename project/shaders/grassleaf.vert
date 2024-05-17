attribute vec3 aVertexPosition;

//attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;
uniform sampler2D uSampler2;
//uniform float normScale;
uniform float timeFactor;

uniform float randomOffset1;
uniform float randomOffset2;
uniform float randomOffset3;

void main() {

	vec3 newPosition = aVertexPosition;
	
	float offset = timeFactor;
	
	if (newPosition.y > 0.0) {
	//newPosition.x += offset*newPosition.y*newPosition.y*0.5;
	newPosition.y += 0.0;
	newPosition.z += offset*newPosition.y*newPosition.y*0.5;
	}
	
	gl_Position = uPMatrix * uMVMatrix * vec4(newPosition, 1.0);
	vTextureCoord = aTextureCoord;
}