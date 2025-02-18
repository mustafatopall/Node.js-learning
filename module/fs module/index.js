const fs = require('node:fs');


/*fs.readFile('password.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    console.log("dosya okundu");
});

var yazılacak = "mustafa buradaydı";
fs.writeFile('example.txt', yazılacak, (err) => {
    if(err) console.log(err);
    console.log("dosya yazıldı");
});

fs.appendFile('example.txt','\nMustafa burada da vardı','utf8',(err) => {
    if(err) console.log(err);
    console.log('yeni veri eklendi');
});*/


fs.mkdir('data/img', {recursive : true},(err) => {
    if (err) throw err;
    console.log('yeni dosyalar veya dosya oluşturuldu');
});