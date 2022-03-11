class LevelPlaya extends Level
{
    constructor (stringKey)
    {
        super(stringKey)
    }

    preload ()
    {
        super.preload();
        
        //tiles
        this.load.image('ground-Playa', 'assets/Mapa Playa/SueloPlaya.png');
        this.load.image('stone-Playa', 'assets/Mapa Playa/palmas.png');
        this.load.image('obstacle-Playa', 'assets/Mapa Playa/conchaObstaculo.png');
        //border
        this.load.image('border-Playa', 'assets/Mapa Playa/BordesPlaya.png');


    }

    create ()
    {
        super.create();

        let ground='ground-Playa';
        let stone='stone-Playa';
        let obstacle='obstacle-Playa';
        let border='border-Playa';


        super.createLevel(ground,stone,obstacle,border);


        // super.addObstacles(obstacle,100);


    }
}
