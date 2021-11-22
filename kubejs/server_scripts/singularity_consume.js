onEvent('fluid.tags', tag => {
    tag.add('aerth:singularity_consume_fluids', /^(?!.*singularity).*/)
})
onEvent('recipes', recipe => {
    
})//TODO: Remove all this and replace it with reactor coolant instead of itself. Also its the only reactor coolant u can produce enough of to make it work feasibly. Thanks OnlyMann!
//also use mekajs to add the gas types for this.