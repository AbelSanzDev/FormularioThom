const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express()
app.listen(3000)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200,
}));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'preregistro',
});

// Conectar a la base de datos
db.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err);
    } else {
        console.log('Conexión exitosa a la base de datos');
    }
});

app.post('/insertar', (req, res) => {
    const { curp, apellidoPaterno, apellidoMaterno, nombre, correo, telefonoCasa, telefonoCelular } = req.body;

    const sql = 'INSERT INTO alumno (CURP, apellidoPaterno, apellidoMaterno, nombre, correo, telefonoCasa, telefonoCelular) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const values = [curp, apellidoPaterno, apellidoMaterno, nombre, correo, telefonoCasa || null, telefonoCelular || null];

    db.query(sql, values, (error, results) => {
        if (error) {
            console.error('Error al insertar datos:', error);
            res.status(500).send('Error al insertar datos en la base de datos');
            return;
        }

        console.log('Datos insertados correctamente');
        res.status(200).send('Datos insertados correctamente');
    });
});

