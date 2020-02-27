module.exports = function parseStringAsArray(arrayasArray){
    return arrayasArray.split(',').map(tech => tech.trim());
}