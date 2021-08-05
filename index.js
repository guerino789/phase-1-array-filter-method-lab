const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(name, string){
   return name.filter( input =>
    input.toLowerCase() === string.toLowerCase()
    )
}

// console.log(findMatching(drivers, 'sammy'))


function fuzzyMatch(array, string){
    return array.filter( input =>
        input.toLowerCase().indexOf(string.toLowerCase()) === 0
        )
}

console.log(fuzzyMatch(drivers, 'b'))

function matchName(array, string){
    return array.filter(input => input.name === string)
}