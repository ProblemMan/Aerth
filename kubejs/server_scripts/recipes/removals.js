// priority: 1

onEvent('recipes', r => {
    //Waystones
    r.remove({input: 'waystones:warp_stone'})

    //Thermal
    r.remove({output: 'thermal:machine_frame'})
    r.remove({output: 'thermal:obsidian_glass'})


    //Applied Energistics 2
    r.remove({output: /appliedenergistics2:.*sky_stone.*/})
    r.remove({output: 'appliedenergistics2:sky_dust'})

    //Tinkers Construct
    r.remove({id: /tconstruct:tools\/severing\/.*_head/})
    r.remove({id: /tconstruct:tools\/severing\/.*_skull/})
})