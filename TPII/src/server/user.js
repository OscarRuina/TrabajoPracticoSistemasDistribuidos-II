const user = {};

user.list= (req,res) =>{
    req.getConnection((err, conn) => {
		conn.query('SELECT * FROM usuario', (err,user)=>{
			if (err) {
				next(err);
			}else{
				console.log(user);		//p
				res.render('register', {
					data:user
				});
			}
		});
	});
}

user.save= (req,res) =>{
	console.log(req.body);
	//res.send('trabajo');
    const datos = req.body;
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO usuario set ?', [datos], (err,user)=>{
			console.log(user)
            res.redirect('/login')
        });
    });
}

module.exports = user;