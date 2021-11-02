// priority: 1

onEvent('recipes', r => {

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

    r.shaped('appliedenergistics2:sky_stone_chest', [
        'BBB',
        'B B',
        'BBB'
      ], {
        B: 'minecraft:blackstone'
      })
  
      r.shaped('appliedenergistics2:smooth_sky_stone_chest', [
        'BBB',
        'B B',
        'BBB'
      ], {
        B: 'minecraft:polished_blackstone'
      })
})