// priority: 1

onEvent('recipes', r => {
    //functions
    let severing = (mob, drop) => {
        r.custom({
            "type": "tconstruct:severing",
            "entity": {
                "type": mob
            },
            result: Item.of(drop).toResultJson()
        })
    }
    let castingTable = (output, cool_ticks, input_fluid, fluid_mb, input_item, consume) => {
        r.custom({
            type: "tconstruct:casting_table",
            fluid: {
                name: input_fluid,
                amount: fluid_mb
            },
            cast: input_item,
            cast_consumed: (consume||false),
            result: output,
            cooling_time: cool_ticks
        })
    }
    let castingBasin = (output, cool_ticks, input_fluid, fluid_mb, input_item, consume) => {
        r.custom({
            type: "tconstruct:casting_basin",
            fluid: {
                name: input_fluid,
                amount: fluid_mb
            },
            cast: input_item,
            cast_consumed: (consume||false),
            result: output,
            cooling_time: cool_ticks
        })
    }
    let complexAlloy = (output, output_mb, temperature, inputA, inputA_mb, inputB, inputB_mb, inputC, inputC_mb) => { //Complex is three fluid inputs
        r.custom({
            type: "tconstruct:alloy",
            inputs: [
                {
                    name: inputA,
                    amount: inputA_mb
                },
                {
                    name: inputB,
                    amount: inputB_mb
                },
                {
                    name: inputC,
                    amount: inputC_mb
                }
            ],
            result: {
                fluid: output,
                amount: output_mb
            },
            temperature: temperature
        })
    }
    let simpleAlloy = (output, output_mb, temperature, inputA, inputA_mb, inputB, inputB_mb) => { //Simple is two fluid inputs
        r.custom({
            type: "tconstruct:alloy",
            inputs: [
                {
                    name: inputA,
                    amount: inputA_mb
                },
                {
                    name: inputB,
                    amount: inputB_mb
                },
            ],
            result: {
                fluid: output,
                amount: output_mb
            },
            temperature: temperature
        })
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
        })
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
        })
    }
    let itemMelting = (fluid, fluid_mb, input, temp, duration) => {
        r.custom({
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
        })
    }

    //Thermal
    severing('thermal:blizz', '2x thermal:blizz_rod')
    severing('thermal:basalz', '2x thermal:basalz_rod')
    severing('thermal:blitz', '2x thermal:blitz_rod')

    castingBasin('thermal:machine_frame', 200, 'kubejs:molten_hardened_glass', 4000, '#forge:gears/quartz', true)
    castingBasin('thermal:obsidian_glass', 100, 'kubejs:molten_hardened_glass', 1000)

    entityMelting('kubejs:balzing_blood', 20, 'thermal:basalz', 2)
    entityMelting('kubejs:blizzing_blood', 20, 'thermal:blizz', 2)
    entityMelting('kubejs:blitzing_blood', 20, 'thermal:blitz', 2)

    itemMelting('thermal:redstone', 144, 'thermal:cinnabar', 700, 70)


    //Packname
    simpleAlloy('kubejs:molten_hardened_glass', 100, 500, 'tconstruct:molten_glass', 100, 'tconstruct:molten_obsidian', 50)

    fuel('kubejs:blitzing_blood', 50, 2000, 10)
    fuel('kubejs:blizzing_blood', 100, 1, 2000)

    //Minecraft
    castingTable('minecraft:redstone', 20, 'thermal:redstone', 144, 'appliedeneristics2:certus_quartz_dust', true)
    castingBasin('minecraft:redstone_block', 200, 'thermal:redstone', 1296, 'appliedenergistics2:quartz_block', true)

})