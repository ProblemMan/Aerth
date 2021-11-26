//bunch of helpful functions for use pretty much anywhere
const removeMod = (string) => {
    return string.substring((string.indexOf(':') + 1))
}
const getMod = (string) => {
	return string.substring(0, string.indexOf(':'))
}
const ingots = (n) => {
    return n * 144 //TODO: Change this over for more even amounts? 90 sounds okay-ish
}
const nuggets = (n) => {
    return n * (ingots(1) / 9)
}
const seperateCount = (string, mod) => { //Returns an object with type: count: and item:
    let output = {}
    if (string.indexOf(' ') != -1) {
        if (mod === 'pneumaticcraft') {
            output.type = 'pneumaticcraft:stacked_item'
        }
        output.count = +string.substring(0, string.indexOf(' ') - 1)
        output.item = string.substring(string.indexOf(' ') + 1)
    } else {
        output.count = 1
        output.item = string
    }
    return output
}
const removeBlockProperties = (str) => {
    if (str.indexOf('[') != -1){
        output = str.substring(0, str.indexOf('['))
    } else {
        output = str
    }
    return output
}