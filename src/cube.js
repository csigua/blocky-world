class Cube {
  constructor() {
    this.type = 'cube';
  //   this.position = [0.0, 0.0, 0.0];
    this.color = [1.0, 1.0, 1.0, 1.0];
  //   this.size = 5.0;
  //   this.segments = 10;
  this.matrix = new Matrix4();
  this.textureNum = -2;
  }

  render() {
    // var xy = this.position;
    var rgba = this.color;
    // var size = this.size;

    // pass the texture number
    gl.uniform1i(u_whichTexture, this.textureNum);

    // Pass the color of a point to u_FragColor variable
    gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

    // pass the matrix to u_ModelMatrix attribute
    gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);

    // front of cube
    gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
    drawTriangle3DUV([-0.5,-0.5,-0.5,     0.5,0.5,-0.5,      0.5,-0.5,-0.5], [0,0,     1,1,     1,0]);
    drawTriangle3DUV([-0.5,-0.5,-0.5,     -0.5,0.5,-0.5,      0.5,0.5,-0.5], [0,0,     0,1,     1,1]);

    // back of cube
    gl.uniform4f(u_FragColor, rgba[0]*0.7, rgba[1]*0.7, rgba[2]*0.7, rgba[3]);
    drawTriangle3DUV([-0.5,-0.5,0.5,     0.5,0.5,0.5,      0.5,-0.5,0.5], [0,0,     1,1,     1,0]);
    drawTriangle3DUV([-0.5,-0.5,0.5,     -0.5,0.5,0.5,      0.5,0.5,0.5], [0,0,     0,1,     1,1]);

    // top of cube
    gl.uniform4f(u_FragColor, rgba[0]*0.9, rgba[1]*0.9, rgba[2]*0.9, rgba[3]);
    drawTriangle3DUV([-0.5,0.5,-0.5,     -0.5,0.5,0.5,      0.5,0.5,0.5], [0,0,     0,1,     1,1]);
    drawTriangle3DUV([-0.5,0.5,-0.5,     0.5,0.5,0.5,      0.5,0.5,-0.5], [0,0,     1,1,     1,0]);

    // bottom of cube
    gl.uniform4f(u_FragColor, rgba[0]*0.9, rgba[1]*0.9, rgba[2]*0.9, rgba[3]);
    drawTriangle3DUV([-0.5,-0.5,-0.5,     -0.5,-0.5,0.5,      0.5,-0.5,0.5], [0,0,     0,1,     1,1]);
    drawTriangle3DUV([-0.5,-0.5,-0.5,     0.5,-0.5,0.5,      0.5,-0.5,-0.5], [0,0,     1,1,     1,0]);

    // left of cube
    gl.uniform4f(u_FragColor, rgba[0]*0.8, rgba[1]*0.8, rgba[2]*0.8, rgba[3]);
    drawTriangle3DUV([-0.5,0.5,-0.5,     -0.5,0.5,0.5,      -0.5,-0.5,0.5], [0,0,     1,0,     1,1]);
    drawTriangle3DUV([-0.5,0.5,-0.5,     -0.5,-0.5,0.5,      -0.5,-0.5,-0.5], [0,0,     1,1,     0,1]);

    // right of cube
    gl.uniform4f(u_FragColor, rgba[0]*0.8, rgba[1]*0.8, rgba[2]*0.8, rgba[3]);
    drawTriangle3DUV([0.5,0.5,0.5,     0.5,-0.5,-0.5,      0.5,-0.5,0.5], [0,0,     1,0,     1,1]);
    drawTriangle3DUV([0.5,0.5,0.5,     0.5,0.5,-0.5,      0.5,-0.5,-0.5], [0,0,     1,1,     0,1]);

  }

  renderFast() {
    var rgba = this.color;

    gl.uniform1i(u_whichTexture, this.textureNum);

    // Pass the color of a point to u_FragColor variable
    gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

    // Pass the matrix to u_ModelMatrix attribute
    gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);

    var allverts = [];
    var allUVs = [];

    allverts = allverts.concat([-0.5,-0.5,-0.5,     0.5,0.5,-0.5,      0.5,-0.5,-0.5]);
    allUVs = allUVs.concat([0,0,   1,1,   1,0]);
    allverts = allverts.concat([-0.5,-0.5,-0.5,     -0.5,0.5,-0.5,      0.5,0.5,-0.5]);
    allUVs = allUVs.concat([0,0,   0,1,   1,1]);

    allverts = allverts.concat([-0.5,-0.5,0.5,     0.5,0.5,0.5,      0.5,-0.5,0.5]);
    allUVs = allUVs.concat([0,0,   1,1,   1,0]);
    allverts = allverts.concat([-0.5,-0.5,0.5,     -0.5,0.5,0.5,      0.5,0.5,0.5]);
    allUVs = allUVs.concat([0,0,   0,1,   1,1]);

    allverts = allverts.concat([-0.5,0.5,-0.5,     -0.5,0.5,0.5,      0.5,0.5,0.5]);
    allUVs = allUVs.concat([0,0,   0,1,   1,1]);
    allverts = allverts.concat([-0.5,0.5,-0.5,     0.5,0.5,0.5,      0.5,0.5,-0.5]);
    allUVs = allUVs.concat([0,0,   1,1,   1,0]);

    allverts = allverts.concat([-0.5,-0.5,-0.5,     -0.5,-0.5,0.5,      0.5,-0.5,0.5]);
    allUVs = allUVs.concat([0,0,   0,1,   1,1]);
    allverts = allverts.concat([-0.5,-0.5,-0.5,     0.5,-0.5,0.5,      0.5,-0.5,-0.5]);
    allUVs = allUVs.concat([0,0,   1,1,   1,0]);

    allverts = allverts.concat([-0.5,0.5,-0.5,     -0.5,0.5,0.5,      -0.5,-0.5,0.5]);
    allUVs = allUVs.concat([0,0,   0,1,   1,1]);
    allverts = allverts.concat([-0.5,0.5,-0.5,     -0.5,-0.5,0.5,      -0.5,-0.5,-0.5]);
    allUVs = allUVs.concat([0,0,   1,1,   1,0]);

    allverts = allverts.concat([0.5,0.5,0.5,     0.5,-0.5,-0.5,      0.5,-0.5,0.5]);
    allUVs = allUVs.concat([0,0,   0,1,   1,1]);
    allverts = allverts.concat([0.5,0.5,0.5,     0.5,0.5,-0.5,      0.5,-0.5,-0.5]);
    allUVs = allUVs.concat([0,0,   1,1,   1,0]);

    drawTriangle3DUV(allverts, allUVs);
  }
}

