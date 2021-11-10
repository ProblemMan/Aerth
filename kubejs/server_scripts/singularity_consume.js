onEvent('fluid.tags', tag => {
    tag.add('packname:singularity_consume_fluids', /^(?!.*singularity).*/)
})
onEvent('recipes', recipe => {
    for (i of [1, 10]) {

        recipe.custom({ //react it back to regular singularity  
            type: 'tconstruct:alloy',
            inputs: [
                {name: 'kubejs:reacting_singularity', amount: 1},
                {tag: 'packname:singularity_consume_fluids', amount: i}
            ],
            result: {fluid: 'kubejs:molten_singularity', amount: 1},
            temperature: 0
        }).id(`packname:singularity_react_back_${i}`)

        recipe.custom({
            type: 'tconstruct:alloy',
            inputs: [
                {name: 'kubejs:molten_singularity', amount: 1},
                {tag: 'packname:singularity_consume_fluids', amount: i}
            ],
            result: {fluid: 'kubejs:reacting_singularity', amount: 1},
            temperature: 0
        }).id(`packname:singularity_zconsume_fluids_${i}`)
    }
})//TODO: Remove all this and replace it with reactor coolant instead of itself. Also its the only reactor coolant u can produce enough of to make it work feasibly. Thanks OnlyMann!
//also use mekajs to add the gas types for this.