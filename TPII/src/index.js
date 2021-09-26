const express = require('express');
const path = require('path');
const mysql = require('mysql');
const morgan = require('morgan');
const myConnection = require('express-myconnection');
const multer = require("multer")

// configuracion
const app = express();
app.set('port', 3000); //una constante
app.set('views', path.join(__dirname, 'views')) //configura la carpeta para el index.
//app.engine('html', require('ejs').renderFile); //para que el ejs renderice html 
app.set('view engine', 'ejs');


//funciones
app.use(morgan('dev'));
app.use(myConnection(mysql ,{
	host: 'localhost',
	user: 'root',
	password: '1234',
	port: 3306,
	database: 'db-redsocial'
},'single'));
app.use(express.urlencoded({extended: false}));
app.use(multer({dest:path.join(__dirname,'public/img/temp')}).single('image'));

//rutas
app.use(require('./routes/index'));
app.use(require('./routes/login'));
app.use(require('./routes/register'));
app.use(require('./routes/routerContacto'));
app.use(require('./routes/images'));

//archivos estaticos - img css
app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'), () => {
	console.log('server funcionando', app.get('port'));
});

