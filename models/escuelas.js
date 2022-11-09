const { Schema, model } = require("mongoose");

const esquema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    clave: String,
    nombre: String,
    cd: String,
    direccion: String,
    administrativos: [Schema.Types.ObjectId],
    docentes: [Schema.Types.ObjectId],
    mantenimiento: [Schema.Types.ObjectId],
    alumnos: [Schema.Types.ObjectId]
  },
  {
    collection: "escuelas"
  }
);

const modelo = model("escuelas", esquema);
module.exports = modelo
