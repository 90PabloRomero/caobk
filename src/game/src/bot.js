 class Bot extends Phaser.GameObjects.Sprite
{
    speed=20;

    trend=0;

    timer=0;

    keys=['walk-down','walk-up','walk-left','walk-right','sleep'];

    currentKey=0;

    playingKey=0;

    scene;

    grid;

    size=52;

    hasToPutBomb=false;
    move=false

  //  text;

    //cursors;

    currentPoops = 0;

    level;

    //stats
    power=1;
    range=1;
    stamina=1;
    velocity=1;
    numPoops=1;

    //max constants
    maxPower=18
    maxStamina=18
    maxVelocity=18;
    maxRange=6
    maxNumPoops=6;

    wao=0;

    barLife;

    energy; 
    maxEnergy;

    sleeping=false;

    sleepTimer;


    path=null;
    currentPath;
    currentObjective;
    prevPath;

    startedPath=false;

    rare;

    zzz;

    cellFixed=null;
    cellClear=false;
    cellFace;

    constructor (scene,x,y,rare,texture,grid,level)
    {
        super(scene,x,y,texture);

        this.scene=scene;
        this.grid=grid;
        this.level=level;
  
        this.depth=2

        this.rare=rare;

        this.name=texture

        let points;

        switch(rare){
            case 1://comun
                points=Phaser.Math.Between(5,11)-5;//drop 5 points for the default values
                break;
            case 2://raro
                points=Phaser.Math.Between(12,22)-5;//drop 5 points for the default values              
                break;
            case 3://superraro
                points=Phaser.Math.Between(23,33)-5;//drop 5 points for the default values           
                break;
            case 4://epico
                points=Phaser.Math.Between(33,43)-5;//drop 5 points for the default values             
                break;
            case 5://legendario
                points=Phaser.Math.Between(44,54)-5;//drop 5 points for the default values              
                break;
            case 6://mitico
                points=Phaser.Math.Between(55,66)-5;//drop 5 points for the default values              
                break;

        }

        // console.log("points: ",points)
        //separate points
        let restPoints=Math.floor(points/5);
        points-=restPoints;
        // console.log("restPoints: ",restPoints)
        // console.log("points after: ",points)


        //redistribute main stats
        let j=0;
        for(let i=0;i<points;i++){
            let num=Phaser.Math.Between(1,3);
            if(num==1){
                this.power++
                if(this.power>this.maxPower){
                    this.power=this.maxPower
                    points++;
                }
            }
            else if(num==2){
                this.stamina++
                if(this.stamina>this.maxStamina){
                    this.stamina=this.maxStamina
                    points++;
                }
            }
            else if(num==3){
                this.velocity++
                if(this.velocity>this.maxVelocity){
                    this.velocity=this.maxVelocity
                    points++;
                }
            }
            j++;
            if(j>1000)//for avoid infinite loop
                break;
        }

        //redistribute secondary stats
        j=0
        for(let i=0;i<restPoints;i++){
            let num=Phaser.Math.Between(1,2);
            if(num==1){
                this.numPoops++
                if(this.numPoops>this.maxNumPoops){
                    this.numPoops=this.maxNumPoops
                    points++;
                }
            }
            else if(num==2){
                this.range++
                if(this.range>this.maxRange){
                    this.range=this.maxRange
                    points++;
                }
            }
            
            j++;
            if(j>1000)//for avoid infinite loop
                break;
        }

        console.log("power:",this.power," stamina:",this.stamina," velocity:",this.velocity," numPoops:",this.numPoops," range:",this.range)

        this.speed+=(this.velocity*5)

        // this.power*=2;

        this.energy=(50*this.stamina);
        this.maxEnergy=this.energy;

       // this.cursors = this.scene.input.keyboard.createCursorKeys();

       const frameRate=7+(this.velocity*0.2)

       //console.log(texture)
        // Animation set
        this.anims.create({
            key: 'walk-down',
            frames: scene.anims.generateFrameNumbers(texture, { frames: [ 0, 1, 2, 8 ] }),
            frameRate: frameRate,
            repeat: -1
        });
        this.anims.create({
            key: 'walk-right',
            frames: scene.anims.generateFrameNumbers(texture, { frames: [  3, 4, 5, 6] }),
            frameRate: frameRate,
            repeat: -1
        });
        this.anims.create({
            key: 'walk-up',
            frames: scene.anims.generateFrameNumbers(texture, { frames: [ 9, 10, 11, 12 ] }),
            frameRate: frameRate,
            repeat: -1
        });
        this.anims.create({
            key: 'walk-left',
            frames: scene.anims.generateFrameNumbers(texture, { frames: [ 13, 14, 15, 16] }),
            frameRate: frameRate,
            repeat: -1
        });
        this.anims.create({
            key: 'sleep',
            frames: scene.anims.generateFrameNumbers(texture, { frames: [ 7] }),
            frameRate: 0,
            repeat: 0
        });

        //play idle
        this.play('walk-down');


        //zoom
        this.displayWidth=82;
        this.displayHeight=82;

        this.timer=(Phaser.Math.Between(2,8)*3600/this.velocity);

      // this.text=scene.add.text(0,64,"tile:",{fontSize:'32px'});

        //add the bar life
        this.barLife=new BarLife(scene,x-24,y-36);

        //add this sprite to the scene
        scene.add.existing(this);

        //timer for sleep event
        this.sleepTimer= scene.time.addEvent({
            delay: 60000,               
            callback: this.restoreEnergy,
            args: [],
            callbackScope: this,
            loop: true,
            repeat: 0,
            startAt: 0,
            timeScale: 1,
            paused: true
        });
  

        // //put a bomb if surrounded
        // let gridPoint=this.grid.screenToGrid(this.x,this.y)
        // if(!this.grid.hasFreeSide(gridPoint.x,gridPoint.y)){
        //     //console.log("dog surrounded")
        //     //if it's surrounded withj objects and can't move place a bomb
        //     if(this.canDropBomb(gridPoint.x,gridPoint.y)){
        //     this.placeBomb(gridPoint.x,gridPoint.y) 
        //         this.energy-=5;  
        //         if(this.energy<=0){
        //             this.goToSleep();
        //         }  
        //     }
        // }      
    

        // zzz animation
        this.zzz=this.scene.add.sprite(this.x,this.y,'zzz');
        this.zzz.depth=3;
        // this.zzz.setOrigin(0);
        // Animation zzz
        this.zzz.anims.create({
            key: 'anim-zzz',
            frames: this.scene.anims.generateFrameNumbers('zzz', { frames: [ 0, 1, 2] }),
            frameRate: 7,
            repeat: -1
        });
        this.zzz.play('anim-zzz');
        this.zzz.visible=false


    }

    restartDog(x,y,grid,level){
        this.x =(x*this.grid.tileSize)+(this.grid.tileSize*0.5);
        this.y =(y*this.grid.tileSize)+(this.grid.tileSize*0.5);
        this.grid=grid
        this.level=level
        this.removePath();
        this.zzz.x=this.x
        this.zzz.y=this.y
    }

    update(delta) {

        //update bar life
        this.barLife.updatePos(this.x-24,this.y-36);
        this.barLife.updateLife(this.energy/this.maxEnergy);


        if(this.sleeping)
            return;

        //increment timer
       // this.timer-=delta;

  
        
        //choose a direction 
        if(this.path==null ){
            let gridPoint=this.grid.screenToGrid(this.x,this.y)
            this.grid.findNextPath(this,gridPoint.x,gridPoint.y) 
            //  this.removePath()
            // return              
        } 

        if(this.path!=null && this.path.length==0){

         //   console.log("path zero")

            let gridPoint=this.grid.screenToGrid(this.x,this.y);
            if(this.currentObjective!=null && this.currentObjective.x==gridPoint.x && this.currentObjective.y==gridPoint.y){
           //     console.log("can drop")
                if(this.canDropBomb(gridPoint.x,gridPoint.y)){
                    //put bomb in mineral
             //       console.log("put bomb")
    
                    this.cellClear=true;
    
                    this.placeBomb(gridPoint.x,gridPoint.y) 
                        this.energy-=5;  
                        if(this.energy<=0){
                            this.goToSleep();
                            this.removePath()
                            return
                        }              
                }
    
                this.cellClear=true;
                //go back 
                // this.goBack();
                this.removePath();
                return
            }
        }


        // if(this.path!=null && this.path.length==0){
        //     let gridPoint=this.grid.screenToGrid(this.x,this.y)
        //     if(this.canDropBomb(gridPoint.x,gridPoint.y)){
        //         this.placeBomb(gridPoint.x,gridPoint.y) 
        //             this.energy-=5;  
        //             if(this.energy<=0){
        //                 this.goToSleep();
        //                 return
        //             }  
        //         }
        // }

        if(!this.startedPath && this.path!=null ){
            this.startedPath=true;
            this.moveNextPath()
        }

        // if( this.timer<=0 || !this.move){
        //     this.trend=Phaser.Math.Between(0,3);          
        //     this.timer=(Phaser.Math.Between(2,8)*3600/this.velocity);
        // }   
        
        // if(this.currentPoops<this.numPoops)
        //     this.hasToPutBomb=true

        // if(this.hasToPutBomb){
        //     if(this.canDropBomb(this.x,this.y)){
        //         if(this.grid.screenIsDesiredBombCell(this.x,this.y,this.range)){
        //             this.placeBomb(this.x,this.y) 
        //             this.energy-=this.power;  
        //             if(this.energy<=0){
        //                 this.sleeping=true;
        //                 this.play('sleep'); 

        //                 //reset timer
        //                 this.sleepTimer.reset({
        //                     delay: 60000,                
        //                     callback: this.restoreEnergy,
        //                     args: [],
        //                     callbackScope: this,
        //                     loop: true,
        //                     repeat: 0,
        //                     startAt: 0,
        //                     timeScale: 1,
        //                     paused: false
        //                 })
        //                 this.scene.time.addEvent(this.sleepTimer);

        //                 //center position
        //                 let gridPoint=this.grid.screenToGrid(this.x,this.y)
        //                 this.x=(gridPoint.x*this.grid.tileSize)+this.grid.tileSize*0.5;
        //                 this.y=(gridPoint.y*this.grid.tileSize)+this.grid.tileSize*0.5;



        //             }              
        //         }
        //     }
        // }
        // this.move=false
        // //move depends on random
        // switch(this.trend){
        //     case 0:
        //         if(this.testRight(delta)){
        //             this.moveRight(delta);
        //             this.move=true;
        //         }
        //         break;
        //     case 1:
        //         if(this.testLeft(delta)){
        //             this.moveLeft(delta);
        //             this.move=true;
        //         }
        //         break;
        //     case 2:
        //         if(this.testDown(delta)){
        //             this.moveDown(delta);
        //             this.move=true;
        //         }
        //         break;
        //     case 3:
        //         if(this.testUp(delta)){
        //             this.moveUp(delta);
        //             this.move=true;
        //         }
        //         break;
        // }

        // if (this.cursors.left.isDown)
        // {
            
        //     if(this.testLeft(delta)){
        //                     this.direction=Direction.Left;
        //                     this.moveLeft(delta);
        //                     this.moved=true;
        //                 }   
                 
        // }
        // else if (this.cursors.right.isDown)
        // {
        //     if(this.testRight(delta)){
        //                 this.direction=Direction.Right;
        //                 this.moveRight(delta);
        //                 this.moved=true;
        //             }}
    
        // if (this.cursors.up.isDown)
        // {
        //     if(this.testUp(delta)){
        //                     this.direction=Direction.Up;
        //                     this.moveUp(delta);
        //                     this.moved=true;
        //                 }
        // }
        // else if (this.cursors.down.isDown)
        // {
        //     if(this.testDown(delta)){
        //                     this.direction=Direction.Down;
        //                     this.moveDown(delta);
        //                     this.moved=true;
        //                 }
        // }

     // this.text.setText("tile:"+Math.floor((this.x)/52)+","+Math.floor((this.y)/52));

        //play the animation only if has changed
        if(this.currentKey!=this.playingKey){
            this.play(this.keys[this.playingKey])
            this.currentKey=this.playingKey;

        }


    }

    // testRight(delta){
    //     return (this.grid.screenPointWalkable(this.x + (this.size*0.5)+(this.speed *(delta*0.001)),this.y) )//&& this.grid.screenPointWalkable(this.x + (this.speed *(delta*0.001)),this.y+this.size));
    // }
    // testLeft(delta){
    //     return (this.grid.screenPointWalkable(this.x - (this.size*0.5)-(this.speed *(delta*0.001)),this.y))// && this.grid.screenPointWalkable(this.x - (this.speed *(delta*0.001)),this.y+this.size));
    // }
    // testDown(delta){
    //     return (this.grid.screenPointWalkable(this.x ,this.y+ (this.size*0.5)+(this.speed *(delta*0.001))))// && this.grid.screenPointWalkable(this.x + this.size,this.y+ (this.speed *(delta*0.001))));
    // }
    // testUp(delta){
    //     return (this.grid.screenPointWalkable(this.x ,this.y- (this.size*0.5)- (this.speed *(delta*0.001))) )//&& this.grid.screenPointWalkable(this.x + this.size,this.y- (this.speed *(delta*0.001))));
    // }
    // moveRight(delta){
    //     let gridPoint=this.grid.screenToGrid(this.x,this.y)
    //     this.x += (this.speed *(delta*0.001));        
    //     this.y=(gridPoint.y*this.grid.tileSize)+this.grid.tileSize*0.5;
    //     this.playingKey=3;
    // }
    // moveLeft(delta){
    //     let gridPoint=this.grid.screenToGrid(this.x,this.y)
    //     this.x -= (this.speed *(delta*0.001));
    //     this.y=(gridPoint.y*this.grid.tileSize)+this.grid.tileSize*0.5;
    //     this.playingKey=2;
    // }
    // moveDown(delta){
    //     let gridPoint=this.grid.screenToGrid(this.x,this.y)
    //     this.y += (this.speed *(delta*0.001));
    //     this.x=(gridPoint.x*this.grid.tileSize)+this.grid.tileSize*0.5;
    //     this.playingKey=0;
    // }
    // moveUp(delta){
    //     let gridPoint=this.grid.screenToGrid(this.x,this.y)
    //     this.y -= (this.speed *(delta*0.001));
    //     this.x=(gridPoint.x*this.grid.tileSize)+this.grid.tileSize*0.5;
    //     this.playingKey=1;
    // }

    canDropBomb(x,y){
        return this.grid.isEmptyCell(x,y) && this.currentPoops < this.numPoops;

    }

    placeBomb(x,y){

        //transform the new grid to screen 
       var point=this.grid.gridToScreen(x,y);

       this.grid.screenPlaceBomb(point.x,point.y);

       //place the bomb
       new Bomb(this.scene,point.x,point.y,this.grid,this);
    }

    winWao(wao){
        this.wao+=wao;
        console.log(this.name+ " win:"+wao+ " total:"+this.wao)
    }

    restoreEnergy(){
        this.energy+=0.5;
        if(this.energy>=this.maxEnergy){
            this.sleeping=false;
            this.play('walk-right');
            this.setScale(1)

            this.zzz.visible=false

            this.sleepTimer.paused=true;
        }
    }

    goToSleep(){
        this.sleeping=true;
        this.play('sleep'); 
        this.setScale(0.7)

        //reset timer
        this.sleepTimer.reset({
            delay: 60000,                
            callback: this.restoreEnergy,
            args: [],
            callbackScope: this,
            loop: true,
            repeat: 0,
            startAt: 0,
            timeScale: 1,
            paused: false
        })
        this.scene.time.addEvent(this.sleepTimer);

        //center position
        let gridPoint=this.grid.screenToGrid(this.x,this.y)
        this.x=(gridPoint.x*this.grid.tileSize)+this.grid.tileSize*0.5;
        this.y=(gridPoint.y*this.grid.tileSize)+this.grid.tileSize*0.5;

        this.zzz.x=this.x
        this.zzz.y=this.y
        this.zzz.visible=true
 
    }

    moveNextPath(){


    

        // let gridPoint=this.grid.screenToGrid(this.x,this.y)
        // if(this.currentObjective.x===gridPoint.x && this.currentObjective.y===gridPoint.y){
        //     console.log("can drop")
        //     if(this.canDropBomb(gridPoint.x,gridPoint.y)){
        //         //put bomb in mineral
        //         console.log("put bomb")

        //         this.placeBomb(this.x,this.y) 
        //             this.energy-=this.power;  
        //             if(this.energy<=0){
        //                 this.goToSleep();
        //             }              
        //     }

        //     //go back 
        //     this.goBack();
        //     return
        // }

        //check if the path has been blocked by a bomb
        // for(let i=0;i<this.path.length;i++){
        //     if(!this.grid.isEmptyCell(this.path[i].y,this.path[i].x)){
        //         this.removePath();
        //         console.log("path blocked")
        //         return
        //     }
        // }
    

        this.prevPath=this.currentPath;

        if(this.path!=null)
            this.currentPath=this.path.shift();
        else{
            this.removePath()
            return
        }
        if(this.currentPath!=null){
            

            let gridPoint=this.grid.screenToGrid(this.x,this.y);
            if(this.currentObjective!=null && this.currentObjective.x==gridPoint.x && this.currentObjective.y==gridPoint.y){
                console.log("can drop")
                if(this.canDropBomb(gridPoint.x,gridPoint.y)){
                    //put bomb in mineral
                    console.log("put bomb")
    
                    this.cellClear=true;
    
                    this.placeBomb(gridPoint.x,gridPoint.y) 
                        this.energy-=5;  
                        if(this.energy<=0){
                            this.goToSleep();
                            this.removePath()
                            return
                        }              
                }
    
                this.cellClear=true;
                //go back 
                // this.goBack();
                this.removePath();
                return
            }
            // if(this.grid.isBombCell(this.currentPath.x,this.currentPath.y)){
            //    // this.goBack();
            //    this.removePath();
            //     return;
            // }

            //put a bomb if it's item in the way
            // if(this.grid.isDesiredBombCell(this.currentPath.y,this.currentPath.x) && this.canDropBomb(this.currentPath.y,this.currentPath.x)){
            //     this.placeBomb(this.currentPath.y,this.currentPath.x) 
            //             this.energy-=5;  
            //             if(this.energy<=0){
            //                 this.goToSleep();
            //                 return
            //             }    
            // }

            if(this.prevPath!=null){
                if(this.currentPath.y >this.prevPath.y){
                    //move right
                    this.playingKey=3;
                }
                else if(this.currentPath.y <this.prevPath.y){
                    //move left
                    this.playingKey=2;
                }
                else if(this.currentPath.x >this.prevPath.x){
                    //move up
                    this.playingKey=0;
                }
                else if(this.currentPath.x <this.prevPath.x){
                    //move down
                    this.playingKey=1;
                }
            }
            //console.log(gridPoint)
            //move
           this.tween= this.scene.tweens.add({
                targets: this,
                x:(this.currentPath.y*this.grid.tileSize)+this.grid.tileSize*0.5,
                y:(this.currentPath.x*this.grid.tileSize)+this.grid.tileSize*0.5,
                ease: 'Linear',   
                duration: 10000/this.speed,
                repeat: 0,        
                yoyo: false,
                onComplete: this.moveNextPath,
                onCompleteScope: this,
                onCompleteParams: [],
            });
                    
        }
        else{
           // console.log("current null
           this.removePath()
        }
    }


    goBack(){
        
        if(this.prevPath!=null){
            this.scene.tweens.add({
                targets: this,
                x:(this.prevPath.y*this.grid.tileSize)+this.grid.tileSize*0.5,
                y:(this.prevPath.x*this.grid.tileSize)+this.grid.tileSize*0.5,
                ease: 'Linear',   
                duration: 10000/this.speed,
                repeat: 0,        
                yoyo: false,
                onComplete: this.removePath(),
                onCompleteScope: this,
                onCompleteParams: [],
            });
        }else{
            this.removePath()
        }
    }
    removePath(){
        if(this.tween!=null)
        this.tween.remove()
        this.startedPath=false;
        this.path=null;
    }
}