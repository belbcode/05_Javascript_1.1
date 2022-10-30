const fs = require('fs')

let myfile = process.argv[2]

let rawtext = fs.readFileSync(myfile).toString()

var newLineCounter = function(text) {
    let i = 0;
    let numOfNewLines = 0
    while(text[i]) {
        if(text[i]==="\n") {
            numOfNewLines++;
        }
        i++;
    }
    return numOfNewLines
}


console.log(newLineCounter(rawtext))

module.exports(newLineCounter)