// priority: 1

onEvent('recipes', r => {

	Waystones: {
		r.shaped('2x waystones:sharestone', [
			' B ',
			'BWB',
			'BCB'
		], {
			B: '#minecraft:stone_bricks',
			W: 'waystones:warp_stone',
			C: '#forge:storage_blocks/certus_quartz'
		}).id('aerth:crafting_shaped/sharestone')
		r.shaped('waystones:warp_stone', [
			' D ',
			'DBD',
			' D '
		], {
			D: '#forge:dyes/purple',
			B: 'appliedenergistics2:matter_ball'
		}).id('aerth:crafting_shaped/warp_stone')
		r.shaped('waystones:waystone', [
			' B ',
			'WBW',
			'BSB'
		], {
			B: 'minecraft:stone_bricks',
			W: 'waystones:warp_stone',
			S: 'appliedenergistics2:singularity'
		}).id('aerth:crafting_shaped/waystone')
		r.shaped('waystones:mossy_waystone', [
			' B ',
			'WBW',
			'BSB'
		], {
			B: 'minecraft:mossy_stone_bricks',
			W: 'waystones:warp_stone',
			S: 'appliedenergistics2:singularity'
		}).id('aerth:crafting_shaped/mossy_waystone')
		r.shaped('waystones:sandy_waystone', [
			' B ',
			'WBW',
			'BSB'
		], {
			B: 'minecraft:cut_sandstone',
			W: 'waystones:warp_stone',
			S: 'appliedenergistics2:singularity'
		}).id('aerth:crafting_shaped/sandy_waystone')
		r.shaped('waystones:portstone', [
			' B ',
			'BSB',
			'BBB'
		], {
			B: '#minecraft:stone_bricks',
			S: 'appliedenergistics2:singularity'
		}).id('aerth:crafting_shaped/portstone')
	}
	Applied_Energistics_2: {
	r.shaped('appliedenergistics2:smooth_sky_stone_chest', [
		'BBB',
		'B B',
		'BBB'
	], {
		B: 'minecraft:polished_blackstone'
	}).id('aerth:crafting_shaped/blackstone_chest')
	for (i of global.ae2.cableColours) {
		r.shaped(`appliedenergistics2:${i}_smart_dense_cable`, [
			'CC',
			'CC'
		], {
			C: `appliedenergistics2:${i}_smart_cable`
		}).id(`aerth:cable_crafting/smart_densifying/${i}`)
	}
	}
	Tinkers: {
		r.shaped('tconstruct:smeltery_controller', [
			'CCC',
			'CTC',
			'CCC'
		], {
			C: '#forge:ingots/copper',
			T: 'tconstruct:seared_fuel_tank'
		}).id('aerth:crafting_shaped/smeltery_controller')
	}
	Thermal: {
		r.shapeless('4x thermal:signalum_dust', [
			'thermal:copper_dust',
			'thermal:copper_dust',
			'thermal:copper_dust',
			'thermal:silver_dust',
			'thermal:cinnabar_dust',
			'thermal:cinnabar_dust',
			'thermal:cinnabar_dust',
			'thermal:cinnabar_dust',
		]).id('aerth:crafting_shapeless/signalum_dust')
		r.shapeless('thermal:frost_melon_seeds', [
			'thermal:blizz_powder',
			'thermal:blizz_powder',
			'thermal:blizz_powder',
			'thermal:blizz_powder',
			'minecraft:melon_seeds',
			'thermal:blizz_powder',
			'thermal:blizz_powder',
			'thermal:blizz_powder',
			'thermal:blizz_powder'
		]).id('aerth:crafting_shapeless/frost_melon_seeds')
		r.shaped('thermal:device_rock_gen', [
			'CGC',
			'SPS',
			'CDC'
		], {
			C: '#forge:ingots/cobalt',
			G: '#forge:gears/constantan',
			S: 'minecraft:stone',
			P: 'minecraft:piston',
			D: 'thermal:redstone_servo'
		}).id('aerth:crafting_shapes/rock_gen')
	}
})