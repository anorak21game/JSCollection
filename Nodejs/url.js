const url = require('url');

const adress = 'http://wirth.design/';

const parsedUrl = url.parse(adress, true);

console.log('Hostname: ' + parsedUrl.host);
console.log('Pfad: ' + parsedUrl.pathname);
console.log('Host Monat: ' + parsedUrl.query.month);