/*
There are 2 types of functions in js
1. function declaration
2. function expression

but in es6, there is one function was added.
it call arrow function

below is function with callbacks
*/

// 1. create the type aliases
type Greater = (message: string) => void

// 2. create the callbacks function
let fn = (str: string) => console.log(str)

// 3. create the function
function req(url: string, cb: Greater) {
    cb(url)
}

console.log(req("http://kopistate.com", fn))