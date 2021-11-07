// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', jei => {
	//Applied Energistics
	jei.hide(Item.of('appliedenergistics2:facade').ignoreNBT())
	jei.hide(/^(?!.*chest)appliedenergistics2:.*sky_stone.*/) //Negative lookaheads.. so useful
	jei.hide('appliedenergistics2:sky_dust')

	//Ores
	for (i of global.disabled_ores) {
		jei.hide(i)
	}
})

onEvent('jei.add.items', jei => {
	//Thermal
	jei.add('thermal:sapphire_ore')
	jei.add('thermal:ruby_ore')
	jei.add('thermal:sapphire')
	jei.add('thermal:ruby')
})