onEvent('item.registry', item => {
    //Packname
   item.create('packname:wthaisa').displayName('What The Hell Am I Staring At')
})
//TODO: Potentially add packname:name instead of name, so that everything is registered under the packname namespace. Does cause a bit of log spam.
onEvent('block.registry', block => {
    //Thermal
    block.create('bitumen_ore').material('rock').harvestTool('pickaxe', 2).displayName('Bitumen Ore')
    //AppliedEnergistcs2
    block.create('fluix_seed').material('rock').displayName('Fluix Seed Block').randomTick(event => {
        for (i in event){
            console.log(event[i])
        }
    })
})

onEvent('fluid.registry', fluid => {
    //Packname
	fluid.create('molten_singularity').textureThick(0x21038C).bucketColor(0x21038C).displayName('Gooey Singularity')
    fluid.create('reacting_singularity').textureThick(0x21038C).bucketColor(0x21038C).displayName('Reacting Singularity')

    //Thermal
    fluid.create('molten_hardened_glass').textureThin(0x7d8599).displayName('Molten Hardened Glass')
    fluid.create('blizzing_blood').bucketColor(0x05C7F2).textureStill('packname:fluid/blood/blizzing').textureFlowing('packname:fluid/blood/blizzing_flowing').displayName('Blizzing Blood')
    fluid.create('blitzing_blood').bucketColor(0xF2E205).textureStill('packname:fluid/blood/blitzing').textureFlowing('packname:fluid/blood/blitzing_flowing').displayName('Blitzing Blood')
    fluid.create('balzing_blood').bucketColor(0x262323).textureStill('packname:fluid/blood/balzing').textureFlowing('packname:fluid/blood/balzing_flowing').displayName('Balzing Blood')
})