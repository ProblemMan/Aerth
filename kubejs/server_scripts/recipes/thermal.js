// priority: 1

onEvent('recipes', r => {
    //Applied Energistics 2
    //TODO: Add others, finalise numbers (after augments added)
    r.recipes.thermal.insolator('appliedenergistics2:purified_certus_quartz_crystal', 'appliedenergistics2:certus_crystal_seed').water(64000).energyMod(10.0).id('aerth:insolator/purified_certus_quartz_crystal')


    //Thermal
    r.recipes.thermal.press('thermal:machine_frame', [Item.of('4x thermal:obsidian_glass'), '#forge:gears/quartz']).id('aerth:press/machine_frame')
    r.recipes.thermal.bottler('thermal:machine_frame', ['#forge:gears/quartz', Fluid.of('kubejs:molten_hardened_glass', 1000)]).id('aerth:bottler/machine_frame')
    r.recipes.thermal.crucible(fluid.of('thermal:redstone', 144), 'thermal:cinnabar').id('aerth:crucible/cinnabar_to_molten')
    r.recipes.thermal.crucible(fluid.of('thermal:redstone', 1296), 'thermal:cinnabar_block').energyMod(10).id('aerth:crucible/cinnabar_block_to_molten')
    r.recipes.thermal.smelter('4x thermal:signalum_ingot', ['3x #forge:copper', '#forge:silver', '4x #forge:cinnabar']).id('aerth:smelter/alloy/signalum')

    //aerth
    r.recipes.thermal.pulverizer(['thermal:oil_sand', Item.of('thermal:tar').chance(0.5), Item.of('minecraft:gravel').chance(0.2)], 'kubejs:bitumen_ore').id('aerth:pulveriser/bitumen_ore')

    //Tinkers Construct
    r.recipes.thermal.smelter('tconstruct:cobalt_ingot', ['2x #forge:ingots/lead', '#forge:dusts/apatite']).id('aerth:smelter/alloy/cobalt')


})