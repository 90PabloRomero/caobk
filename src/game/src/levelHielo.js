class LevelHielo extends Level
{
    constructor (stringKey)
    {
        super(stringKey)
    }

    preload ()
    {
        super.preload();
        
        //tiles
        this.load.image('ground-Hielo', 'assets/Mapa Hielo/SueloHielo.png');
        this.load.image('stone-Hielo', 'assets/Mapa Hielo/HieloElementoFijo.png');
        this.load.image('obstacle-Hielo', 'assets/Mapa Hielo/ObstaculoNieve.png');
        //border
        this.load.image('border-Hielo', 'assets/Mapa Hielo/BordesHielo.png');


    }

    create ()
    {
        super.create();

        let ground='ground-Hielo';
        let stone='stone-Hielo';
        let obstacle='obstacle-Hielo';
        let border='border-Hielo';


        super.createLevel(ground,stone,obstacle,border);


        // super.addObstacles(obstacle,100);


    }
}
