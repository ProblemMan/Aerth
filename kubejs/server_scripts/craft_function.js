let multiblockCraft = (output, shape, key, click_item, click_index) => {
	let size = -1
	for (let i of shape) {
		size = size + i.length
	}
	if (click_index > size) {
		console.error(`Index ${click_index} is outside the structure`)
		return null //I could return something helpful, couldn't I? 😜
	} else {
		onEvent('block.right_click', event => {
			//console.log(event.x)
			console.log(event.block.x)
			if (event.player.getHeldItem(event.hand) == click_item) { //event.world.getBlock()
				let valid_structure = true
				for (let s of shape) {
					for (let i of s) {
						if (!(event.world.getBlock() == key[i] && valid_structure)) {
							valid_structure = false
						}
					}
				}
				if (valid_structure) {
					
				}
			}
		})
	}


}




multiblockCraft('thermal:machine_frame', [
	' G ',
	'GQG',
	' G '
	], {
		G: 'thermal:obsidian_glass',
		Q: 'minecraft:quartz_block'
	},
	10
)