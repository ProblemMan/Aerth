let removeBlockProperties = (str) => {
    if (str.indexOf('[') != -1){
        output = str.substring(0, str.indexOf('['))
    } else {
        output = str
    }
    return output
}
let getBlockFromKey = (key, object) => {
	let block = ''
	if (key in object) {
		block = object[key]
	} else {
		block = 'minecraft:air'
	}
	return block
}
let getBlockFromIndex = (shape, key, index) => {
	let output = ''
	for (let i of shape) {
		output = '' + output + i
	}
	return getBlockFromKey(output[index], key)
}
let getPosFromIndex = (shape, click_index) => {
	let total_length = 0
	for (let i in shape) {
		if (total_length + shape[i].length > click_index) {
			return {
				x: +i, //This kept being a string. No idea why, but + forces it to int! (If its a string it SERIOUSLY messes up addition, concating anyone?)
				z: click_index - total_length
			}
		} else {
			total_length = total_length + shape[i].length
		}
	}
	//We will only get here if it never returns anything. That means somethings wrong!
	console.error(`Recipe loading for a multiblock recipe failed! It appears that index of ${click_index} is outside the structure!`)
	return null
}
global.debug = false //Change this to true to show some additional output useful for debugging recipes not working. Shouldn't be used for normal gameplay cause logspam
global.multiblockCraft = (output, output_count, shape, key, click_item, click_index) => {
	onEvent('block.right_click', event => {
		if (event.hand == 'MAIN_HAND' && event.player.getHeldItem(event.hand) == click_item) {
			event.entity.swingArm(event.hand)//This doesn't work as of writing this, but should be fixed soon
			let index_pos = getPosFromIndex(shape, click_index)
			let corner = {
				x: event.block.x - index_pos.x,
				y: event.block.y,
				z: event.block.z - index_pos.z
			}
			let current_index = -1
			let current_check = {}
			let current_rel_pos = {}
			let validate_structure = true
			let all_pos = []
			//Let the validation begin!
			for (s of shape) {
				for (i of s) {
					current_index ++
					current_rel_pos = getPosFromIndex(shape, current_index)
					current_check = {
						x: 0 + corner.x + current_rel_pos.x,
						y: corner.y,
						z: corner.z + current_rel_pos.z
					}
					let expected = getBlockFromIndex(shape, key, current_index).toString()
					let block = removeBlockProperties(event.world.getBlock(current_check.x, current_check.y, current_check.z).toString())
					if (global.debug) {
						console.log(`${block}, ${expected}, ${validate_structure}`)
					}
					if (block == expected && validate_structure) {
						all_pos.push(current_check)
					} else {
						if (global.debug && validate_structure) {
							console.log(`Incorrect block found at ${current_check.x}, ${current_check.y}, ${current_check.z} for output ${output}. Expected: '${expected}' but found '${block}' instead`)
						}
						validate_structure = false
					}
				}
			}
			if (validate_structure) {
				for (i of all_pos) {
					event.server.runCommandSilent(`setblock ${i.x} ${i.y} ${i.z} minecraft:air`)
				}
				event.server.runCommandSilent(`summon minecraft:item ${event.block.x} ${event.block.y + 0.7} ${event.block.z} {PickupDelay:10,Motion:[0.0,0.2,0.0],Item:{id:"${output}",Count:${output_count}b}}`)
				if (!event.player.isCreativeMode()){
  					event.item.setCount(event.item.getCount() - 1)
				}
				event.server.runCommandSilent(`particle minecraft:spit ${event.block.x} ${event.block.y + 0.2} ${event.block.z} ${shape.length * 0.2} 0.4 0.4 ${shape[0].length * 0.2} ${current_index * 10}`)
			}
		}
	})
}
//Centred click_index cheat sheet: 1x1: 0, 3x3: 4, 5x5: 12, 7x7: 24. Formula: (total blocks -1) / 2. Remember, the first thing is 0!
global.multiblockCraft('appliedenergistics2:fluix_crystal', 64, [ //The global is required so it works outside of just this script. Could be removed and replaced with 'const ' at the definition if you are only going to use it here.
	//The top row of this shape is the west most when in-world.
	' CCC ',
	'CWWWC',
	'CWRWC',
	'CWWWC',
	' CCC '
	], {
		C: 'appliedenergistics2:quartz_block',
		W: 'minecraft:water',
		R: 'minecraft:redstone_block'
	},
	'appliedenergistics2:certus_quartz_dust', 
	12
)