class LevelParque extends Level
{
    constructor (stringKey)
    {
        super(stringKey)
    }

    preload ()
    {
        super.preload();
        
        //tiles
        this.load.image('ground-Parque', 'assets/Mapa Parque/SueloParque.png');
        this.load.image('stone-Parque', 'assets/Mapa Parque/Arbusto.png');
        this.load.image('obstacle-Parque', 'assets/Mapa Parque/TroncoObstaculo.png');
        //border
        this.load.image('border-Parque', 'assets/Mapa Parque/BordesParque.png');


    }

    create ()
    {
        super.create();

        let ground='ground-Parque';
        let stone='stone-Parque';
        let obstacle='obstacle-Parque';
        let border='border-Parque';


        super.createLevel(ground,stone,obstacle,border);


        // super.addObstacles(obstacle,100);


    }
}
