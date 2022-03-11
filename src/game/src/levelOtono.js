class LevelOtono extends Level
{
    constructor (stringKey)
    {
        super(stringKey)
    }

    preload ()
    {
        super.preload();
        
        //tiles
        this.load.image('ground-Otono', 'assets/Mapa Otono/SueloOtono.png');
        this.load.image('stone-Otono', 'assets/Mapa Otono/ArbolOtono.png');
        this.load.image('obstacle-Otono', 'assets/Mapa Otono/ObstaculoOtono.png');
        //border
        this.load.image('border-Otono', 'assets/Mapa Otono/BordesOtono.png');


    }

    create ()
    {
        super.create();

        let ground='ground-Otono';
        let stone='stone-Otono';
        let obstacle='obstacle-Otono';
        let border='border-Otono';


        super.createLevel(ground,stone,obstacle,border);


        // super.addObstacles(obstacle,100);


    }
}
