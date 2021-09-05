const params = ['dog', 'cat', 'dino']

const animals = (animal: string, ...params: string[]): string => {
    return `${animal} in ${params.join(' ')}`
}

console.log(animals);

// type variable function generic
function typeVarGeneric<T>(params: T): T {
    return params
}

const hasil = typeVarGeneric<string>("dave")
console.log(hasil);