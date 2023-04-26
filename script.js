class GameStudio extends Phaser.Scene {
    constructor() {
        super('game studio');
    }

    preload() {
        this.load.image('studio name', 'assets/JN-B Text.png');
    }

    create() {
        this.cameras.main.fadeIn(2000);
        let name = this.add.image(275, 300, 'studio name');
        name.scale = 0.5;
        this.time.delayedCall(2000, () => {
            this.cameras.main.fadeOut(2000, 0,0,0);
        });

        this.time.delayedCall(4000, () => {
            this.scene.start('loading screen');
        })
    }
}

class LoadingScreen extends Phaser.Scene {
    constructor() {
        super('loading screen');
    }

    preload() {
        this.load.image('castle', 'assets/Castle.png');
    }

    create() {
        this.cameras.main.fadeIn(2000);
        this.add.image(300, 300, 'castle');

        this.input.on('pointerdown', () => {
            this.cameras.main.fadeOut(2000, 0,0,0);
            this.time.delayedCall(2000, () => {
                this.scene.start('game studio');
            })
        });
    }
}

let config = {
    type: Phaser.WEBGL,
    width: 600,
    height: 600,
    backgroundColor: 0x212121,
    scene: [GameStudio, LoadingScreen]
}

let game = new Phaser.Game(config);