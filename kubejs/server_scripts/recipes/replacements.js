// priority: 1

onEvent('recipes', r => {
    //Applied Energistics 2
    r.replaceInput({}, 'appliednergistics:sky_stone_block', 'minecraft:blackstone')
    r.replaceInput({type: 'minecraft:crafting_shaped'}, 'appliedenergistics2:smooth_sky_stone_block', 'minecraft:polished_blackstone')

    //Tinkers Construct
    r.replaceInput('minecraft:experience_bottle', 'tconstruct:earth_slime_crystal')

})