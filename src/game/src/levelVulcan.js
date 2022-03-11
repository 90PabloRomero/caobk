class LevelVulcan extends Level
{
    constructor (stringKey)
    {
        super(stringKey)
    }

    preload ()
    {
        super.preload();
        
        //tiles
        this.load.image('ground-vulcan', 'assets/Mapa Volcan/SueloVolcan.png');
        this.load.image('stone-vulcan', 'assets/Mapa Volcan/piedraVolcanica.png');
        this.load.image('obstacle-vulcan', 'assets/Mapa Volcan/fuegoObstaculo.png');
        //border
        this.load.image('border-vulcan', 'assets/Mapa Volcan/BordesVolcan.png');


    }

    create ()
    {
        super.create();

        let ground='ground-vulcan';
        let stone='stone-vulcan';
        let obstacle='obstacle-vulcan';
        let border='border-vulcan';


        super.createLevel(ground,stone,obstacle,border);


        // super.addObstacles(obstacle,100);


    }
}
