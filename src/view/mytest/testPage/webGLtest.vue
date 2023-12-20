<template>
  <div>
    webGLtest
    <canvas id="ice-2_2" width="600" height="100"></canvas>
  </div>
</template>

<script>
export default {
  name: "webGLtest",
  mounted() {
    const vertexCode = `
  void main () {
    // 顶点坐标
    gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
    // 顶点渲染像素大小
    gl_PointSize = 24.0;
  }
`;

    const fragmentCode = `
  void main () {
    // 顶点颜色——蓝色 (R, G, Bule, A)
    gl_FragColor = vec4(0.0, 0.0, 0.9, 1.0);
  }
`;

    const initGl = () => {
      const canvas = document.querySelector("#ice-2_2");
      const gl = canvas.getContext("webgl");

      const vertexShader = gl.createShader(gl.VERTEX_SHADER);
      gl.shaderSource(vertexShader, vertexCode);
      gl.compileShader(vertexShader);

      const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
      gl.shaderSource(fragmentShader, fragmentCode);
      gl.compileShader(fragmentShader);

      const program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      gl.useProgram(program);

      gl.drawArrays(gl.POINTS, 0, 1);
    };
    initGl();
  },
  methods: {}
};
</script>

<style></style>
