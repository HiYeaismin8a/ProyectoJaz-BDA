const conectores = require("./conexion");
const conexion = conectores.mongo;
const redis = conectores.redis();
const { Types } = require("mongoose");

const deleteAdministrativo = (req, res) => {
    conexion().then(() => {
      const modelo = require('../models/administrativos');
      modelo.deleteOne({ _id: req.params.id }).then((administrativo) => {
        redis.connect().then(() => {
          redis.set(
            `ADMINISTRATIVOS:DELETE:${new Date().getTime().toString()}`,
            `Eliminacion de administrativo ${JSON.stringify(administrativo)}`
          );
          redis.quit();
        });
        res.header('Access-Control-Allow-Origin', '*').json(administrativo);
      });
    });
  };

  const deleteAlumnos = (req, res) => {
    conexion().then(() => {
      const modelo = require('../models/alumnos');
      modelo.deleteOne({ _id: req.params.id }).then((alumnos) => {
        redis.connect().then(() => {
          redis.set(
            `Alumnos:DELETE:${new Date().getTime().toString()}`,
            `Eliminacion de administrativo ${JSON.stringify(alumnos)}`
          );
          redis.quit();
        });
        res.header('Access-Control-Allow-Origin', '*').json(alumnos);
      });
    });
  };

  const deleteDocente = (req, res) => {
    conexion().then(() => {
      const modelo = require('../models/docente');
      modelo.deleteOne({ _id: req.params.id }).then((docente) => {
        redis.connect().then(() => {
          redis.set(
            `Docente:DELETE:${new Date().getTime().toString()}`,
            `Eliminacion de docente ${JSON.stringify(docente)}`
          );
          redis.quit();
        });
        res.header('Access-Control-Allow-Origin', '*').json(docente);
      });
    });
  };

  const deleteEscuelas = (req, res) => {
    conexion().then(() => {
      const modelo = require('../models/escuelas');
      modelo.deleteOne({ _id: req.params.id }).then((escuelas) => {
        redis.connect().then(() => {
          redis.set(
            `Escuelas:DELETE:${new Date().getTime().toString()}`,
            `Eliminacion de escuelas ${JSON.stringify(escuelas)}`
          );
          redis.quit();
        });
        res.header('Access-Control-Allow-Origin', '*').json(escuelas);
      });
    });
  };

  const deleteMantenimiento = (req, res) => {
    conexion().then(() => {
      const modelo = require('../models/mantenimiento');
      modelo.deleteOne({ _id: req.params.id }).then((mantenimiento) => {
        redis.connect().then(() => {
          redis.set(
            `Mantenimiento:DELETE:${new Date().getTime().toString()}`,
            `Eliminacion de Mantenimiento ${JSON.stringify(mantenimiento)}`
          );
          redis.quit();
        });
        res.header('Access-Control-Allow-Origin', '*').json(mantenimiento);
      });
    });
  };


  module.exports = {
    deleteAdministrativo,
    deleteAlumnos,
    deleteDocente,
    deleteEscuelas,
    deleteMantenimiento
  }