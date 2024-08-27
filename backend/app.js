const express = require ('express');
const app = express ();
const router = require ('../backend/routes/routes');


app.use((req,res,next)=>{
  // Accéder à notre API depuis n'importe quelle origine ( '*' )  .
  res.setHeader('Access-Control-Allow-Origin', '*');
    // D'ajouter les headers mentionnés aux requêtes envoyées vers notre API (Origin , X-Requested-With , etc.) .
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type,Authorization');
    // D'envoyer des requêtes avec les méthodes mentionnées ( GET ,POST , etc.) .
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
next()    
});
app.use(express.json());

app.use('/api/', router);




module.exports = app;