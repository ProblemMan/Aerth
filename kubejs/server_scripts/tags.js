// priority: 1
onEvent('item.tags', t => {
    t.add('forge:ores/bitumen', 'kubejs:bitumen_ore')
    t.add('forge:gems/quartz', '#appliedenergistics2:crystals/certus')

    for (i of global.disabled_ores){
        t.removeAllTagsFrom(i)
    }

    t.add('forge:gems', 'thermal:sapphire')
    t.add('forge:gems', 'thermal:ruby')
    t.add('forge:gems/sapphire', 'thermal:sapphire')
    t.add('forge:gems/ruby', 'thermal:ruby')

    let materials = [
        {type: 'ingots', name: 'copper'},
        {type: 'gems', name: 'cinnabar'},
        {type: 'ingots', name: 'silver'},
        //{type: 'ingots', name: 'signalum'},
        //{type: 'ingots', name: 'tin'}
    ]
    for (let i of materials) {
        t.add(`forge:${i.name}`, [`#forge:${i.type}/${i.name}`, `#forge:dusts/${i.name}`])
    }
})

onEvent('block.tags', t => {

})

/*onEvent('fluid.tags', t => {
    t.add('minecraft:lava', 'minecraft:empty')
    t.add('minecraft:water', 'minecraft:empty')

    t.removeAllTagsFrom('minecraft:water')
    t.removeAllTagsFrom('minecraft:flowing_water')
})*/