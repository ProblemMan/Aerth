// priority: 1

onEvent('recipes', r => {
    //Removals
    r.remove({input: 'waystones:warp_stone'})
    r.remove({output: 'thermal:machine_frame'})
    r.remove({output: 'thermal:obsidian_glass'})
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

    //seeds //TODO: Add others, finalise numbers (after augments added)
    r.recipes.thermal.insolator('appliedenergistics2:purified_certus_quartz_crystal', 'appliedenergistics2:certus_crystal_seed').water(64000).energyMod(10.0)
    
    let tinkersCastingTable = (output, cool_ticks, input_fluid, fluid_mb, input_item) => {
        r.custom({
            type: "tconstruct:casting_basin",
            fluid: {
              name: input_fluid,
              amount: fluid_mb
            },
            cast: input_item,
            cast_consumed: true,
            result: output,
            cooling_time: cool_ticks
          })
    }
    let tinkersComplexAlloy = (output, output_mb, temperature, inputA, inputA_mb, inputB, inputB_mb, inputC, inputC_mb) => {
        r.custom({
        type: "tconstruct:alloy",
        inputs: [
          {
            name: inputA,
            amount: inputA_mb
          },
          {
            name: inputB,
            amount: inputB_mb
          },
          {
            name: inputC,
            amount: inputC_mb
          }
        ],
        result: {
          fluid: output,
          amount: output_mb
        },
        temperature: temperature
      })
    }
    let tinkersSimpleAlloy = (output, output_mb, temperature, inputA, inputA_mb, inputB, inputB_mb) => {
        r.custom({
        type: "tconstruct:alloy",
        inputs: [
          {
            name: inputA,
            amount: inputA_mb
          },
          {
            name: inputB,
            amount: inputB_mb
          },
        ],
        result: {
          fluid: output,
          amount: output_mb
        },
        temperature: temperature
      })
    }
    tinkersSimpleAlloy('kubejs:molten_hardened_glass', 100, 500, 'tconstruct:molten_glass', 100, 'tconstruct:molten_obsidian', 50)
    r.recipes.thermal.bottler('thermal:machine_frame', ['#forge:gears/quartz', Fluid.of('kubejs:molten_hardened_glass', 1000)])
    tinkersCastingTable('thermal:machine_frame', 200, 'kubejs:molten_hardened_glass', 4000, '#forge:gears/quartz')
    r.recipes.thermal.press('thermal:machine_frame', '#forge:gears/quartz', Item.of('4x thermal:obsidian_glass'))
    tinkersCastingTable('thermal:obsidian_glass', 100, 'kubejs:molten_hardened_glass', 1000)
})