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
})

onEvent('block.tags', t => {

})

onEvent('fluid.tags', t => {

})