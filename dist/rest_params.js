var params = ['dog', 'cat', 'dino'];
var animals = function (animal) {
    var params = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
    }
    return animal + " in " + params.join(' ');
};
console.log(animals);
// type variable function generic
function typeVarGeneric(params) {
    return params;
}
var hasil = typeVarGeneric("dave");
console.log(hasil);
