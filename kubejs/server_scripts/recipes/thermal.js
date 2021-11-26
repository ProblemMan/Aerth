// priority: 1

onEvent('recipes', r => {
	Functions:{
		const treeExtractor = (output, output_mb, log, leaves) => {
			r.custom({
				type: 'thermal:tree_extractor',
				trunk: log,
				leaves: leaves,
				result: {
					fluid: output,
					amount: output_mb
				}
			})
		}
		const rockGen = (output, adjacent, below) => {
			r.custom({
				type: 'thermal:rock_gen',
				adjacent: adjacent,
				below: below,
				result: {
					item: output
				}
			})
		}
	}
	Applied_Energistics_2:{
		//TODO: Add others, finalise numbers (after augments added)
		r.recipes.thermal.insolator('appliedenergistics2:purified_certus_quartz_crystal', 'appliedenergistics2:certus_crystal_seed').water(64000).energyMod(10.0).id('aerth:insolator/purified_certus_quartz_crystal')
	}
	Thermal: {
		r.recipes.thermal.press('thermal:machine_frame', [Item.of('4x thermal:obsidian_glass'), '#forge:gears/quartz']).id('aerth:press/machine_frame')
		r.recipes.thermal.bottler('thermal:machine_frame', ['#forge:gears/quartz', Fluid.of('aerth:molten_hardened_glass', 1000)]).id('aerth:bottler/machine_frame')
		r.recipes.thermal.crucible(fluid.of('thermal:redstone', 144), 'thermal:cinnabar').id('aerth:crucible/cinnabar_to_molten')
		r.recipes.thermal.crucible(fluid.of('thermal:redstone', 1296), 'thermal:cinnabar_block').energyMod(10).id('aerth:crucible/cinnabar_block_to_molten')
		r.recipes.thermal.smelter('4x thermal:signalum_ingot', ['3x #forge:copper', '#forge:silver', '4x #forge:cinnabar']).id('aerth:smelter/alloy/signalum')
	}
	Aerth: {
		r.recipes.thermal.pulverizer(['thermal:oil_sand', Item.of('thermal:tar').chance(0.5), Item.of('minecraft:gravel').chance(0.2)], 'aerth:bitumen_ore').id('aerth:pulveriser/bitumen_ore')
		basalt_to_iron: {
			r.recipes.thermal.pulverizer([Item.of('2x aerth:basalt_chunks'), Item.of('aerth:basalt_chunks').chance(0.3)], 'minecraft:basalt').id('aerth:pulveriser/basalt')
			
			r.recipes.thermal.crucible(Fluid.of('aerth:basaltic_lava', 100), 'aerth:basalt_chunks').energyMod(4.0).id('aerth:crucible/basalt_chunks')
			r.recipes.thermal.crucible(Fluid.of('aerth:basaltic_lava', 100), 'minecraft:basalt').energyMod(2.0).id('aerth:crucible/basalt')
			
			r.recipes.thermal.refinery([Item.of('minecraft:flint').chance(0.1), Fluid.of('minecraft:lava', 100), Fluid.of('tconstruct:molten_iron', 16)], Fluid.of('aerth:basaltic_lava', 250)).energyMod(5.0).id('aerth:refinery/basaltic_lava')
		}
	}
	
	Tinkers_Construct:{
		r.recipes.thermal.smelter('tconstruct:cobalt_ingot', ['2x #forge:ingots/lead', '#forge:dusts/apatite']).id('aerth:smelter/alloy/cobalt')
		treeExtractor('tconstruct:earth_slime', 25, 'tconstruct:greenheart_log', 'tconstruct:earth_slime_leaves')
		treeExtractor('tconstruct:sky_slime', 25, 'tconstruct:skyroot_log', 'tconstruct:ender_slime_leaves')
		treeExtractor('tconstruct:ender_slime', 25, 'tconstruct:greenheart_log', 'tconstruct:ender_slime_leaves')
		treeExtractor('tconstruct:blood', 25, 'tconstruct:bloodshroom_log', 'tconstruct:blood_slime_leaves')
	}
	Minecraft: {
		rockGen('minecraft:basalt', 'minecraft:blue_ice', 'minecraft:bedrock')
	}
})