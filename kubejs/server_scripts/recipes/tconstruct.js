// priority: 1

onEvent('recipes', r => {
    //helpful functions
    let removeMod = (string) => {
        return string.substring((string.indexOf(':') + 1))
    }
    let ingots = (n) => {
        return n * 144 //TODO: Change this over for more even amounts? 90 sounds okay-ish
    }
    let nuggets = (n) => {
        return n * (ingots(1) / 9)
    }
    //Recipe Functions
    let severing = (entity, drop) => {
        r.custom({
            type: 'tconstruct:severing',
            entity: {
                type: entity
            },
            result: Item.of(drop).toResultJson()
        }).id(`packname:severing/${removeMod(entity)}`)
    }
    let castingTable = (output, cool_ticks, input_fluid, fluid_mb, input_item, consume) => {
        let recipe = {
            type: 'tconstruct:casting_table',
            fluid: {
                name: input_fluid,
                amount: fluid_mb
            },
            result: output,
            cooling_time: cool_ticks
        }
        if (input_item != null) {
            recipe = Object.assign(recipe, {
                cast: {item: input_item},
                cast_consumed: (consume||false)
        })
        }
        r.custom(recipe).id(`packname:casting_table/${removeMod(output)}`)
    }
    let castingBasin = (output, cool_ticks, input_fluid, fluid_mb, input_item, consume) => {
        let recipe = {
            type: 'tconstruct:casting_basin',
            fluid: {
                name: input_fluid,
                amount: fluid_mb
            },
            result: output,
            cooling_time: cool_ticks
        }
        if (input_item != null) {
            recipe = Object.assign(recipe, {
                cast: {item: input_item},
                cast_consumed: (consume||false)
        })
        }
        r.custom(recipe).id(`packname:casting_basin/${removeMod(output)}`)
    }
    let alloy = (output, output_mb, temperature, inputA, inputA_mb, inputB, inputB_mb, inputC, inputC_mb) => { //Complex is three fluid inputs
        let recipe = {
            type: 'tconstruct:alloy',
            inputs: [
                {
                    name: inputA,
                    amount: inputA_mb
                },
                {
                    name: inputB,
                    amount: inputB_mb
                }
            ],
            result: {
                fluid: output,
                amount: output_mb
            },
            temperature: temperature
        }
        if (inputC != null) {
            recipe.inputs.push({
                name: inputC,
                amount: inputC_mb
            })
        }
        r.custom(recipe).id(`packname:alloy/${removeMod(output)}`)
    }
    let entityMelting = (fluid, fluid_mb, entity, entity_dmg) => {
        r.custom({
            type: 'tconstruct:entity_melting',
            entity: {
                type: entity
            },
            result: {
                fluid: fluid,
                amount: fluid_mb
            },
            damage: entity_dmg
        }).id(`packname:melting/${removeMod(entity)}_to_${removeMod(fluid)}`)
    }
    let fuel = (fluid, fluid_mb, temp, duration) => {
        r.custom({
            type: 'tconstruct:melting_fuel',
            fluid: {
                name: fluid,
                amount: fluid_mb
            },
            duration: duration,
            temperature: temp
        }).id(`packname:fuel/${removeMod(fluid)}`)
    }
    let itemMelting = (fluid, fluid_mb, input, temp, duration, extra_ore_products) => {
        let recipe = {
            type: 'tconstruct:melting',
            ingredient: {
                item: input
            },
            result: {
                fluid: fluid,
                amount: fluid_mb
            },
            temperature: temp,
            time: duration
        }
        console.log(extra_ore_products)
        if (extra_ore_products != null) {
            console.log('here')
            recipe.byproducts = extra_ore_products
            recipe.type = 'tconstruct:ore_melting' //do these work the same way???
        }
        r.custom(recipe).id(`packname:melting/${removeMod(input)}`)
    }
    //#endregion
    //Thermal

    for (i of ['blizz', 'blitz', 'basalz']){
        severing(`thermal:${i}`, `2x thermal:${i}_rod`)
    }


    castingBasin('thermal:machine_frame', 200, 'kubejs:molten_hardened_glass', 4000, 'thermal:quartz_gear', true)
    castingBasin('thermal:obsidian_glass', 100, 'kubejs:molten_hardened_glass', 1000)

    entityMelting('kubejs:balzing_blood', 20, 'thermal:basalz', 2)
    entityMelting('kubejs:blizzing_blood', 20, 'thermal:blizz', 2)
    entityMelting('kubejs:blitzing_blood', 20, 'thermal:blitz', 2)
    
    itemMelting('thermal:redstone', ingots(1), 'thermal:cinnabar', 700, 70)
    itemMelting('thermal:redstone', ingots(1), 'thermal:cinnabar_dust', 700, 60)
    itemMelting('thermal:redstone', ingots(9), 'thermal:cinnabar_block', 700, 700)
    itemMelting('thermal:redstone', ingots(1), 'thermal:cinnabar_ore', 700, 105, [{fluid: 'tconstruct:molten_nickel', amount: nuggets(3)}])
    
    castingTable('thermal:cinnabar', 20, 'thermal:redstone', ingots(1), 'tconstruct:gem_cast', true)
    castingBasin('thermal:cinnabar_block', 200, 'thermal:redstone', ingots(9))

    castingTable('thermal:rf_coil', 60, 'tconstruct:molten_signalum', ingots(1), 'thermal:electrum_ingot', true)

    alloy('tconstruct:molten_signalum', ingots(4), 1000, 'tconstruct:molten_copper', ingots(3), 'tconstruct:molten_silver', ingots(1), 'thermal:redstone', ingots(4)) //TODO: balance amounts of molten cinnabar used here.

    //Packname
    alloy('kubejs:molten_hardened_glass', 100, 500, 'tconstruct:molten_glass', 100, 'tconstruct:molten_obsidian', 50)

    fuel('kubejs:blitzing_blood', 50, 2000, 10)
    fuel('kubejs:blizzing_blood', 100, 1, 2000)

    itemMelting('kubejs:molten_singularity', ingots(1), 'appliedenergistics2:singularity', 1500, 100)
    itemMelting('kubejs:molten_singularity', ingots(1.5/*TODO:Balance this*/), 'appliedenergistics2:quantum_entangled_singularity', 1700, 50)
    //alloy('kubejs:molten_singularity', 10, 1, 'kubejs:molten_singularity', 10, /tconstruct:.*/, 1) //no regex support for ingredients 😢. Tags work tho!

    //Minecraft
    castingTable('minecraft:redstone', 30, 'thermal:redstone', ingots(1), 'appliedenergistics2:certus_quartz_dust', true)
    castingBasin('minecraft:redstone_block', 300, 'thermal:redstone', ingots(9), 'appliedenergistics2:quartz_block', true)
    castingTable('minecraft:ender_pearl', 200, 'kubejs:molten_singularity', ingots(1), 'appliedenergistics2:certus_crystal_seed', true)
})