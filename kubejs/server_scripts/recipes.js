// priority: 1
onEvent('recipes', r => {
    //Removals
    r.remove({input: 'waystones:warp_stone'})

    //Additions

    //waystones
    r.shaped('2x waystones:sharestone', [
        ' B ',
        'BWB',
        'BCB'
      ], {
        B: '#minecraft:stone_bricks',
        W: 'waystones:warp_stone',
        C: '#forge:storage_blocks/certus_quartz'
    })
    r.shaped('waystones:warp_stone', [
        ' D ',
        'DBD',
        ' D '
    ], {
        D: '#forge:dyes/purple',
        B: 'appliedenergistics2:matter_ball'
    })
    r.shaped('waystones:waystone', [
        ' B ',
        'WBW',
        'BSB'
    ], {
        B: 'minecraft:stone_bricks',
        W: 'waystones:warp_stone',
        S: 'appliedenergistics2:singularity'
    })
    r.shaped('waystones:mossy_waystone', [
        ' B ',
        'WBW',
        'BSB'
    ], {
        B: 'minecraft:mossy_stone_bricks',
        W: 'waystones:warp_stone',
        S: 'appliedenergistics2:singularity'
    })
    r.shaped('waystones:sandy_waystone', [
        ' B ',
        'WBW',
        'BSB'
    ], {
        B: 'minecraft:cut_sandstone',
        W: 'waystones:warp_stone',
        S: 'appliedenergistics2:singularity'
    })
    r.shaped('waystones:portstone', [
        ' B ',
        'BSB',
        'BBB'
    ], {
        B: '#minecraft:stone_bricks',
        S: 'appliedenergistics2:singularity'
    })

    //pure seeds
    
    let seedGrow = (crystal, seed) => {
        let seed_stages = [60, 120, 180, 240, 300, 360, 420, 480, 540]

        r.recipes.thermal.insolator(Item.of(seed, `{p:${seed_stages[1]}}`), seed).water(32000)

        for (let i in seed_stages) {
            if (i < 9){
                r.recipes.thermal.insolator(Item.of(seed, `{p:${seed_stages[i] + 60}}`), Item.of(seed, `{p:${seed_stages[i]}}`)).water(1000)
            }
        }
        r.recipes.thermal.insolator(crystal, Item.of(seed, `{p:${seed_stages[seed_stages.length - 1]}}`)).water(1000)

    }
    seedGrow('appliedenergistics2:purified_certus_quartz_crystal', 'appliedenergistics2:certus_crystal_seed')
    

    
    
})