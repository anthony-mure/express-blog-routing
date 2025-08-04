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

//definisco la 1 rotta
app.get('/',(req, res) =>{

  res.send("Server del mio Blog");

});

//uso il router
app.use('/posts', postRouter);


//Creo un array dove inserisco una lista di almeno 5 post, per ognuno indico : titolo, contenuto, immagine e tags (tags è un array di stringhe)

//Creo  una rotta /bacheca che restituisca un oggetto json con la lista dei post.
app.get('/posts',(req, res) =>{

  const posts = [
   {
    titolo:'Ciambellone',
    contenuto: 'Ricetta Ciambellone' ,
    immagine:'/imgs/ciambellone.jpeg',
    tags:['Farina','Uova','Zucchero'],
   },
   {
    titolo:'Cracker Barbabietola',
    contenuto: 'Ricetta Cracker alla Barbabietola' ,
    immagine:'/imgs/cracker_barbabietola.jpeg',
    tags:['Cracker','Barbabietola','Viola'],
   },
   {
    titolo:'Pane Fritto',
    contenuto: 'Ricetta Pane Fritto Dolce' ,
    immagine:'/imgs/pane_fritto_dolce.jpeg',
    tags:['Pane','Fritto','Dolce'],
   },
   {
    titolo:'Pasta alla Barbabietola',
    contenuto: 'Ricetta Pasta alla Barbabietola' ,
    immagine:'/imgs/pasta_barbabietola.jpeg',
    tags:['Pasta','Barbabietola','Viola'],
   },
   {
    titolo:'Torta Paesana',
    contenuto: 'Ricetta della Torta Paesana' ,
    immagine:'/imgs/torta_paesana.jpeg',
    tags:['Torta','Paesana','Buona'],
   }

];

  res.json({posts});

});




//restiamo in ascolto sulla porta 3000
app.listen(port, () =>{

   console.log(`Server del blog in ascolto sulla porta ${port}`);

});
