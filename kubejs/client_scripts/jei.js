// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
	event.hide(Item.of('appliedenergistics2:facade').ignoreNBT())
})