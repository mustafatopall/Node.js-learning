function getData(data){
    return new Promise((resolve,reject)=>{
     console.log('Veriler Alınmaya Başlıyor')

         if (data){
             resolve("veriler alındı")
         }
         else {
             reject("hata!")
         }
    })
}

function cleanData(recivedData){
    return new Promise((resolve,reject)=>{
        console.log('Veriler Temizleniyor')

        if (recivedData){
            resolve("veriler temizleni")
        }
        else {
            reject("veriler temizlenemedi")
        }
    })
}


async function processData() {
    try {
        const data = await getData(false);
        console.log(data);
        const cleanedData = await cleanData(true);
        console.log(cleanedData);
    } catch (error) {
        console.error(error);
    }
}

processData();

