const conectores = require("./conexion");
const conexion = conectores.mongo;
const redis = conectores.redis();
const { Types } = require("mongoose");

const putAdministrativo = (req, res) => {
    conexion().then(() => {
      const modelo = require('../models/administrativos');
      modelo
        .updateOne({ _id: req.params.id }, req.body)
        .then((administrativo) => {
          redis.connect().then(() => {
            redis.set(
              `ADMINISTRATIVOS:PUT:${new Date().toUTCString()}`,
              `Actualizacion de administrativo ${administrativo._id}`
            );
            redis.quit();
          });
          res.header('Access-Control-Allow-Origin', '*').json(administrativo);
        });
    });
  };

  const putAlumno= (req, res) => {
    conexion().then(() => {
      const modelo = require('../models/alumnos');
      modelo
        .updateOne({ _id: req.params.id }, req.body)
        .then((alumno) => {
          redis.connect().then(() => {
            redis.set(
              `alumno:PUT:${new Date().toUTCString()}`,
              `Actualizacion de alumno ${alumno._id}`
            );
            redis.quit();
          });
          res.header('Access-Control-Allow-Origin', '*').json(alumno);
        });
    });
  };

  const putDocente= (req, res) => {
    conexion().then(() => {
      const modelo = require('../models/docente');
      modelo
        .updateOne({ _id: req.params.id }, req.body)
        .then((docente) => {
          redis.connect().then(() => {
            redis.set(
              `docente:PUT:${new Date().toUTCString()}`,
              `Actualizacion de docente ${docente._id}`
            );
            redis.quit();
          });
          res.header('Access-Control-Allow-Origin', '*').json(docente);
        });
    });
  };

  const putEscuelas= (req, res) => {
    conexion().then(() => {
      const modelo = require('../models/escuelas');
      modelo
        .updateOne({ _id: req.params.id }, req.body)
        .then((escuelas) => {
          redis.connect().then(() => {
            redis.set(
              `escuelas:PUT:${new Date().toUTCString()}`,
              `Actualizacion de escuelas ${escuelas._id}`
            );
            redis.quit();
          });
          res.header('Access-Control-Allow-Origin', '*').json(escuelas);
        });
    });
  };

  const putMantenimiento= (req, res) => {
    conexion().then(() => {
      const modelo = require('../models/mantenimiento');
      modelo
        .updateOne({ _id: req.params.id }, req.body)
        .then((mantenimiento) => {
          redis.connect().then(() => {
            redis.set(
              `mantenimiento:PUT:${new Date().toUTCString()}`,
              `Actualizacion de mantenimiento ${mantenimiento._id}`
            );
            redis.quit();
          });
          res.header('Access-Control-Allow-Origin', '*').json(mantenimiento);
        });
    });
  };



  module.exports = {
    putAdministrativo,
    putAlumno,
    putDocente,
    putEscuelas,
    putMantenimiento
  };