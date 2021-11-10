// priority: 1

onEvent('recipes', r => {
    r.shapeless('thermal:machine_frame', [Item.of('#forge:ingots/copper')])
})

onEvent('item.right_click', event => {
    console.log('thingo')
})