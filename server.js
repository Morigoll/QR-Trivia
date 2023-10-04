const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const router = require('./routes'); // Asegúrate de que este es el path correcto a tu archivo de rutas.

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Configuración de la sesión:
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

app.use('/', router);

app.use('/assets', express.static('assets'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
