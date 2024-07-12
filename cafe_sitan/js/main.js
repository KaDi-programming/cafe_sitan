//console.log("Hello, world!");

//画面サイズの決定
const D_WIDTH = 1024;
const D_HEIGHT = 768;


//scene詳細
class Quest extends Phaser.Scene
{
    preload ()
    {
        this.load.image('background', 'images/backgrounds/background_template.png');
        this.load.image('logo', 'images/backgrounds/background_template.png');
        this.load.image('red', 'images/backgrounds/background_template.png');
    }

    create ()
    {
        this.add.image(0, 0, 'background');

        const particles = this.add.particles(0, 0, 'red', {
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });

        const logo = this.physics.add.image(400, 100, 'logo');

        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        particles.startFollow(logo);
    }
}

class Example extends Phaser.Scene
{
    preload ()
    {
        //画像の事前準備
        this.load.setBaseURL('https://labs.phaser.io');
        this.load.image('sky', 'assets/skies/space3.png');
        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        this.load.image('red', 'assets/particles/red.png');
    }

    create ()
    {
        this.add.image(400, 300, 'sky');

        const particles = this.add.particles(0, 0, 'red', {
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });

        const logo = this.physics.add.image(400, 100, 'logo');

        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        particles.startFollow(logo);
    }
}


// phasorの基本設定
const config = {
    type: Phaser.AUTO,
    width: D_WIDTH,
    height: D_HEIGHT,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }// 重力、いらないなら消す
        }
    },
    scene: Example
    //scene: Quest
   
};

const game = new Phaser.Game(config);