onEvent('recipes', s => {
    let severing = (mob, drop) => {
        s.custom({
            "type": "tconstruct:severing",
            "entity": {
              "type": mob
            },
            result: Item.of(drop).toResultJson()
          })
    }
    severing('thermal:blizz', '2x thermal:blizz_rod')
    severing('thermal:basalz', '2x thermal:basalz_rod')
    severing('thermal:blitz', '2x thermal:blitz_rod')

    s.remove({id: /tconstruct:tools\/severing\/.*_head/})
    s.remove({id: /tconstruct:tools\/severing\/.*_skull/})
})