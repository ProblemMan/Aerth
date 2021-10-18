onEvent('item.registry', event => {
   
})

onEvent('block.registry', event => {
    event.create('bitumen_ore').material('rock').harvestTool('pickaxe', 2).displayName('Bitumen Ore')
})

onEvent('fluid.registry', event => {
	event.create('molten_singularity').textureThick(0x21038C).bucketColor(0x21038C).displayName('Gooey Singularity')
    event.create('molten_hardened_glass').textureThin(0x7d8599).displayName('Molten Hardened Glass')
})