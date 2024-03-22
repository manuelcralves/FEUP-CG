#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
uniform sampler2D uSampler;

void main() {

	vec4 color = texture2D(uSampler, vTextureCoord);

	vec4 colorGray = color;
    
	colorGray.r = 0.299* color.r + 0.587 * color.g + 0.114 * color.b;
	colorGray.g = colorGray.r;
	colorGray.b = colorGray.r;

	gl_FragColor = colorGray;
}