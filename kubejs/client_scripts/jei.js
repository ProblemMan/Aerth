// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', jei => {
	//Applied Energistics 2
	//jei.hide(Item.of('appliedenergistics2:facade').ignoreNBT())
	jei.hide(/^(?!.*chest)(?!.*block)appliedenergistics2:.*sky_stone.*/) //Negative lookaheads.. so useful
	jei.hide('appliedenergistics2:sky_dust')
	jei.hide(/appliedenergistics2:purified_.*_crystal/)
	jei.hide(/appliedenergistics2:.*_seed/)

	//Ores
	for (i of global.aerth.disabled_ores) {
		jei.hide(i)
	}
})

onEvent('jei.add.items', jei => {
	//Thermal
	jei.add('thermal:sapphire_ore')
	jei.add('thermal:ruby_ore')
	jei.add('thermal:sapphire')
	jei.add('thermal:ruby')
	jei.add('thermal:sapphire_block')
	jei.add('thermal:ruby_block')
	jei.add('thermal:sapphire_dust')
	jei.add('thermal:ruby_dust')
})