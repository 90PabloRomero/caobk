class LevelCastillo extends Level
{
    constructor (stringKey)
    {
        super(stringKey)
    }

    preload ()
    {
        super.preload();
        
        //tiles
        this.load.image('ground-castillo', 'assets/Mapa Castillo/SueloCastillo.png');
        this.load.image('stone-castillo', 'assets/Mapa Castillo/PiedraFija.png');
        this.load.image('obstacle-castillo', 'assets/Mapa Castillo/ObstaculoBarril.png');
        //border
        this.load.image('border-castillo', 'assets/Mapa Castillo/BordesCastillo.png');


    }

    create ()
    {
        super.create();

        let ground='ground-castillo';
        let stone='stone-castillo';
        let obstacle='obstacle-castillo';
        let border='border-castillo';


        super.createLevel(ground,stone,obstacle,border);


        // super.addObstacles(obstacle,100);


    }
}
