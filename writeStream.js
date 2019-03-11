const fs = require('fs');

const writeStream = fs.createWriteStream('file.txt');

const pathName = writeStream.path;

let array = ['1','2','3','4','5','6','7'];

// write each value of the array on the file breaking line
array.forEach(value => writeStream.write(`${value}\n`));

// the finish event is emitted when all data has been flushed from the stream
writeStream.on('finish', () => {
   console.log(`wrote all the array data to file ${pathName}`);
});

// handle the errors on the write process
writeStream.on('error', (err) => {
    console.error(`There is an error writing the file ${pathName} => ${err}`)
});

// close the stream
writeStream.end();
