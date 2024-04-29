import { MyRock } from './objects/MyRock.js';

export class MyRockSet {
    constructor(scene, slices, stacks, texture) {
        this.scene = scene;
        this.rocks = [];
        this.base = Math.floor(Math.random() * 5) + 10;
        this.height = Math.floor(Math.random() * 3) + 7;
        this.radius = Math.floor(Math.random() * 2) + 3;
        this.slices = slices;
        this.stacks = stacks;
        this.texture = texture;

        // Incremental variables
        var ang = Math.random() * 2 * Math.PI;
        const delta_ang = 2 * Math.PI / this.base;
        const delta_rocks = this.base / this.height;
        const delta_radius = this.radius / this.height;

        const init_scale = 0.6;
        var scale = init_scale;
        // Cone building
        for (let layer = 0; layer <= this.height; layer++) {

            // Capstone
            if (layer == this.height) {
                this.rocks.push(new MyRock(this.scene, this.slices, this.stacks, this.texture, 0, this.height, 0, scale));
                break;
            }
            // Layer building
            let layer_rocks = this.base - delta_rocks * layer
            for (let rock = 0; rock < layer_rocks; rock++) {

                let x = Math.sin(ang) * this.radius;
                let z = Math.cos(ang) * this.radius;
                let y = layer;
                const new_rock = new MyRock(this.scene, this.slices, this.stacks, this.texture, x, y, z, scale);
                this.rocks.push(new_rock);
                ang += delta_ang;
            }
            this.radius -= delta_radius;
            scale -= (init_scale-0.1)/this.height;
        }


        /* for (let num = 0; num < rocks_size; num++) {
            for (let y = 0; y < height; y++) {
                for (let r = 0; r <radius; r++) {
                    this.rocks[num] = 
                }
            }
        } */
        /*         for (let stack = 0; stack < this.height; stack++) {
        
                    const stackSize = this.base - stack;
        
                    // Calculate the offset for centering the layer
                    const xOffset = (this.base - stackSize) / 2;
        
                    // Generate rock objects for the current layer
                    for (let i = 0; i < stackSize; i++) {
                        // Generate random position for the rock within the layer
                        const x = i + xOffset;
                        const y = stack / (this.height - 1); // Distribute height evenly across layers
                        const z = stackSize / 2 - i; // Center the layer along the z-axis
        
                        // Create rock object and store it in the array
                        const new_rock = new MyRock(this.scene, this.slices, this.stacks, x, y, z);
                        this.rocks.push(new_rock);
                    }
                } */

        /*         for (let stack = 0; stack < this.height; stack++) {
        
                    let stackSize = this.base - stack;
        
                    // Calculate the offset for centering the layer
                    let xOffset = (this.base - stackSize) / 2;
        
                    // Generate rock objects for the current layer
                    for (let i = 0; i < stackSize; i++) {
                        // Generate random position for the rock within the layer
                        let x = xOffset; //+i
                        let z = stack / (this.height - 1);
                        let y = stackSize / 2 - i;
        
                        // Create rock object and store it in the array
                        const new_rock = new MyRock(this.scene, this.slices, this.stacks, x, y, z);
                        this.rocks.push(new_rock);
                    }
                } */
    }

    display() {
        for (let rock = 0; rock < this.rocks.length; rock++) {
            this.scene.pushMatrix();
            this.rocks[rock].display();
            this.scene.popMatrix();
        }
    }
}