const conexion = require("./conexion");

const getAdministrativos = (req, res) => {
  conexion().then(() => {
    const administrativos = require("../models/administrativos");
    administrativos
      .find()
      .then((dataAdminist) => {
        res.json(dataAdminist);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

const getAdministrativo = (req, res) => {
  conexion().then(() => {
    const administrativos = require("../models/administrativos");
    administrativos
      .findById(req.params.id)
      .then((dataAdminist) => {
        res.json(dataAdminist);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

const getAlumnos = (req, res) => {
  conexion().then(() => {
    const alumnos = require("../models/alumnos");
    alumnos
      .find()
      .then((dataAlumns) => {
        res.json(dataAlumns);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};
const getAlumno = (req, res) => {
    conexion().then(() => {
      const alumnos = require("../models/alumnos");
      alumnos
        .findById(req.params.id)
        .then((dataAlumns) => {
          res.json(dataAlumns);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

const getDocentes = (req, res) => {
  conexion().then(() => {
    const docentes = require("../models/docente");
    docentes
      .find()
      .then((dataDocents) => {
        res.json(dataDocents);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};
const getDocente = (req, res) => {
    conexion().then(() => {
      const docentes = require("../models/docente");
      docentes
        .findById(req.params.id)
        .then((dataDocents) => {
          res.json(dataDocents);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

const getEscuelas = (req, res) => {
  conexion().then(() => {
    const escuelas = require("../models/escuelas");
    escuelas
      .find()
      .then((dataEscuelas) => {
        res.json(dataEscuelas);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};
const getEscuela = (req, res) => {
    conexion().then(() => {
      const escuelas = require("../models/escuelas");
      escuelas
        .findById(req.params.id)
        .then((dataEscuelas) => {
          res.json(dataEscuelas);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

const getMantenimiento = (req, res) => {
  conexion().then(() => {
    const mantenimiento = require("../models/mantenimiento");
    mantenimiento
      .find()
      .then((dataMantenimiento) => {
        res.json(dataMantenimiento);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};
const getMantenimientoo = (req, res) => {
  conexion().then(() => {
    const mantenimiento = require("../models/mantenimiento");
    mantenimiento
      .findById(req.params.id)
      .then((dataMantenimiento) => {
        res.json(dataMantenimiento);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

module.exports = {
  getAlumnos,
  getAlumno,
  getDocentes,
  getDocente,
  getAdministrativos,
  getAdministrativo,
  getEscuelas,
  getEscuela,
  getMantenimiento,
  getMantenimientoo,
};
