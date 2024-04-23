import {CGFinterface, dat} from '../lib/CGF.js';

/**
* MyInterface
* @constructor
*/
export class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        
        // init GUI. For more information on the methods, check:
        // https://github.com/dataarts/dat.gui/blob/master/API.md
        this.gui = new dat.GUI();

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');

        //Slider element in GUI
        this.gui.add(this.scene, 'scaleFactor', 0.1, 5).name('Scale Factor');

        let controllerRows = this.gui.add(this.scene, 'numRows', 1, 10).step(1).name('Number of Rows');
        let controllerCols = this.gui.add(this.scene, 'numCols', 1, 10).step(1).name('Number of Columns');
        let controllerSpacing = this.gui.add(this.scene, 'spacing', 1, 10).step(1).name('Spacing');

        controllerRows.onChange(() => {
            this.scene.updateGarden();
        });

        controllerCols.onChange(() => {
            this.scene.updateGarden();
        });

        controllerSpacing.onChange(() => {
            this.scene.updateGarden();
        });

        return true;
    }
}