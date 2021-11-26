onEvent('item.registry', item => {
    //Aerth
   item.create('aerth:wthaisa').displayName('What The Hell Am I Staring At')
   item.create('aerth:basalt_chunks').displayName('Basalt Chunks')
})
onEvent('block.registry', block => {
    //Thermal
    block.create('aerth:bitumen_ore').material('rock').harvestTool('pickaxe', 2).displayName('Bitumen Ore')
    //AppliedEnergistcs2
    block.create('aerth:fluix_seed').material('rock').displayName('Fluix Seed Block').randomTick(event => {
        for (i in event){
            console.log(event[i])
        }
    })
})
onEvent('fluid.registry', fluid => {
    //Aerth
	fluid.create('aerth:molten_singularity').textureThick(0x21038C).bucketColor(0x21038C).displayName('Gooey Singularity')
    fluid.create('aerth:reacting_singularity').textureThick(0x21038C).bucketColor(0x21038C).displayName('Reacting Singularity')
    fluid.create('aerth:basaltic_lava').bucketColor(0xA4432A).textureStill('aerth:fluid/basaltic_lava').textureFlowing('aerth:fluid/basaltic_lava_flowing').displayName('Basaltic Lava').viscosity(10).luminosity(13)

    //Thermal
    fluid.create('aerth:molten_hardened_glass').textureThin(0x7d8599).displayName('Molten Hardened Glass')
    fluid.create('aerth:blizzing_blood').bucketColor(0x05C7F2).textureStill('aerth:fluid/blood/blizzing').textureFlowing('aerth:fluid/blood/blizzing_flowing').displayName('Blizzing Blood')
    fluid.create('aerth:blitzing_blood').bucketColor(0xF2E205).textureStill('aerth:fluid/blood/blitzing').textureFlowing('aerth:fluid/blood/blitzing_flowing').displayName('Blitzing Blood')
    fluid.create('aerth:balzing_blood').bucketColor(0x262323).textureStill('aerth:fluid/blood/balzing').textureFlowing('aerth:fluid/blood/balzing_flowing').displayName('Balzing Blood')
})