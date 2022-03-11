class BarLife extends Phaser.GameObjects.Sprite
{
    grid;

    scene;

    back;

    constructor (scene,x,y)
    {
        super(scene,x,y,'bar');

        this.scene=scene;

        this.depth=4

        this.setOrigin(0);


        this.displayWidth=34
        this.displayHeight=4
        

        //add the background
        this.back=scene.add.image(x-2,y-1,'bar-back');
        this.back.depth=3;
        this.back.setOrigin(0);
        
        this.back.displayWidth=42
        this.back.displayHeight=6

        //add this sprite to the scene
        scene.add.existing(this);



  } 

  updatePos(x,y){
    
    this.setX(x);
    this.setY(y);
    this.back.x=x-2;
    this.back.y=y-1;
  }

  /**
   * 
   * @param {number} percent from 1.0 to 0 
   */
  updateLife(percent){
    this.displayWidth=(34*percent);
  }

  destroy(){

    this.back.destroy();

    super.destroy();
  }
    
}