const book = [
    { name : "kitap1",authour : "yazar1"},
    { name : "kitap3",authour : "yazar2"},
    { name : "kitap3",authour : "yazar3"}
];


const listbooks = ()=> {
    book.map((book)=>{
    console.log(book.name);
    });
};

const addbook = (newbook,callback)=>{
    book.push(newbook);
    callback();
}


addbook({name : "kitap4",authour : "yazar4"},listbooks);


