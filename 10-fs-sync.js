const {readFileSync,writeFileSync} = require('fs')

console.log('start')
const first = readFileSync('./content/first.txt','utf-8');//read the file
const second = readFileSync('./content/second.txt','utf-8');

console.log(first,second)

//write file and append the text in the existing file
writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    console.log('Done with the task')
)

console.log('Starting the new task')
