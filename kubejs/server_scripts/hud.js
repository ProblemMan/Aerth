
const quests = {
    main: '3094D718A4FB8D40',
    world_map: '',
    minimap: '27D7739380408C8F',
    entity_radar: '',
    cave_maps: '',
    waypoints: '',
    //music: '589DA782942A9B94',
    quest_alerts: ''
}

/*let music = {
    sound: '',
    volume: '',
    playlist: [],
    songs: [
        {name:'', length: 0},
        {name:'', length: 0},
        {name:'', length: 0},
        {name:'', length: 0},
        {name:'', length: 0},
        {name:'', length: 0},
    ]
}*/

let wthaisa = {
    location: {
        x: 10
    },
    size: 1.5,
    color: 'red'
}

let fluid_keys = { //TODO: Turn these into lang keys, like block.minecraft.water and block.tconstruct.blazing_blood_fluid. Replace this entirely with lang keys
	'minecraft:water': 'Water',
	'minecraft:lava': 'Lava',
	'tconstruct:blazing_blood_fluid': 'Blazing Blood',
	'kubejs:blitzing_blood': 'Blitzing Blood',
	'kubejs:blizzing_blood': 'Blizzing Blood',
	'kubejs:balzing_blood': 'Balzing Blood'
}

let removeMod = (string) => {
	return string.substring((string.indexOf(':') + 1))
}
let leaveMod = (string) => {
	return string.substring(0, string.indexOf(':'))
}


let quest_alerts = {
    sound: '', 
    volume: 0.5
}

let remove_block_properties = (str) => {
    if (str.indexOf('[') != -1){
        output = str.substring(0, str.indexOf('['))
    } else {
        output = str
    }
    return output
}

let block_name = (str) => {
    let name = ''
    console.log(str)
    str = str.toString()//For some reason its not a string when it comes out of a raytrace
    if (str.indexOf('[') != -1){
		str = remove_block_properties(str)
        name = Item.of(str).name
        if (name == 'Air') { //its a fluid!
			if (leaveMod(str) == 'tconstruct') {
				//name = translate(`block.${leaveMod(str)}.${removeMod(str)}`) //This could work for all of them, not sure
			}
        }
    } else {
        name = Item.of(str).name
    }
    return name
}


for (i in quests) {
    onEvent(`ftbquests.completed.${quests[i]}`, q => {

        q.player.stages.add(`hud.${i}.on`)
        q.player.stages.add(`hud.${i}.enabled`)

        i_format = i.replace(/_/g, ' ')
        i_format = i_format.charAt(0).toUpperCase() + str.slice(1)

        q.player.tell({"text":`${i_format} HUD element unlocked! Enabling...`})
        console.log(i + ' unlocked and enabled!')

        let player = q.player
        q.server.scheduleInTicks(100, qS => {
            qS.server.runCommandSilent(`tellraw ${player} {"text":"Enabled!"}`) //the event.player is not carried over here, so we have to set a seperate variable and use that instead.
        })

    })
}


let count = {}
onEvent('player.logged_in', l => {
    count[l.player] = 0
})

onEvent('player.tick', t => { //use sparingly, lag warning.
    /* STUFF THAT GOES IN HERE:
    Applying potion effects for map disable/enable. Only do this every ~10 ticks.
    Music loop. Will probably need to have a tick counter to help with this.
    WTHAISA - What the heck am I staring at. Like waila but shows cool animation and works on any distance (needs user input tho, probably a    n item... or keybind??)
    */
    count[t.player] ++
    if (count[t.player] % 20 === 0) {
        //Now we know that we are on the twentieth tick
        //All xaero potion effects: xaerominimap:no_minimap, xaerominimap:no_entity_radar, xaerominimap:no_waypoints, xaerominimap:no_cave_maps, xaeroworldmap:no_world_map || You can append _benefical or _harmful to them to change the type from neutral
        if (!t.player.stages.has('hud.world_map')) {
            t.server.runCommandSilent(`effect give ${t.player} xaeroworldmap:no_world_map 5 0 true`)
        }
        if (!t.player.stages.has('hud.minimap')) {
            t.server.runCommandSilent(`effect give ${t.player} xaerominimap:no_minimap 5 0 true`)
        } else {
            if (!t.player.stages.has('hud.cave_maps')) {
                t.server.runCommandSilent(`effect give ${t.player} xaeroworldmap:no_cave_maps 5 0 true`) //There must be a cleaner way of doing this, but eh
            }
            if (!t.player.stages.has('hud.entity_radar')) {
                t.server.runCommandSilent(`effect give ${t.player} xaeroworldmap:no_entity_radar 5 0 true`)
            }
        }
        if (!t.player.stages.has('hud.waypoints')) {
            t.server.runCommandSilent(`effect give ${t.player} xaeroworldmap:no_waypoints 5 0 true`)
        }
    }

    //TODO music stuff here. also figure out how on earth i want it to work.
})

onEvent('player.logged_in', event => {
    count[event.player] = 0 //init the tick counting variable.

    //init wthaisa display
    event.player.paint({ 
		wthaisa: {
			type: 'text',
			text: '',
            color: wthaisa.color,
			scale: wthaisa.size,
			x: 0,
			y: -50,
			alignX: 'center',
			alignY: 'bottom',
			draw: 'ingame',
			visible: false
		}
	})
})
onEvent('item.right_click', c => {
    if (c.item == 'packname:wthaisa') {
        console.log('WTHAISA')
        let stared = block_name(c.player.rayTrace(50).block)
        c.server.runCommandSilent(`title ${c.player} title {"text":"${stared}", "color": "aqua"}`)
        c.player.paint({wthaisa: {text: stared.toString(), visible: true}})
    }
})

onEvent('ftbquests.completed', q => {
    if (q.player.stages.has('hud.quest_alerts.on')) {
        q.player.playSound(quest_alerts.sound, quest_alerts.volume, Math.random())
    }
}) 