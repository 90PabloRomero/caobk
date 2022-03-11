class Explosion extends Phaser.GameObjects.Sprite
{
    grid;

    scene;

    owner;

    

    constructor (scene,x,y,grid,owner)
    {
        super(scene,x-16,y-16,null);

        this.owner = owner;

     //   this.scene.cameras.main.shake(0.0075, 500);

        this.grid=grid;

        this.scene=scene;

        this.depth=3

        this.setOrigin(0);


        // Animation set
        this.anims.create({
            key: 'explode',
            frames: scene.anims.generateFrameNumbers('explosion', { frames: [ 0,1,2,3 ] }),
            frameRate: 7,
        });

        //zoom
       // this.displayWidth=52;
        //this.displayHeight=52;

        var duration=500;

        this.myTimer = scene.time.delayedCall(duration, this.destroy, null,this); 

          //add this sprite to the scene
          scene.add.existing(this);

          
        this.play('explode');


  }
    
    
}