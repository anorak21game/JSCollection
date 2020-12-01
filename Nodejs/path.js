const path = require('path');

// path.basename();
// path.dirname();
// path.extname();
// path.format();
// path.isAbsolute();
// path.join();
// path.normalize();
// path.parse();
// path.relative();
// path.resolve();
// path.toNamespacedpath();

// EXAMPLE:

const fileLocation = path.join(__dirname, 'app.js');
const fileName = path.basename(fileLocation);
const fileExt = path.extname(fileName);

console.log('Filelocation: ' + fileLocation);
console.log('Filename:' + fileName);
console.log('Extname: ' + fileExt);