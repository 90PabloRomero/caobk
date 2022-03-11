class Demo extends Phaser.Scene
{
    bots;

    grid;

    currentLevel=0;

    constructor ()
    {
        super('demo');
    }

    preload ()
    {
        //dogs
        this.load.spritesheet('dalmata_comun', 'assets/dogs/dalmata/comun.png',{frameWidth: 82,frameHeight: 82});
        this.load.spritesheet('dalmata_raro', 'assets/dogs/dalmata/raro.png',{frameWidth: 82,frameHeight: 82});
        this.load.spritesheet('dalmata_superraro', 'assets/dogs/dalmata/superraro.png',{frameWidth: 82,frameHeight: 82});
        this.load.spritesheet('dalmata_epico', 'assets/dogs/dalmata/epico.png',{frameWidth: 82,frameHeight: 82});
        this.load.spritesheet('dalmata_legendario', 'assets/dogs/dalmata/legendario.png',{frameWidth: 82,frameHeight: 82});
        this.load.spritesheet('dalmata_mitico', 'assets/dogs/dalmata/mitico.png',{frameWidth: 82,frameHeight: 82});
        this.load.spritesheet('doberman_comun', 'assets/dogs/doberman/comun.png',{frameWidth: 82,frameHeight: 82});
        this.load.spritesheet('doberman_raro', 'assets/dogs/doberman/raro.png',{frameWidth: 82,frameHeight: 82});
        this.load.spritesheet('doberman_superraro', 'assets/dogs/doberman/superraro.png',{frameWidth: 82,frameHeight: 82});
        this.load.spritesheet('doberman_epico', 'assets/dogs/doberman/epico.png',{frameWidth: 82,frameHeight: 82});
        this.load.spritesheet('doberman_legendario', 'assets/dogs/doberman/legendario.png',{frameWidth: 82,frameHeight: 82});
        this.load.spritesheet('doberman_mitico', 'assets/dogs/doberman/mitico.png',{frameWidth: 82,frameHeight: 82});
        this.load.spritesheet('labrador_comun', 'assets/dogs/labrador/comun.png',{frameWidth: 82,frameHeight: 82});
        this.load.spritesheet('labrador_raro', 'assets/dogs/labrador/raro.png',{frameWidth: 82,frameHeight: 82});
        this.load.spritesheet('labrador_superraro', 'assets/dogs/labrador/superraro.png',{frameWidth: 82,frameHeight: 82});
        this.load.spritesheet('labrador_epico', 'assets/dogs/labrador/epico.png',{frameWidth: 82,frameHeight: 82});
        this.load.spritesheet('labrador_legendario', 'assets/dogs/labrador/legendario.png',{frameWidth: 82,frameHeight: 82});
        this.load.spritesheet('labrador_mitico', 'assets/dogs/labrador/mitico.png',{frameWidth: 82,frameHeight: 82});
        this.load.spritesheet('pastorAleman_comun', 'assets/dogs/pastorAleman/comun.png',{frameWidth: 82,frameHeight: 82});
        this.load.spritesheet('pastorAleman_raro', 'assets/dogs/pastorAleman/raro.png',{frameWidth: 82,frameHeight: 82});
        this.load.spritesheet('pastorAleman_superraro', 'assets/dogs/pastorAleman/superraro.png',{frameWidth: 82,frameHeight: 82});
        this.load.spritesheet('pastorAleman_epico', 'assets/dogs/pastorAleman/epico.png',{frameWidth: 82,frameHeight: 82});
        this.load.spritesheet('pastorAleman_legendario', 'assets/dogs/pastorAleman/legendario.png',{frameWidth: 82,frameHeight: 82});
        this.load.spritesheet('pastorAleman_mitico', 'assets/dogs/pastorAleman/mitico.png',{frameWidth: 82,frameHeight: 82});
        this.load.spritesheet('pitbull_comun', 'assets/dogs/pitbull/comun.png',{frameWidth: 82,frameHeight: 82});
        this.load.spritesheet('pitbull_raro', 'assets/dogs/pitbull/raro.png',{frameWidth: 82,frameHeight: 82});
        this.load.spritesheet('pitbull_superraro', 'assets/dogs/pitbull/superraro.png',{frameWidth: 82,frameHeight: 82});
        this.load.spritesheet('pitbull_epico', 'assets/dogs/pitbull/epico.png',{frameWidth: 82,frameHeight: 82});
        this.load.spritesheet('pitbull_legendario', 'assets/dogs/pitbull/legendario.png',{frameWidth: 82,frameHeight: 82});
        this.load.spritesheet('pitbull_mitico', 'assets/dogs/pitbull/mitico.png',{frameWidth: 82,frameHeight: 82});
        this.load.spritesheet('shiba_comun', 'assets/dogs/shiba/comun.png',{frameWidth: 82,frameHeight: 82});
        this.load.spritesheet('shiba_raro', 'assets/dogs/shiba/raro.png',{frameWidth: 82,frameHeight: 82});
        this.load.spritesheet('shiba_superraro', 'assets/dogs/shiba/superraro.png',{frameWidth: 82,frameHeight: 82});
        this.load.spritesheet('shiba_epico', 'assets/dogs/shiba/epico.png',{frameWidth: 82,frameHeight: 82});
        this.load.spritesheet('shiba_legendario', 'assets/dogs/shiba/legendario.png',{frameWidth: 82,frameHeight: 82});
        this.load.spritesheet('shiba_mitico', 'assets/dogs/shiba/mitico.png',{frameWidth: 82,frameHeight: 82});
        //zzz
        this.load.spritesheet('zzz', 'assets/dogs/zzz.png',{frameWidth: 82,frameHeight:82});
        //bomb
        this.load.image('bomb', 'assets/Elementos/Poop.png');
        //explosion
        this.load.spritesheet('explosion', 'assets/fx/explosion.png',{frameWidth: 82,frameHeight:82});
        //ui
        this.load.image('bar', 'assets/ui/bar.png');
        this.load.image('bar-back', 'assets/ui/bar_back.png');

    }

    create ()
    {
        this.loadLevel();   
        this.initializeBots();
    }

    loadLevel(){

        this.currentLevel++;

        let stringKey="Level"+this.currentLevel;

        console.log(stringKey);
        
        this.grid=new Grid(this);
        
        let num=Phaser.Math.Between(0,8);

        switch(num){
            case 0:
                this.level=this.scene.add(stringKey, LevelVulcan, true, this.grid);
                break;
            case 1:
                this.level=this.scene.add(stringKey, LevelCastillo, true, this.grid);
                break;
            case 2:
                this.level=this.scene.add(stringKey, LevelCiudad, true, this.grid);
                break;    
            case 3:
                this.level=this.scene.add(stringKey, LevelDesierto, true, this.grid);
                break;  
            case 4:
                this.level=this.scene.add(stringKey, LevelHielo, true, this.grid);
                break;  
            case 5:
                this.level=this.scene.add(stringKey, LevelJapon, true, this.grid);
                break;  
            case 6:
                this.level=this.scene.add(stringKey, LevelOtono, true, this.grid);
                break;  
            case 7:
                this.level=this.scene.add(stringKey, LevelParque, true, this.grid);
                break;  
            case 8:
                this.level=this.scene.add(stringKey, LevelPlaya, true, this.grid);
                break;  
        }

        this.scene.sendToBack(stringKey);

        this.grid.initializePathFinding();


    }

    update(time, delta) {
        for(let i=0;i<this.bots.length;i++)
            this.bots[i].update(delta);
    }


    initializeBots(){
        
        this.bots=[]
        for(let i=0;i<6;i++){

            let point=this.grid.getEmptyCell()

            let num=Phaser.Math.Between(1,6);
            // let num2=Phaser.Math.Between(0,10000);

            let rare=i+1;

            // if(num2<8287){
            //     rare=1;//comun
            // }else if(num2<9323){
            //     rare=2;//raro
            // }else if(num2<9841){
            //     rare=3;//superraro
            // }else if(num2<9945){
            //     rare=4;//epico
            // }else if(num2<9996){
            //     rare=5;//legendario
            // }else if(num2<=10000){
            //     rare=6;//mitico
            // }


            let name

            switch(num){
                case 1:
                    name="dalmata"
                    break;
                case 2:
                    name="doberman"
                    break;
                case 3:
                    name="labrador"
                    break;
                case 4:
                    name="pastorAleman"
                    break;
                case 5:
                    name="pitbull"
                    break;
                case 6:
                    name="shiba"
                    break;
                default:
                    break;
            }

            switch(rare){
                case 1:
                    name+="_comun"
                    break;
                case 2:
                    name+="_raro"
                    break;
                case 3:
                    name+="_superraro"
                    break;
                case 4:
                    name+="_epico"
                    break;
                case 5:
                    name+="_legendario"
                    break;
                case 6:
                    name+="_mitico"
                    break;
                default:
                    break;
            }

            console.log(name)

            this.bots[i] = new Bot(this, (point.x*52)+26,(point.y*52)+26,rare,name,this.grid,this.level);
        }   
    }

    initializeDogsPositions(){
        for(let i=0;i<6;i++){
            let gridPoint=this.grid.getEmptyCell()
            this.bots[i].restartDog(gridPoint.x,gridPoint.y,this.grid,this.level)
        }

    }

    activateDogs(active){
        for(let i=0;i<6;i++){
            this.bots[i].setActive(active);
        }
    }

    restartLevel(){
        console.log("restart Level")
        // this.grid.destroy();
        this.activateDogs(false)
        this.scene.remove('Level'+this.currentLevel);
        this.loadLevel();
        this.initializeDogsPositions();        
        this.activateDogs(true)
    }
}
const config = {
    rare: Phaser.AUTO,
    backgroundColor: '#125555',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
    },
    width: 1920,
    height: 1080,
    scene: Demo
};

const game = new Phaser.Game(config);