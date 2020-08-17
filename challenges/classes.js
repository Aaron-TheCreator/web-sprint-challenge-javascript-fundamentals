// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(l, w, h) {
//     this.length = l;
//     this.width = w;
//     this.height = h;
//   };
//   CuboidMaker.prototype.volume = function() {
//     cubeVolume = (this.length * this.width) * this.height;
//     return cubeVolume;
//   };
//   CuboidMaker.prototype.surfaceArea = function() {
//     surfaceArea = 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
//     return surfaceArea;
//   };
//   function Cuboid(l, w , h) {
//     CuboidMaker.call(l, w, h);
//     this.length = l;
//     this.width = w;
//     this.height = h;
//   };  


class CuboidMaker {
    constructor(attr) {
        this.length = attr.l;
        this.width = attr.w;
        this.height = attr.h;
    }

    volume() {
        cubeVolume = (this.length * this.width) * this.height;
        return cubeVolume;
    };

    surfaceArea() {
        surfaceArea = 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
        return surfaceArea;
    };

};



// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.