#!/usr/bin/node

module.exports = class Rectangle {
  constructor(w, h) {
    if (w < 1 || h < 1) {
      throw new Error("Width and height must be greater than 0.");
    }
    this.width = w;
    this.height = h;
  }
};
