# **JAZMIN OCHOA BENITEZ**
# Gestión Escolar - BDA
# RUTAS
[`COLECCION EN POSTMAN`](https://www.getpostman.com/collections/304b6dfd9b5fb5f971a6)


### GET
1. localhost:3000/escuelas
2. localhost:3000/alumnos
3. localhost:3000/docentes
4. localhost:3000/mantenimiento
5. localhost:3000/administrativos
### POST - Estructura De Doc
``` json
Docente:
    {
        "_id":"Un número o 24 caracteres",
        "noOficina": "String",
        "curp": "String",
        "nombre": "String",
        "tel": "String",
        "noBancaria":"String",
        "gradoEstudio": "String",
        "tutorados": [
            "Un número o 24 caracteres",
            "Un número o 24 caracteres"
        ],
        "escuela":"Un número o 24 caracteres"
    }
```

```json
Administrativo:
{
    "_id": "Un número o 24 caracteres",
    "funcion": "String",
    "hrEntrada": "String",
    "hrSalida": "String",
    "extTel": "String",
    "mail": "String",
    "curp": "String",
    "nombre": "String",
    "tel": "String",
    "noBancaria": "String",
    "escuela": "Un número o 24 caracteres"
}
```
Alumno
```json
    {
        "_id":
        "curp": "2DAOOBJ990323MNTCNZ04",
        "nombre": "String",
        "fechaNac":"String",
        "fechaIncripcion":"String",
        "gradoAcademico": "String",
        "creditoTutoria_Firmada": "Boolean",
        "tutor": "Un número o 24 caracteres",
        "escuela": "Un número o 24 caracteres"
    }
 ```
 Escuela
 ```json
 {
        "_id": "Un número o 24 caracteres",
        "clave": "String",
        "nombre": "String",
        "cd": "String",
        "direccion": "String",
        "administrativos": [
           "Un número o 24 caracteres",
            "Un número o 24 caracteres"
        ],
        "docentes": [
          "Un número o 24 caracteres",
          "Un número o 24 caracteres"
        ],
        "mantenimiento": [
            "Un número o 24 caracteres",
            "Un número o 24 caracteres"
        ],
        "alumnos": [
            "Un número o 24 caracteres",
           "Un número o 24 caracteres",
        ]
    }
 ```
 Mantenimiento
 ```json
     {
        "_id": "Un número o 24 caracteres",
        "noTelIns": "String",
        "areaEspecialidad": "String",
        "curp": "String",
        "nombre": "String",
        "tel":"String",
        "noBancaria": "String",
        "escuela": "Un número o 24 caracteres",
    }
 ```

### PUT
Administrativos
  ```json
  {
    "funcion": "String",
    "hrEntrada": "String",
    "hrSalida": "String",
    "extTel": "String",
    "mail": "String",
    "curp": "String",
    "nombre": "String",
    "tel": "String",
    "noBancaria": "String",
    "escuela": "Un número o 24 caracteres",
}
 ```
Alumnos
   ```json
    {
        "curp": "String",
        "nombre": "String",
        "fechaNac": "String",
        "fechaIncripcion": "String",
        "gradoAcademico":"String",
        "creditoTutoria_Firmada": "Boolean",
        "tutor": "Un número o 24 caracteres",
        "escuela": "Un número o 24 caracteres",
    }
 ```
 Docente
   ```json
     {
        "noOficina": "String",
        "curp":"String",
        "nombre": "String",
        "tel": "String",
        "noBancaria": "String",
        "gradoEstudio": "String",
        "tutorados": [
            "Un número o 24 caracteres",
            "Un número o 24 caracteres",
        ],
        "escuela": "Un número o 24 caracteres",
        "__v": 0
    }
 ```

 Escuela
   ```json
   {
        "clave": "String",
        "nombre": "String",
        "cd": "String",
        "direccion": "String",
        "administrativos": [
            "Un número o 24 caracteres",
            "Un número o 24 caracteres",
        ],
        "docentes": [
            "Un número o 24 caracteres",
            "Un número o 24 caracteres",
        ],
        "mantenimiento": [
            "Un número o 24 caracteres",
           "Un número o 24 caracteres",
        ],
        "alumnos": [
            "Un número o 24 caracteres",
            "Un número o 24 caracteres",
        ]
    }
 ```
 Mantenimiento
   ```json
       {
        "noTelIns": "String",
        "areaEspecialidad": "String",
        "curp": "String",
        "nombre": "String",
        "tel": "String",
        "noBancaria": "String",
        "escuela": "Un número o 24 caracteres"
    }
 ```
### DELETE
Después de la última /
colocar el _id:"" en específico
que se puede obtener ejecuntando los GET
000000028c6d04641ccba221

  ```
  Administrativos
localhost:3000/alumno/000000028c6d04641ccba221
 ```
   ```
   Alumnos
   localhost:3000/alumno/000000028c6d04641ccba221
 ```
   ```
    Docente
   localhost:3000/docente/000000078c6d04641ccba216
 ```
   ```
   Escuela
   localhost:3000/escuela/000000048c6d04641ccba226
 ```

   ```
   Escuela
   localhost:3000/escuela/000000048c6d04641ccba226
 ```


# CAPTURAS
![Mongo](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/Mongo.PNG)
![Mongo0](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/Mongo0.PNG)
![Mongo1](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/Mongo1.PNG)
![Mongo2](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/Mongo2.PNG)
![Mongo3](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/Mongo3.PNG)
![Mongo4](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/Mongo4.PNG)
![Mongo4_1](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/Mongo4_1.PNG)
![Mongo4_2](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/Mongo4_2.PNG)
![Mongo5](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/Mongo5.PNG)
![Mongo6_1](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/Mongo6_1.PNG)
![Mongo6](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/Mongo6.PNG)
![Mongo7](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/Mongo7.PNG)
![Mongo7_1](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/Mongo7_1.PNG)
![Mongo8](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/Mongo8.PNG)
![Mongo9](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/Mongo9.PNG)
![Mongo10](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/Mongo10.PNG)
![Mongo11](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/Mongo11.PNG)
![Mongo12](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/Mongo12.PNG)
![Mongo13](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/Mongo13.PNG)
![Mongo14](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/Mongo14.PNG)
![Mongo15](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/Mongo15.PNG)
![Mongo16](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/Mongo16.PNG)
![Mongo17](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/Mongo17.PNG)
![Mongo18](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/Mongo18.PNG)
![Mongo19](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/Mongo19.PNG)
![Mongo20](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/Mongo20.PNG)
![Mongo21](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/Mongo21.PNG)
![Mongo22](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/Mongo22.PNG)
![Mongo23](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/Mongo23.PNG)
![Mongo24](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/Mongo24.PNG)
![Mongo25](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/Mongo25.PNG)
![Mongo26](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/Mongo26.PNG)

