const fs = require('fs');

// Datei wird geschrieben

// fs.writeFile('message.txt', 'Textinhalt der Message.txt Datei', err => {
//     if(err) throw err;

//     console.log('Codereihnfolge: Message.txt wurde geschrieben');
// });

// console.log('Codereihnfolge: Hier geht es weiter wärend die Message geschrieben wird.');

// Datei wird gelesen 

fs.readFile('./message.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});