// priority: 1

onEvent('recipes', r => {
    const assmebley = (output, input, type) => {
        let recipe = {
            type: `pneumaticcraft:assembly_${type}`, //type can be either drill or laser
            program: type,
            input: {},
            result: Item.of(output).toJson()
        }
        input = seperateCount(input, 'pneumaticcraft')
        if (input.type == null) {
            recipe.input.item = input.item
        } else {
            recipe.input.item = input.item
            recipe.input.type = input.type
            recipe.input.count = input.count
        }
        r.custom(recipe).id(`aerth:assembley/${type}/${removeMod(output)}`)
    }

    //Applied Energistics 2
    for (i of global.ae2.cableColours) {
        assmebley(`appliedenergistics2:${i}_smart_cable`, `2x appliedenergistics2:${i}_covered_cable`, 'laser')
        assmebley(`appliedenergistics2:${i}_smart_dense_cable`, `2x appliedenergistics2:${i}_covered_dense_cable`, 'laser')
    }
    
})