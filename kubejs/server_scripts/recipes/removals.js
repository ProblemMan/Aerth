// priority: 1

onEvent('recipes', r => {
    //Waystones
    r.remove({input: 'waystones:warp_stone'})
    r.remove({output: 'waystones:warp_stone'})

    //Thermal
    r.remove({output: 'thermal:machine_frame'})
    r.remove({output: 'thermal:obsidian_glass'})
    r.remove({id: /thermal:machine\/crucible\/.*redstone.*/})
    r.remove({output: 'thermal:rf_coil'})
    r.remove({output: 'thermal:signalum_ingot', not: {input: 'thermal:signalum_dust'}})
    r.remove({output: 'thermal:signalum_dust'})

    //Applied Energistics 2
    r.remove({output: /appliedenergistics2:.*sky_stone.*/})
    r.remove({output: 'appliedenergistics2:sky_dust'})

    //Tinkers Construct
    r.remove({id: /tconstruct:tools\/severing\/.*_head/})
    r.remove({id: /tconstruct:tools\/severing\/.*_skull/})
    r.remove({id: 'tconstruct:smeltery/seared/grout_multiple'})
    r.remove({id: /tconstruct:smeltery\/casting\/seared\/.*/})
    //r.remove({id: 'tconstruct:smeltery/alloys/molten_slimesteel'}) //TODO: Come up with alternate recipe for this.
    r.remove({id: /tconstruct:tables\/.*_anvil/})
    r.remove({id: 'tconstruct:smeltery/alloys/molten_signalum'})


    //Ores
    for (i of global.disabled_ores) {
      r.remove({input: i})    
      r.remove({id: /tconstruct:smeltery\/melting\/.*\/i/})
    }
})