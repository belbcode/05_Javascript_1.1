var convertToNum = function(array, index) {
    let arrayOfInts = []
    while(index < array.length) {
        arrayOfInts = arrayOfInts.concat(Number(array[index]))
        index++;
    }
    return arrayOfInts
}

let sumOfArgs = convertToNum(process.argv, 2).reduce((a, b) => a+b, 0)

console.log(sumOfArgs)