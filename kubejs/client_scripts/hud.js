/*onEvent('player.data_from_server.not_working', m => {
    console.log('Boop')
    console.log(m.data + 'Beep')
    console.log(m.getData(test) + 'Bip')
})*/

onEvent('player.data_from_server.wthaisa', s => {
    console.log('recieved')
    console.log(s.entity.raytrace(30))
})