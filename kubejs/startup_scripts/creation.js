onEvent('item.registry', event => {
    event.create('large_singularity').displayName('Enriched/Embedded Singularity')  //todo: Rename. Stabilised?
})

onEvent('block.registry', event => {

})

onEvent('fluid.registry', event => {
	event.create('molten_singularity').textureThick(0x21038C).bucketColor(0x21038C).displayName('Gooey Singularity')
})