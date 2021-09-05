/*
 * Function with return value is Object
 * (Optional & default params)
 *
|============|==========|===============|
| parameters | required | default value |
|------------|----------|---------------|
|firstName   |   Yes    |               |
|lastName    |   Yes    |               |
|gender      |   No     |               |
|language    |   No     |     js        |
|------------|----------|---------------|

create a function submitContact(firstName, lastName, gender, language) {
    return {
        firstName,
        lastName,
        gender,
        language
    }
}
*/

// Create type aliases
type Contact = {
    firstName: string
    lastName: string
    gender?: string
    language: string
}

// create a function that return object
function submitContact(firstName: string, lastName: string, gender: string, language: string): Contact {
    return {
        firstName: firstName,
        lastName: lastName,
        ...(gender && { gender }),
        language: language
    }
}

let results = submitContact('dave', 'juna', 'male', 'js')
console.log(results)