onEvent('player.logged_in', event => {
    if (!event.server.persistentData.spawned) {
        let pos = {
            x: Math.floor(event.player.x + 6),
            y: Math.floor(event.player.y - 6),
            z: Math.floor(event.player.z + 6),
            name: event.player.name
        }
        console.log(`Detecting first player log in, about to begin constructing crash site around ${event.player.name}`)
        event.server.scheduleInTicks(20, event => {
            //Item.of('minecraft:structure_block', {metadata:"",mirror:"NONE",ignoreEntities:1b,powered:0b,seed:0L,author:"ChiefArug",rotation:"CLOCKWISE_180",posX:0,mode:"LOAD",posY:1,sizeX:12,posZ:0,integrity:1.0f,showair:0b,name:"aerth:start_crash",id:"minecraft:structure_block",sizeY:10,sizeZ:12,showboundingbox:1b})
            event.server.runCommandSilent(`setblock ${pos.x} ${pos.y} ${pos.z} minecraft:structure_block{metadata:"",mirror:"NONE",ignoreEntities:1b,powered:0b,seed:0L,author:"ChiefArug",rotation:"CLOCKWISE_180",posX:0,mode:"LOAD",posY:1,sizeX:12,posZ:0,integrity:1.0f,showair:0b,name:"aerth:start_crash",id:"minecraft:structure_block",sizeY:10,sizeZ:12,showboundingbox:0b}`)
            event.server.runCommandSilent(`setblock ${pos.x} ${pos.y - 1} ${pos.z} minecraft:redstone_block`)
            console.log(`Successfully constructed crash site around ${pos.name}`)
            event.server.runCommandSilent(`fill ${pos.x} ${pos.y} ${pos.z} ${pos.x} ${pos.y - 1} ${pos.z} stone`)
            event.server.persistentData.spawned = true
        })
    }
})