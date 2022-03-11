class Bomb extends Phaser.GameObjects.Sprite
{
    grid;

    scene;

    owner;


    constructor (scene,x,y,grid,owner)
    {
        super(scene,x,y,'bomb');

        this.owner = owner;

        this.grid=grid;

        this.x=x+26;//center the image
        this.y=y+26;//center the image

        this.scene=scene;

        this.depth=1

        //this.setOrigin(0);

        //zoom
        // this.displayWidth=32;
        // this.displayHeight=32;

        if (this.owner) {
            this.owner.currentPoops++;
          }



        var duration=3000;

        this.explodeTimer = scene.time.delayedCall(duration, this.explode, null,this); 

        scene.tweens.add({
                    targets: this,
                    scaleX:{from:0.60,to:0.8},
                    scaleY:{from:0.825,to:0.675},
                    ease: 'Linear',      
                    duration: 400,
                    repeat: -1,           
                    yoyo: true
                });
        //add this sprite to the scene
        scene.add.existing(this);
    }
    
    explode() {
        this.explodeTimer.destroy();
        if (this.owner) {
          this.owner.currentPoops -= 1;
        }
        this.grid.removeBomb(this.x-26,this.y-26);
    
        
        //self position explosion
        new Explosion(this.scene,this.x-26,this.y-26,this.grid,this);


        // create explosions in each direction
        this.createExplosions(-1, -this.owner.range, -1, "x");
        this.createExplosions(1, this.owner.range, +1, "x");
        this.createExplosions(-1, -this.owner.range, -1, "y");
        this.createExplosions(1, this.owner.range, +1, "y");
    
        this.destroy();
      }

      createExplosions(initialIndex, finalIndex, step, axis){
            var index, explosionPosition;
            var gridPoint=this.grid.screenToGrid(this.x,this.y);
            for (index = initialIndex; Math.abs(index) <= Math.abs(finalIndex); index += step) {
                // the position is different accoring to the axis
                if (axis === "x") {
                    explosionPosition = new Phaser.Geom.Point(gridPoint.x + (index), gridPoint.y);
                } else {
                    explosionPosition = new Phaser.Geom.Point(gridPoint.x, gridPoint.y + (index));
                }
                if (this.grid.isEmptyCell(explosionPosition.x,explosionPosition.y) || this.grid.isBombCell(explosionPosition.x,explosionPosition.y)) {
                    // create a new explosion in the new position
                    new Explosion(this.scene,explosionPosition.x*this.grid.tileSize,explosionPosition.y*this.grid.tileSize,this.grid,this);
                }else if (this.grid.isStoneCell(explosionPosition.x,explosionPosition.y)) {
                    //destroy a stone
                    this.grid.data[explosionPosition.x][explosionPosition.y]=0;
                    this.grid.img[explosionPosition.x][explosionPosition.y].destroy();
                    new Explosion(this.scene,explosionPosition.x*this.grid.tileSize,explosionPosition.y*this.grid.tileSize,this.grid,this);
                    break;//stop the propagation
                }else if (this.grid.isItemCell(explosionPosition.x,explosionPosition.y)) {
                    if(this.grid.img[explosionPosition.x][explosionPosition.y].hurt(this.owner.power,this.owner)){
                        //destroy a item
                        this.grid.data[explosionPosition.x][explosionPosition.y]=0;
                        this.grid.img[explosionPosition.x][explosionPosition.y].destroy();
                        new Explosion(this.scene,explosionPosition.x*this.grid.tileSize,explosionPosition.y*this.grid.tileSize,this.grid,this);
                        this.grid.decreaseTotalMinerals();
                    }
                    break;//stop the propagation

                } else {
                    break;
                }
            }
        }
    
      kill() {
        this.explode();
      }
}