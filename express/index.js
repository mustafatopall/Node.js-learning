const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('"hello world"');
});
app.get('/contact', (req, res) => {
    res.status(200).send("contact");
});
app.get('/about', (req, res) => {
    res.status(200).send("about");
});
app.get('*', (req, res) => {
    res.status(404).send("not found");
});


app.listen(3000);