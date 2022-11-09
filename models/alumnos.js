const { Schema, model } = require("mongoose");

const esquema = new Schema({
    _id: Schema.Types.ObjectId,
    curp: String,
    nombre: String,
    fechaNac: String,
    fechaIncripcion: String,
    gradoAcademico: String,
    areaEspecialidad: String,
    creditoTutoria_Firmada: Boolean,
    tutor: Schema.Types.ObjectId,
    escuela: Schema.Types.ObjectId,
},
{
    colletion: "alumnos"
});
const modelo = model("alumnos", esquema);
module.exports = modelo