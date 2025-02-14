const promise1 = new Promise((resolve,reject) =>{

    resolve("Veriler Alındı");
    reject("Sunucu Hatası!");
});

promise1
    .then(value => console.log(value))
    .catch(error => console.log(error));