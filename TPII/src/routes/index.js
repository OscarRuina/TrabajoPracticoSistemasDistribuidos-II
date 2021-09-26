const express = require('express');
const router = express.Router();		//me devuelve rutas en js

router.get('/', (req, res) => {
	//res.render('contact', {data: result});
	req.getConnection((err, conn) => {
		conn.query('Select * from imagen', (err,result) => {
			if (err) console.log(err);
			console.log(result);
			res.render('index',{data: result});
			
		});
	})
	//si uso .ejs
	//res.render('index.html',{title: 'PedidoYa'})  //Si uso app.engine('html', require('ejs')
});


module.exports = router;