//For custom recipe types
/*global.lightningCraft = []
const lightningCraft = (output, inputs) => {
	global.lightningCraft.push({
		output: output,
		inputs: inputs
	})
}
lightningCraft('minecraft:diamond', ['minecraft:iron_nugget', 'minecraft:iron_nugget'])
let seperateCount = (string) => { //Returns an object with count: and item:
	let output = {}
	if (string.indexOf(' ') != -1) {
		output.count = +string.substring(0, string.indexOf(' ') - 1) // + converts to int! Woop!
		output.item = string.substring(string.indexOf(' ') + 1)
	} else {
		output.count = 1
		output.item = string
	}
	return output
}

console.log(global.lightningCraft.allItems)
onEvent('entity.spawned', event => {
	if('Lightning Bolt' == event.entity.name) {
		let entities = event.world.getEntitiesWithin(AABB.of(event.entity.x - 1, event.entity.y - 1, event.entity.z - 1, event.entity.x + 1, event.entity.y + 1, event.entity.z + 1))
		let strikePos = {
			x: event.entity.x,
			y: event.entity.y,
			z: event.entity.z
		}

		
	}
})*/
onEvent('entity.spawned', event => {
	if('Lightning Bolt' == event.entity.name) {
		let entities = event.world.getEntitiesWithin(AABB.of(event.entity.x - 1, event.entity.y - 1, event.entity.z - 1, event.entity.x + 1, event.entity.y + 1, event.entity.z + 1))
		let strikePos = {
			x: event.entity.x,
			y: event.entity.y,
			z: event.entity.z
		}
		let items = {
			'Certus Quartz Crystal': 1, //Init them with one so they are truthy!
			'Cinnabar': 1
		}
		for (i in entities) {
			if (items[entities[i].name]) {
				items[entities[i].name] = items[entities[i].name] + entities[i].getItem().count
			}
		}
		items['Certus Quartz Crystal']--
		items['Cinnabar']--
		if (items['Certus Quartz Crystal'] && items['Cinnabar']) {
			let output = 0
			if (items['Certus Quartz Crystal'] >= items['Cinnabar']) {
				output = items['Cinnabar'] * 2
			} else {
				output = items['Certus Quartz Crystal'] * 2
			}
			event.server.runCommandSilent(`particle appliedenergistics2:lightning_arc_fx ${strikePos.x} ${strikePos.y} ${strikePos.z} ${strikePos.x} ${strikePos.y + 4} ${strikePos.z} 0.8 1.5 0.8 1 50`)
			event.server.scheduleInTicks(4, event, event => {
				event.server.runCommandSilent(`particle appliedenergistics2:lightning_arc_fx ${strikePos.x} ${strikePos.y} ${strikePos.z} ${strikePos.x} ${strikePos.y + 0.1} ${strikePos.z} 1.2 0.8 1.2 1 200`)
				while (output > 64) {
					event.server.runCommandSilent(`summon minecraft:item ${strikePos.x} ${strikePos.y + 0.1} ${strikePos.z} {Invulnerable:1b,NoGravity:1b,PickupDelay:10,Motion:[${Math.random()/20},${Math.random()/30 + 0.01},${Math.random()/20}],Item:{id:"appliedenergistics2:fluix_crystal",Count:${64}b}}`)
					output = output - 64
				}
				event.server.runCommandSilent(`summon minecraft:item ${strikePos.x} ${strikePos.y + 0.1} ${strikePos.z} {Invulnerable:1b,NoGravity:1b,PickupDelay:10,Motion:[${Math.random()/20},${Math.random()/30 + 0.01},${Math.random()/20}],Item:{id:"appliedenergistics2:fluix_crystal",Count:${output}b}}`)
				
			})
		}
		
	}
})

