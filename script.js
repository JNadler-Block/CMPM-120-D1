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

        //  Add graphics
        // this.graphics = this.add.graphics();
        // this.graphics.fillStyle(0xffffff);
        // let dot1 = this.graphics.fillRect(540, 570, 4, 4);
        // let dot2 = this.graphics.fillRect(555, 570, 4, 4);
        // let dot3 = this.graphics.fillRect(570, 570, 4, 4);
        let dot1 = this.add.rectangle(540, 570, 4, 4, 0xffffff);
        let dot2 = this.add.rectangle(555, 570, 4, 4, 0xffffff);
        let dot3 = this.add.rectangle(570, 570, 4, 4, 0xffffff);
        
        let loading = this.add.text(400, 550, 'Loading');
        loading.setFontSize(30);
        //let loading = this.add.text(300, 500, 'Loading...', { fontFamily: 'PressStart2P'});
        //console.log(loading);

        // Make 3 dots bounce
        this.tweens.add({
            targets: dot1,
            y: 564,
            ease: "Sine",
            duration: 700, 
            repeat: -1,
            yoyo: true
        });

        this.time.delayedCall(500, () => {
            this.tweens.add({
                targets: dot2,
                y: 564,
                ease: "Sine",
                duration: 700, 
                repeat: -1,
                yoyo: true
            });
        });

        this.time.delayedCall(1000, () => {
            this.tweens.add({
                targets: dot3,
                y: 564,
                ease: "Sine",
                duration: 700, 
                repeat: -1,
                yoyo: true
            });
        });
        /*this.tweens.add({
            targets: loading,
            y: 500,
            ease: "Sine",
            duration: 1000, repeat:-1,
            yoyo:true
        });*/

        this.input.on('pointerdown', () => {
            this.cameras.main.fadeOut(1000, 0,0,0);
            this.time.delayedCall(1000, () => {
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
    //scene: [GameStudio, LoadingScreen]
    scene: [LoadingScreen]
}

let game = new Phaser.Game(config);