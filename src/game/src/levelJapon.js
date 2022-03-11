class LevelJapon extends Level
{
    constructor (stringKey)
    {
        super(stringKey)
    }

    preload ()
    {
        super.preload();
        
        //tiles
        this.load.image('ground-Japon', 'assets/Mapa Japon/SueloJapon.png');
        this.load.image('stone-Japon', 'assets/Mapa Japon/EstructuraElementoFijo.png');
        this.load.image('obstacle-Japon', 'assets/Mapa Japon/SushiObstaculo.png');
        //border
        this.load.image('border-Japon', 'assets/Mapa Japon/BordesJapon.png');


    }

    create ()
    {
        super.create();

        let ground='ground-Japon';
        let stone='stone-Japon';
        let obstacle='obstacle-Japon';
        let border='border-Japon';


        super.createLevel(ground,stone,obstacle,border);


        // super.addObstacles(obstacle,100);


    }
}
