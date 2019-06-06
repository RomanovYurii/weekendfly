const airports = [
    {
        key: 'Lodz',
        code: 'LCJ',
        destinations: ['Athens', 'Dublin', 'East Midlands', 'London Stansted']
    },   //   ATH        DUB             EMA            STN
    {
        key: 'Wroclaw',
        code: 'WRO',
        destinations: ['Athens', 'East Midlands', 'London Stansted', 'Dublin',
            'Lisbon Portela', 'Ciampino']
    }, //    LIS                  CIA
    {
        key: 'Katowice',
        code: 'KTW',
        destinations: ['Warsaw Chopin', 'Hamburg', 'Milan Malpensa', 'Kyiv Boryspil']
    },   //     WAW    HAM      MXP      KBP
    {
        key: 'Gdansk',
        code: 'GDN',
        destinations: ['Barcelona Reus', 'Milan', 'Krakow', 'Oslo Torp']
    },  //      REU        MXP      KRK     TRF
    {
        key: 'Krakow',
        code: 'KRK',
        destinations: ['Porto', 'Athens', 'Bordeaux', 'Gdansk']
    },  //      OPO        ATH       BOD      GDN
    {
        key: 'Warsaw Chopin',
        code: 'WAW',
        destinations: ['Szczecin']
    },  //      SZZ
    //---------------тут закончились аэропорты откуда лететь, и наинаются, куда лететь:
    {
        key: 'Athens',
        code: 'ATH',
        destinations: []
    },
    {
        key: 'Dublin',
        code: 'DUB',
        destinations: []
    },
    {
        key: 'East Midlands',
        code: 'EMA',
        destinations: []
    },
    {
        key: 'London Stansted',
        code: 'STN',
        destinations: []
    },
    {
        key: 'Lisbon Portela',
        code: 'LIS',
        destinations: []
    },
    {
        key: 'Ciampino',
        code: 'CIA',
        destinations: []
    },
    {
        key: 'Hamburg Airport',
        code: 'HAM',
        destinations: []
    },
    {
        key: 'Milan Malpensa',
        code: 'MXP',
        destinations: []
    },
    {
        key: 'Kyiv Boryspil',
        code: 'KBP',
        destinations: []
    },
    {
        key: 'Barcelona Reus',
        code: 'REU',
        destinations: []
    },
    {
        key: 'Oslo Torp',
        code: 'TRF',
        destinations: []
    },
    {
        key: 'Porto',
        code: 'OPO',
        destinations: []
    },
    {
        key: 'Bordeaux',
        code: 'BOD',
        destinations: []
    },
    {
        key: 'Szczecin',
        code: 'SZZ',
        destinations: []
    },

]

export default airports;
