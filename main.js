// Create an function that takes in an array of numbers.
// Multily each number together and alert the product.

function multiNumsInArr(arr) {
    let thing = 1
    // arr.forEach(num => product *= num)

    for(let i = 0; i < arr.length; i++) {
        thing *= arr[i]
    }
    alert(thing)
}
multiNumsInArr([10,2,3,])

function multiAndAlert (arr) {
    let product = 1
    // arr.forEach( num => product *= num)
    for(let i = 0; i < arr.length; i++) {
        product *= arr[i]
    }
    alert(product)
}
multiAndAlert([10,2,3])

function multiNumsInArray (arr) {
    let product = 1
    for(let i = 0; i < arr.length; i++) {
        product *= arr[i]
    }
    alert(product)
}
multiNumsInArray([2,2,20])