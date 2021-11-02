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
    let tinkersCastingTable = (output, cool_ticks, input_fluid, fluid_mb, input_item) => {
        r.custom({
            type: "tconstruct:casting_table",
            fluid: {

                name: input_fluid,
                amount: fluid_mb
            },
            cast: input_item,
            cast_consumed: true,
            result: output,
            cooling_time: cool_ticks
        })
    }
    let tinkersCastingBasin = (output, cool_ticks, input_fluid, fluid_mb, input_item) => {
        r.custom({
            type: "tconstruct:casting_basin",
            fluid: {
                name: input_fluid,
                amount: fluid_mb
            },
            cast: input_item,
            cast_consumed: true,
            result: output,
            cooling_time: cool_ticks
        })
    }
    let tinkersComplexAlloy = (output, output_mb, temperature, inputA, inputA_mb, inputB, inputB_mb, inputC, inputC_mb) => { //Complex is three fluid inputs
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
    let tinkersSimpleAlloy = (output, output_mb, temperature, inputA, inputA_mb, inputB, inputB_mb) => { //Simple is two fluid inputs
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

    //Thermal
    severing('thermal:blizz', '2x thermal:blizz_rod')
    severing('thermal:basalz', '2x thermal:basalz_rod')
    severing('thermal:blitz', '2x thermal:blitz_rod')

    tinkersCastingTable('thermal:machine_frame', 200, 'kubejs:molten_hardened_glass', 4000, '#forge:gears/quartz')
    tinkersCastingTable('thermal:obsidian_glass', 100, 'kubejs:molten_hardened_glass', 1000)




    //Packname
    tinkersSimpleAlloy('kubejs:molten_hardened_glass', 100, 500, 'tconstruct:molten_glass', 100, 'tconstruct:molten_obsidian', 50)


})