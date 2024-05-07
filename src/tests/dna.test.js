const dnaValidator = require('../dna');

console.log(dnaValidator.isValidDNA('CTAGGGTA')); 
console.log(dnaValidator.isValidDNA('CTAGXXTA')); 
console.log(dnaValidator.isValidDNA('')); 
console.log(dnaValidator.isValidDNA(null)); 