class Cube2 {
  constructor() {
    this.type = 'cube';
  //   this.position = [0.-0.5, 0.-0.5, 0.0];
    this.color = [1.-0.5, 1.-0.5, 1.-0.5, 1.0];
  //   this.size = 5.0;
  //   this.segments = 10;
  this.matrix = new Matrix4();
  this.textureNum = -2;
  }

  render() {
    // var xy = this.position;
    var rgba = this.color;
    // var size = this.size;

    // pass the texture number
    gl.uniform1i(u_whichTexture, this.textureNum);

    // Pass the color of a point to u_FragColor variable
    gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

    // pass the matrix to u_ModelMatrix attribute
    gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);

    // front of cube
    gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
    drawTriangle3DUV([0,0,0,   1,1,0,   1,0,0], [0,0,     1,1,     1,0]);
    drawTriangle3DUV([0,0,0,   0,1,0,   1,1,0], [0,0,     0,1,     1,1]);

    // back of cube
    gl.uniform4f(u_FragColor, rgba[0]*0.7, rgba[1]*0.7, rgba[2]*0.7, rgba[3]);
    drawTriangle3DUV([0,0,1,   1,1,1,   1,0,1], [0,0,     1,1,     1,0]);
    drawTriangle3DUV([0,0,1,   0,1,1,   1,1,1], [0,0,     0,1,     1,1]);

