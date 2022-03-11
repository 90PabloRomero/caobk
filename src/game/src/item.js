class Item extends Phaser.GameObjects.Sprite
{
    grid;

    scene;

    owner;

    size;

    img;

    barlife;

    life;

    maxLife;

    constructor (scene,x,y,grid,img)
    {
        super(scene,x,y,img);

     //   this.scene.cameras.main.shake(0.0075, 500);

        this.grid=grid;

 
        this.scene=scene;

        this.depth=2

        this.setOrigin(0);

        this.img=img;

        switch(img){
          case 'bronce':
            this.life=50;
            break;
          case 'plata':
              this.life=100;
              break;
          case 'oro':
            this.life=500;
            break;
          case 'diamante':
            this.life=1000;
            break;
          case 'safiro':
              this.life=5000;
              break;
          default:
            break;
        }

        this.maxLife=this.life;



        //zoom
        this.displayWidth=52;
        this.displayHeight=52;


        //add the bar life
        this.barlife=new BarLife(scene,x+9,y+8);

        //add this sprite to the scene
        scene.add.existing(this);



  }

  hurt(points,owner){
    this.life-=points;
    this.barlife.updateLife(this.life/this.maxLife);
   // console.log(this.img+" hurt:"+ points +" life:"+this.life)
    if(this.life<=0){
      let wao=0
      switch(this.img){
        case 'bronce':
          wao=0.01625;
          break;
        case 'plata':
          wao=0.0325;
            break;
        case 'oro':
          wao=0.1625;
          break;
        case 'diamante':
          wao=0.325;
          break;
        case 'safiro':
            wao=0.65;
            break;
        default:
          break;
      }

      owner.winWao(wao)
      this.destroy();
     // console.log("destroy item "+this.img)
      return true;
    }
    return false;
  }
    
  destroy(){

    this.barlife.destroy();


    super.destroy();
  }
    
}