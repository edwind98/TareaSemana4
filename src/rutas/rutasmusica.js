const express = require('express');
const rutas = express.Router();
const cancionSchema = require ('../database/database')
const mongoose = require("mongoose");

//GET nombre de canciones
rutas.post('/canciones', (req, res) => {
   const modeloFinal = { ...req.body, _id: new mongoose.Types.ObjectId() }
   console.log(modeloFinal);
  console.log(modeloFinal);
   const cancion = cancionSchema(modeloFinal);
   cancion
   .save()
   .then((data) => res.json(data))
   .catch((error) => res.json({message: error}));
});

rutas.get('/canciones', (req, res) => {
    cancionSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
 });

//GET con ID
rutas.get('/canciones/:id', (req, res) => {
    const { id } = req.params;
    cancionSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
 });

 //GET Artistas
 rutas.get('/canciones/artista/:artista', (req, res) => {
   const artist  = req.params.artista;
   cancionSchema
   .findOne({artista:artist})
   .then((data) => res.json(data))
   .catch((error) => res.json({message: error}));
});

 //GET Año
 rutas.get('/canciones/anio/:anio', (req, res) => {
   const year  = req.params.anio;
   const currentYear = new Date().getFullYear();
   cancionSchema
   .find({anio:{$gte: year, $lte: currentYear}})
   .then((data) => res.json(data))
   .catch((error) => res.json({message: error}));
});

 //GET Canciones dif año
 rutas.get('/canciones/dif/anio', (req, res) => {
   const year1  = req.query.year1;
   const year2 = req.query.year2;
   cancionSchema
   .find({anio:{$gte: year1, $lte: year2}})
   .then((data) => res.json(data))
   .catch((error) => res.json({message: error}));
});

 //Actualizar ID de canción
 rutas.put('/canciones/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, artista, album, anio, pais } = req.body;
    cancionSchema
    .updateOne({ _id: id }, { $set: {nombre, artista, album, anio, pais} })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
 });

//Delete
rutas.delete('/canciones/:id', (req, res) => {
    const { id } = req.params;
    cancionSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
 });

module.exports = rutas; //rutas.musica exportado en otro file