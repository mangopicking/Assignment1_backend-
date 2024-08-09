const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const books = JSON.parse(fs.readFileSync('./buku.json', 'utf-8'));

// list books
app.get('/books', (req, res) => {
    res.send(books);
});

app.get('/books/:id', (req, res) => {
    const id = Number.parseInt(req.params.id);
    const tempBook = books.filter(b => {
        return b.id === id
    })
    res.send(tempBook);
});

app.get('/ejs/books', (req, res) => {
    res.render('bookList', { books });
});

app.listen(port,() => {
    console.log('Listening at http://localhost:${port}')
})