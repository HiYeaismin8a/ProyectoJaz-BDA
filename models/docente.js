const { Schema, model } = require("mongoose");

const esquema = new Schema({
  _id: Schema.Types.ObjectId,
  noOficina: String,
  areaEspecialidad: String,
  curp: String,
  nombre: String,
  tel: String,
  noBancaria: String,
  gradoEstudio: String,
  tutorados: [Schema.Types.ObjectId],
  tutoriaFirmada: Boolean,
  escuela:Schema.Types.ObjectId
},
{
    collection:"docente"
});

const modelo = new model("docente", esquema);
module.exports = modelo
