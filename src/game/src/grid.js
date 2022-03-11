class Grid 
{
    sizeX=37;
    sizeY=21;

    borderWitdh=1;
    borderHeight=2;

    tileSize=52;

    data=[];//0 pass, 1 wall , 2 stone, 3 item, 4 bomb

    img=[];//stores the images of destructible tiles

    scene;

    easyStar;

    candidates=[]

    calls=0

    checked=[]

    totalMinerals=0;

    constructor (scene)
    {    
       this.scene=scene;

       this.initializeGrid();

       this.initializeStones();       

    }

    initializePathFinding(){
        
       //for pathfinding
       this.easyStar = new EasyStar.js();

       
       this.easyStar.setGrid(this.data); //REMEMBER: the grid data x is the easyStar y and viceversa

       this.easyStar.setAcceptableTiles([0,4]);

       this.easyStar.setIterationsPerCalculation(1000);
    }

    initializeGrid(){
         for(let x=0;x<this.sizeX;x++){
            //create the array
            this.data[x]=[];
            //create the imgs array
            this.img[x]=[];
            for(let y=0;y<this.sizeY;y++){
                //clear array
                this.data[x][y]=0;

                if(x<this.borderWitdh || x>=this.sizeX-this.borderWitdh || 
                    y<this.borderHeight || y>=this.sizeY-this.borderHeight || 
                    (x%2==0 && y%2==1)){
                        this.data[x][y]=1;

                    }
            }
        }
    }

    initializeStones(){
        for(let i=0;i<95;i++){
            let gridPoint=this.getEmptyCell();
            this.data[gridPoint.x][gridPoint.y]=2;
        }
    }

    screenToGrid(x, y) {
        return new Phaser.Geom.Point(Math.floor(x/ this.tileSize), Math.floor(y / this.tileSize));
    }

    gridToScreen(x, y) {
        return new Phaser.Geom.Point(Math.floor(x * this.tileSize), Math.floor(y * this.tileSize));
    }

    screenPointWalkable(x,y){
       // console.log("current_screen:"+x+","+y)
        var point=this.screenToGrid(x,y);
        return this.gridPointWalkable(point.x,point.y);
    }
    
    gridPointWalkable(x,y){
        //console.log("current:"+x+","+y+" "+this.sizeX+","+this.sizeY)
        return this.isValidCell(x,y)?  (this.data[x][y]==0 || this.data[x][y]==4) : false; 
    }

    isValidCell(x,y){
        return  x>=0 && x<this.sizeX && y>=0 && y<this.sizeY;
    }
    screenIsEmptyCell(x,y){
        var point=this.screenToGrid(x,y);
        return this.isEmptyCell(point.x,point.y);
    }

    isEmptyCell(x,y){
        return this.isValidCell(x,y) && this.data[x][y]==0;
    }

    isStoneCell(x,y){
        return this.isValidCell(x,y) && (this.data[x][y]==2);
    }

    isWallCell(x,y){
        return this.isValidCell(x,y) && (this.data[x][y]==1);
    }

    isItemCell(x,y){
        return this.isValidCell(x,y) && this.data[x][y]==3;
    }

    isBombCell(x,y){
        return this.isValidCell(x,y) && this.data[x][y]==4;
    }

    screenIsDesiredBombCell(x,y,range){
        var point=this.screenToGrid(x,y);
        return this.isDesiredBombCell(point.x,point.y,range);
    }

    isDesiredBombCell(x,y){

        if(this.isItemCell(x+1,y) || this.isStoneCell(x+1,y))//check right
            return true;
        else if(this.isItemCell(x-1,y) || this.isStoneCell(x-1,y))//check left
            return true;
        else if (this.isItemCell(x,y+1) || this.isStoneCell(x,y+1))//check down
            return true;
        else if(this.isItemCell(x,y-1) || this.isStoneCell(x,y-1))//check up
            return true;

        return false;
    }


    getEmptyCell(){

        for(let i=0; i<1000;i++){//avoid infinite loop
            let x=Phaser.Math.Between(0,this.sizeX-1);
            let y=Phaser.Math.Between(0,this.sizeY-1);
            if(this.data[x][y]===0){
                return new Phaser.Geom.Point(x,y);
            }
        }
        console.log("error");
        return new Phaser.Geom.Point(0,0);
    }

    screenPlaceBomb(x,y){
        var point=this.screenToGrid(x,y);
        this.data[point.x][point.y]=4;
        return point;
    }

    removeBomb(x,y){
        var gridPoint=this.screenToGrid(x,y);
        if(this.isValidCell(gridPoint.x,gridPoint.y))
            this.data[gridPoint.x][gridPoint.y]=0;

    }

    hasFreeSide(x,y){
        if(this.isEmptyCell(x+1,y))//check right
            return true;
        else if(this.isEmptyCell(x-1,y))//check left
            return true;
        else if(this.isEmptyCell(x,y+1))//check down
            return true;
        else if(this.isEmptyCell(x,y-1))//check up
            return true;

        return false;
    }

    findCandidates(startX,startY){     

        //console.log(this.calls++)
        //greedy algorithm
        if(!this.checked[startX][startY][2]){//check E
            this.checked[startX][startY][2]=true        
            this.checked[startX+1][startY][3]=true        
            if(this.data[startX+1][startY]==0){
                this.findCandidates(startX+1,startY);     
            } else if(this.data[startX+1][startY]==2 || this.data[startX+1][startY]==3){//item or stone
                this.candidates.push({prev:new Phaser.Geom.Point(startX,startY),point:new Phaser.Geom.Point(startX+1,startY),face:3})
            }
        }
    
         if(!this.checked[startX][startY][1]){//check S
            this.checked[startX][startY][1]=true        
            this.checked[startX][startY+1][0]=true        
            if(this.data[startX][startY+1]==0 ){
                this.findCandidates(startX,startY+1);
            }else if(this.data[startX][startY+1]==2 || this.data[startX][startY+1]==3){//item or stone
                    this.candidates.push({prev:new Phaser.Geom.Point(startX,startY),point:new Phaser.Geom.Point(startX,startY+1),face:0})
            }
        }   
        
        if(!this.checked[startX][startY][3]){//check W
            this.checked[startX][startY][3]=true        
            this.checked[startX-1][startY][2]=true        
            if(this.data[startX-1][startY]==0 ){
                this.findCandidates(startX-1,startY);
            }else if(this.data[startX-1][startY]==2 || this.data[startX-1][startY]==3){//item or stone
                    this.candidates.push({prev:new Phaser.Geom.Point(startX,startY),point:new Phaser.Geom.Point(startX-1,startY),face:2})
            }           
        }
        
        if(!this.checked[startX][startY][0]){//check N
            this.checked[startX][startY][0]=true        
            this.checked[startX][startY-1][1]=true        
            if(this.data[startX][startY-1]==0 ){
                        this.findCandidates(startX,startY-1);
            }else if(this.data[startX][startY-1]==2 || this.data[startX][startY-1]==3){//item or stone
                        this.candidates.push({prev:new Phaser.Geom.Point(startX,startY),point:new Phaser.Geom.Point(startX,startY-1),face:1})
            }   
        }
        
        return
    }

    selectCandidate(){
        let maxLife=0
        let item=null;
        //console.log(this.candidates.length)
        for(let i=this.candidates.length-1;i>=0;i--){
            if(this.img[this.candidates[i].point.x][this.candidates[i].point.y]==null)
                continue
            let life=this.img[this.candidates[i].point.x][this.candidates[i].point.y].life
            if((life)>maxLife){
                maxLife=(life)
                item=this.candidates[i]
            }
        }
        //console.log(item)
        return item;
    }


    clearChecked(){
        this.checked=[]
        for(let i=0;i<this.sizeX;i++){
            this.checked[i]=[]
            for(let j=0;j<this.sizeY;j++){
                this.checked[i][j]=[]
                //cell faces
                for(let k=0;k<4;k++){//0 N, S 1, E 2, W 3
                    this.checked[i][j][k]=false;
                }
                //drop limits walls
                //drop wall W
                if(i==0)
                    this.checked[i][j][3]=true;
                //drop wall E
                if(i==this.sizeX-1)
                    this.checked[i][j][2]=true;
                //drop wall N
                if(j==0)
                    this.checked[i][j][0]=true;
                //drop wall S
                if(j==this.sizeY-1)
                    this.checked[i][j][1]=true;
                    
            }
        }
    }

    findNextPath(bot,startX,startY){
        this.candidates=[]
        this.clearChecked()

        if(bot.cellClear && bot.cellFixed!=null){
            // console.log(bot.cellFixed)
            //drop the cell objective
            this.checked[bot.cellFixed.x][bot.cellFixed.y][bot.cellFace]=true;
            //drop the adjacents
            if(bot.cellFace==0) //N
                this.checked[bot.cellFixed.x][bot.cellFixed.y-1][1]=true;
            if(bot.cellFace==1) //S
                this.checked[bot.cellFixed.x][bot.cellFixed.y+1][0]=true;
            if(bot.cellFace==2) //E
                this.checked[bot.cellFixed.x+1][bot.cellFixed.y][3]=true;
            if(bot.cellFace==3) //W
                this.checked[bot.cellFixed.x-1][bot.cellFixed.y][2]=true;

        }

        this.findCandidates(startX,startY);
        let item=this.selectCandidate()
        if (item==null){
            bot.path=null;
          //  console.log("Item was not found.");
            return
        }
            
        bot.currentObjective=item.prev;
        // let gridPoint=this.screenToGrid(item.x,item.y)
      //  console.log(gridPoint)
       // console.log(startX,startY)
        this.easyStar.findPath(startY,startX,item.prev.y,item.prev.x, ( path) =>{
            if (path == null) {
                bot.path=null;
            //    console.log("Path was not found.");
            } else {
               // if(path.length>0){
                    //path.pop(); //drop the last position
                    //if(path.length>0){
                 //       console.log("Path was found. The first Point is " + path[0].x + " " + path[0].y);
                        bot.path=path;

                        bot.cellFixed=item.point
                        bot.cellFace=item.face
                        bot.cellClear=false
                        if(path.length==0)
                            bot.cellClear=true

                  //      console.log("Path was found.");
                        // for(let i=0;i<path.length;i++){
                        //     if(path[i]!=0){
                        //         bot.currentObjective=path[i];
                        //     }
                        // }
                    //}
                // }else{
                //     if(this.isEmptyCell(startX+1,startY))
                //         bot.path=[{x:startY,y:startX+1}];                    
                //     else if(this.isEmptyCell(startX-1,startY))
                //         bot.path=[{x:startY,y:startX-1}];                        
                //     else if(this.isEmptyCell(startX,startY+1))
                //         bot.path=[{x:startY+1,y:startX+1}];                    
                //     else if(this.isEmptyCell(startX,startY-1))
                //         bot.path=[{x:startY-1,y:startX}];
                //     console.log("path zero")
                //     //console.log("error: path zero")
                // }
            }
        });

        this.easyStar.calculate();
    }

    decreaseTotalMinerals(){
        this.totalMinerals--;
        console.log("total minerals",this.totalMinerals)
        if(this.totalMinerals<=0){
            this.scene.restartLevel();
        }
    }

    // destroy(){

    //     //destroy images
    //     for(let i=0;i<this.img.length;i++)
    //         if(this.img[i]!=null){
    //             console.log(this.img[i])
    //             this.img[i].destroy();
    //         }
    // }

}