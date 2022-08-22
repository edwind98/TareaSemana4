const express = require ('express'); //express genera las funciones hacia la BD
const bodyParser = require("body-parser");
const app = express ();
const rutas = require('./rutas/rutasmusica')
//app.use(rutas) //URL del API
const puerto = process.env.PORT|| 3000;

app.listen(puerto, () => {
    console.log('Server escuchando en el puerto', puerto);
});
//
app.use(express.urlencoded({ extended: true }));
//app.use(bodyParser.json());

app.use(express.json());
app.use("/api", rutas);

app.get('/', (req,res) => {
  res.send("Inicio");
})

