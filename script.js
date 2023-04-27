class GameStudio extends Phaser.Scene {
    constructor() {
        super('game studio');
    }

    preload() {
        this.load.image('studio name', 'assets/JN-B Text.png');
        this.load.audio('bloop', 'audio assets/Bloopbloopbloopbloopbloop.wav');
    }

    create() {
        this.cameras.main.fadeIn(2000);
        let name = this.add.image(275, 300, 'studio name');
        name.scale = 0.5;

        // Studio audio
        let audio = this.sound.add('bloop', { loop: false });
        audio.play();

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
        this.load.audio('dodo', 'audio assets/DodoDodoDodo.wav');
    }

    create() {
        this.cameras.main.fadeIn(1000);
        this.add.image(300, 300, 'castle');

        // Loading audio
        let audio = this.sound.add('dodo', { loop: false });
        audio.play();

        //  Add graphics
        // this.graphics = this.add.graphics();
        // this.graphics.fillStyle(0xffffff);
        // let dot1 = this.graphics.fillRect(540, 570, 4, 4);
        // let dot2 = this.graphics.fillRect(555, 570, 4, 4);
        // let dot3 = this.graphics.fillRect(570, 570, 4, 4);
        let dot1 = this.add.rectangle(540, 572, 4, 4, 0xffffff);
        let dot2 = this.add.rectangle(555, 572, 4, 4, 0xffffff);
        let dot3 = this.add.rectangle(570, 572, 4, 4, 0xffffff);
        
        let loading = this.add.text(400, 550, 'Loading');
        loading.setFontSize(30);
        //let loading = this.add.text(300, 500, 'Loading...', { fontFamily: 'PressStart2P'});

        // Make 3 dots bounce
        this.tweens.add({
            targets: dot1,
            y: 568,
            ease: "Linear",
            duration: 700, 
            repeat: 3,
            yoyo: true
        });

        this.time.delayedCall(500, () => {
            this.tweens.add({
                targets: dot2,
                y: 568,
                ease: "Linear",
                duration: 700, 
                repeat: 3,
                yoyo: true
            });
        });

        this.time.delayedCall(1000, () => {
            this.tweens.add({
                targets: dot3,
                y: 568,
                ease: "Linear",
                duration: 700, 
                repeat: 3,
                yoyo: true
            });
        });

        // Start next scene after dots bounce 3 times
        this.time.delayedCall(4250, () => {
            this.scene.start('main menu');
        });

        // this.input.on('pointerdown', () => {
        //     this.cameras.main.fadeOut(1000, 0,0,0);
        //     this.time.delayedCall(1000, () => {
        //         this.scene.start('game studio');
        //     })
        // });
    }
}

class MainMenu extends Phaser.Scene {
    constructor() {
        super('main menu');
    }

    preload() {
        this.load.image('vampire', 'assets/Vampire.png');
    }

    create() {
        this.cameras.main.fadeIn(500);
        let vampire = this.add.image(450, 300, 'vampire');

        // Main Menu Text
        // center align title and add animations to text
        let title = this.add.text(40, 700, 'Vampire Adventures');
        title.setFontSize(40);
        title.setWordWrapWidth(200);
        title.setAlign('center');
        this.time.delayedCall(500, () => {
            this.tweens.add({
                targets: title,
                y: 100,
                duration: 350
            });
        });

        let newgame = this.add.text(60, 700, 'New Game');
        newgame.setFontSize(30);
        this.time.delayedCall(1000, () => {
            this.tweens.add({
                targets: newgame,
                y: 250,
                duration: 500, 
            });
        });
        // newgame.setInteractive ({
        //     font: 35,
        // });
        let loadgame = this.add.text(60, 700, 'Load Game');
        loadgame.setFontSize(30);
        this.time.delayedCall(1100, () => {
            this.tweens.add({
                targets: loadgame,
                y: 325,
                duration: 500, 
            });
        });
        let options = this.add.text(60, 700, 'Options');
        options.setFontSize(30);
        this.time.delayedCall(1200, () => {
            this.tweens.add({
                targets: options,
                y: 400,
                duration: 500, 
            });
        });
        let exitgame = this.add.text(60, 700, 'Exit Game');
        exitgame.setFontSize(30);
        this.time.delayedCall(1300, () => {
            this.tweens.add({
                targets: exitgame,
                y: 475,
                duration: 500, 
            });
        });

        this.time.delayedCall(20000, () => {
            this.cameras.main.fadeOut(500, 0,0,0);
            this.scene.start('game studio');
        });
    }
}

let config = {
    type: Phaser.WEBGL,
    width: 600,
    height: 600,
    backgroundColor: 0x212121,
    scene: [GameStudio, LoadingScreen, MainMenu]
}

let game = new Phaser.Game(config);