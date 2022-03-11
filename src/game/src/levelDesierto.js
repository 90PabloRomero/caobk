class LevelDesierto extends Level
{
    constructor (stringKey)
    {
        super(stringKey)
    }

    preload ()
    {
        super.preload();
        
        //tiles
        this.load.image('ground-Desierto', 'assets/Mapa Desierto/SueloDesierto.png');
        this.load.image('stone-Desierto', 'assets/Mapa Desierto/Cactus.png');
        this.load.image('obstacle-Desierto', 'assets/Mapa Desierto/ObstaculoDesierto.png');
        //border
        this.load.image('border-Desierto', 'assets/Mapa Desierto/BordesDesierto.png');


    }

    create ()
    {
        super.create();

        let ground='ground-Desierto';
        let stone='stone-Desierto';
        let obstacle='obstacle-Desierto';
        let border='border-Desierto';


        super.createLevel(ground,stone,obstacle,border);


        // super.addObstacles(obstacle,100);


    }
}
