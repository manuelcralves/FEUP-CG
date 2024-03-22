attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

uniform float normScale;

varying vec4 coords;

void main() {
    float offset = sin(normScale); 
    vec3 newPosition = vec3(aVertexPosition.x + offset, aVertexPosition.y, aVertexPosition.z); 

	gl_Position = uPMatrix * uMVMatrix * vec4(newPosition, 1.0);

	coords=gl_Position;
}