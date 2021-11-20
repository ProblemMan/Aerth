// priority: 1

onEvent('recipes', r => {
    //Applied Energistics 2
    r.replaceInput({type: 'minecraft:crafting_shaped'}, 'appliednergistics:sky_stone_block', 'minecraft:blackstone')
    r.replaceInput({type: 'minecraft:crafting_shaped'}, 'appliedenergistics2:smooth_sky_stone_block', 'minecraft:polished_blackstone')
    r.replaceInput({}, 'appliedenergistics2:purified_fluix_crystal', 'appliedenergistics2:fluix_crystal')

    //Tinkers Construct
    r.replaceInput('minecraft:experience_bottle', 'tconstruct:earth_slime_crystal')
    r.replaceInput({output: 'tconstruct:grout'}, 'minecraft:clay_ball', 'minecraft:blackstone')

    //Thermal
    r.replaceInput({not: {output: 'minecraft:iron_ingot'}},'minecraft:iron_nugget', 'thermal:tin_nugget')
    r.replaceInput({id: /thermal:dynamo.*/,}, 'minecraft:iron_ingot', 'thermal:signalum_ingot')

    //Minecraft
    r.replaceInput({output: 'minecraft:bucket'}, 'minecraft:iron_ingot', 'thermal:tin_ingot')
})