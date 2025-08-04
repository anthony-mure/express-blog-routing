//importo express 
const express = require('express');

//invoco la funzione express e salvo il risultato in una variabile
const app = express();

//definisco la porta 3000
const port = 3000;

//importo il file router per i posts
const postRouter = require('./routers/posts.js');

//inserisco il middleware dei file statici
app.use(express.static('public'));

//uso il router
app.use('/posts', postRouter);

//definisco la 1 rotta
app.get('/',(req, res) =>{

  res.send("Server del mio Blog");

});



//restiamo in ascolto sulla porta 3000
app.listen(port, () =>{

   console.log(`Server del blog in ascolto sulla porta ${port}`);

});
