const express = require("express")
const router = express.Router()
const get = require("./get")

router.get("/alumnos", get.getAlumnos)
router.get("/alumnos/:id", get.getAlumno)
router.get("/docentes",get.getDocentes)
router.get("/docentes/:id",get.getDocente)
router.get("/escuelas", get.getEscuelas)
router.get("/escuelas/:id", get.getEscuela)
router.get("/mantenimiento", get.getMantenimiento)
router.get("/mantenimiento/:id", get.getMantenimientoo)
router.get("/administrativos", get.getAdministrativos)
router.get("/administrativos/:id", get.getAdministrativo)

module.exports = router
