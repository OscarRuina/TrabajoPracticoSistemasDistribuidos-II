const contacto = {};

contacto.list = (req, res) => {
	req.getConnection((err, conn) => {
		conn.query('SELECT * FROM contacto', (err, contacto)=>{
			if (err) {
				next(err);
			}else{
				console.log(contacto);		//p
				res.render('contact', {
					data: contacto
				});
			}
		});
	});
};

contacto.guardar = (req, res) => {
	//console.log(req.body);
	//res.send('guardar contacto');
	const datos = req.body;

	req.getConnection((err, conn) => {
		conn.query('INSERT INTO contacto set ?', [datos], (err,contacto) => {
			console.log(contacto);
			res.redirect('/contact');
		});
	})
}

contacto.eliminar = (req, res) => {
	//onsole.log(req.params.id);
	//res.send('trabajo');
	const id = req.params.id

	req.getConnection((err, conn) => {
		conn.query('DELETE FROM contacto WHERE id = ?', [id], (err,contacto) => {
			console.log(contacto);
			res.redirect('/contact');
		});
	})
}
/*  El actualizar es mas complicado ya que requiere otra pantalla
contacto.Actualizar = (req, res) => {
	//onsole.log(req.params.id);
	//res.send('trabajo');
}*/

module.exports = contacto;