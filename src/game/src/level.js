class Level extends Phaser.Scene
{
    grid;

    items=[];

    bomb;

    border;

    constructor (level)
    {
        super(level);

    }

    init(grid){
        this.grid=grid;
    }

    preload ()
    {
        //items
        this.load.image('bronce', 'assets/Elementos/Bronce.png');
        this.load.image('diamante', 'assets/Elementos/Diamante.png');
        this.load.image('oro', 'assets/Elementos/Oro.png');
        this.load.image('plata', 'assets/Elementos/Plata.png');
        //this.load.image('safiro', 'assets/Elementos/Safiro.png');

    }

    create ()
    {
        this.items[0]='bronce';
        this.items[1]='plata';
        this.items[2]='oro';
        this.items[3]='diamante';
      //  this.items[4]='safiro';

       // console.log("super created")
    }

    createLevel(ground,stone,obstacle,border){


        //create the grounds
        for(let x=0;x<this.grid.sizeX;x++){
            for(let y=0;y<this.grid.sizeY;y++){
                //add the ground img
                this.add.image(x*this.grid.tileSize,y*this.grid.tileSize,ground).setOrigin(0);

                if(this.grid.data[x][y]==1){
                    let img=this.add.image(x*this.grid.tileSize,y*this.grid.tileSize,stone).setOrigin(0);
                    img.displayWidth=52;
                    img.displayHeight=52;
                }else if(this.grid.data[x][y]==2){
                    let img=this.add.image(x*this.grid.tileSize,y*this.grid.tileSize,obstacle).setOrigin(0);
                     img.displayWidth=52;
                    img.displayHeight=52;    
                    img.life=1;                
                    this.grid.img[x][y]=img;
                }
            }
        }

        //create the minerals
        //create bronze
        for(let i=0;i<17;i++){ 
            let gridPoint=this.grid.getEmptyCell();
            if(gridPoint=={x:0,y:0})
                continue;
            this.grid.data[gridPoint.x][gridPoint.y]=3;
            let img=new Item(this,gridPoint.x*this.grid.tileSize,gridPoint.y*this.grid.tileSize,this.grid,this.items[0]);
            this.grid.img[gridPoint.x][gridPoint.y]=img; 
            this.grid.totalMinerals++;
        }
        //create silver
        for(let i=0;i<8;i++){
            let gridPoint=this.grid.getEmptyCell();
            if(gridPoint=={x:0,y:0})
                continue;
            this.grid.data[gridPoint.x][gridPoint.y]=3;
            let img=new Item(this,gridPoint.x*this.grid.tileSize,gridPoint.y*this.grid.tileSize,this.grid,this.items[1]);
            this.grid.img[gridPoint.x][gridPoint.y]=img; 
            this.grid.totalMinerals++;
        }
        //create gold
        let num=Phaser.Math.Between(2,4) 
        for(let i=0;i<num;i++){
            let gridPoint=this.grid.getEmptyCell();
            if(gridPoint=={x:0,y:0})
                continue;
            this.grid.data[gridPoint.x][gridPoint.y]=3;
            let img=new Item(this,gridPoint.x*this.grid.tileSize,gridPoint.y*this.grid.tileSize,this.grid,this.items[2]);
            this.grid.img[gridPoint.x][gridPoint.y]=img; 
            this.grid.totalMinerals++;

        }
        //create diamond
        let num2=Phaser.Math.Between(0,2) 
        for(let i=0;i<num2;i++){
            let gridPoint=this.grid.getEmptyCell();
            if(gridPoint=={x:0,y:0})
                continue;
            this.grid.data[gridPoint.x][gridPoint.y]=3;
            let img=new Item(this,gridPoint.x*this.grid.tileSize,gridPoint.y*this.grid.tileSize,this.grid,this.items[3]);
            this.grid.img[gridPoint.x][gridPoint.y]=img; 
            this.grid.totalMinerals++;

        }


        //add the border
        this.border=this.add.image(0,0,border).setOrigin(0);

    }
}