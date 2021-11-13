// priority: 1

onEvent('recipes', r => {

})

onEvent('item.right_click', event => {
    if (event.item == 'minecraft:nether_star') {
        event.server.scheduleInTicks(1, event => {
            event.server.runCommand('kubejs reload client_scripts')
        })
    }
})