    // top of cube
    gl.uniform4f(u_FragColor, rgba[0]*0.9, rgba[1]*0.9, rgba[2]*0.9, rgba[3]);
    drawTriangle3DUV([0,1,0,   0,1,1,   1,1,1], [0,0,     0,1,     1,1]);
    drawTriangle3DUV([0,1,0,   1,1,1,   1,1,0], [0,0,     1,1,     1,0]);

    // bottom of cube
    gl.uniform4f(u_FragColor, rgba[0]*0.9, rgba[1]*0.9, rgba[2]*0.9, rgba[3]);
    drawTriangle3DUV([0,0,0,   0,0,1,   1,0,1], [0,0,     0,1,     1,1]);
    drawTriangle3DUV([0,0,0,   1,0,1,   1,0,0], [0,0,     1,1,     1,0]);

    // left of cube
    gl.uniform4f(u_FragColor, rgba[0]*0.8, rgba[1]*0.8, rgba[2]*0.8, rgba[3]);
    drawTriangle3DUV([0,0,0,   0,1,0,   0,1,1], [0,0,     1,0,     1,1]);
    drawTriangle3DUV([0,0,0,   0,1,1,   0,0,1], [0,0,     1,1,     0,1]);

    // right of cube
    gl.uniform4f(u_FragColor, rgba[0]*0.8, rgba[1]*0.8, rgba[2]*0.8, rgba[3]);
    drawTriangle3DUV([1,0,0,   1,1,0,   1,1,1], [0,0,     1,0,     1,1]);
    drawTriangle3DUV([1,0,0,   1,1,1,   1,0,1], [0,0,     1,1,     0,1]);
  }

  renderFast() {
    var rgba = this.color;

    gl.uniform1i(u_whichTexture, this.textureNum);

    // Pass the color of a point to u_FragColor variable
    gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

    // Pass the matrix to u_ModelMatrix attribute
    gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);

    var allverts = [];
    var allUVs = [];

    allverts = allverts.concat([0,0,0,   1,1,0,   1,0,0]);
    allUVs = allUVs.concat([0,0,   1,1,   1,0]);
    allverts = allverts.concat([0,0,0,   0,1,0,   1,1,0]);
    allUVs = allUVs.concat([0,0,   0,1,   1,1]);

    allverts = allverts.concat([0,0,1,   1,1,1,   1,0,1]);
    allUVs = allUVs.concat([0,0,   1,1,   1,0]);
    allverts = allverts.concat([0,0,1,   0,1,1,   1,1,1]);
    allUVs = allUVs.concat([0,0,   0,1,   1,1]);

    allverts = allverts.concat([0,1,0,   0,1,1,   1,1,1]);
    allUVs = allUVs.concat([0,0,   0,1,   1,1]);
    allverts = allverts.concat([0,1,0,   1,1,1,   1,1,0]);
    allUVs = allUVs.concat([0,0,   1,1,   1,0]);

    allverts = allverts.concat([0,0,0,   0,0,1,   1,0,1]);
    allUVs = allUVs.concat([0,0,   0,1,   1,1]);
    allverts = allverts.concat([0,0,0,   1,0,1,   1,0,0]);
    allUVs = allUVs.concat([0,0,   1,1,   1,0]);

    allverts = allverts.concat([0,0,0,   0,1,0,   0,1,1]);
    allUVs = allUVs.concat([0,0,   0,1,   1,1]);
    allverts = allverts.concat([0,0,0,   0,1,1,   0,0,1]);
    allUVs = allUVs.concat([0,0,   1,1,   1,0]);

    allverts = allverts.concat([1,0,0,   1,1,0,   1,1,1]);
    allUVs = allUVs.concat([0,0,   0,1,   1,1]);
    allverts = allverts.concat([1,0,0,   1,1,1,   1,0,1]);
    allUVs = allUVs.concat([0,0,   1,1,   1,0]);

    drawTriangle3DUV(allverts, allUVs);
  }

  clear() {
    drawTriangle3DUV([], []);
  }
}