const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://edwindubon:Gaaramwm1@vanguardia.oqydcga.mongodb.net/musica?retryWrites=true&w=majority")
  .then(() => console.log("¡Conexion a la base de datos exitosa!"))
  .catch((error) => console.error(error));

const cancionSchema = new mongoose.Schema( 
    {
      _id: {
        type: String,
        required: true
      },
      nombre: String,
      artista: String,
      album: String,
      anio: String,
      pais: String,
    },
    {
      collection: "musica", 
    }
  );
module.exports = mongoose.model("musica", cancionSchema);