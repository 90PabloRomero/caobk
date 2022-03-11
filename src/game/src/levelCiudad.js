class LevelCiudad extends Level
{
    constructor (stringKey)
    {
        super(stringKey)
    }

    preload ()
    {
        super.preload();
        
        //tiles
        this.load.image('ground-ciudad', 'assets/Mapa Ciudad/SueloCiudad.png');
        this.load.image('stone-ciudad', 'assets/Mapa Ciudad/Edificio.png');
        this.load.image('obstacle-ciudad', 'assets/Mapa Ciudad/BocaIncendios.png');
        //border
        this.load.image('border-ciudad', 'assets/Mapa Ciudad/BordesCiudad.png');


    }

    create ()
    {
        super.create();

        let ground='ground-ciudad';
        let stone='stone-ciudad';
        let obstacle='obstacle-ciudad';
        let border='border-ciudad';


        super.createLevel(ground,stone,obstacle,border);


        // super.addObstacles(obstacle,100);


    }
}
