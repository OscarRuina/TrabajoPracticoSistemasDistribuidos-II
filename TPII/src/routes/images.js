const path = require('path')
const fs = require('fs-extra');
const express = require('express');
const router = express.Router();
//const contacto = require('../server/imagen');

router.post('/Subirimagen', async (req, res) => {
  //numeros aleatoreos
  var contador = 0;
  const possible = "abcdefghijklmnopqrstuvwxyz0123456789";
  let randomNumber = 0;
  for (let i = 0; i < 6; i++) {
    randomNumber += possible.charAt(
      Math.floor(Math.random() * possible.length)
    );
  }
  //Fin numeros aleatoreos

   console.log(req.file);
   var ext = path.extname(req.file.originalname).toLowerCase(); //solo la extension
   var direccion = req.file.path;
   var nombre = randomNumber + ext
   var moverImagen = path.resolve('src/public/img/',nombre)
   if (
    ext === ".png" ||
    ext === ".jpg" ||
    ext === ".jpeg" ||
    ext === ".gif"
  ) {
    await fs.rename(direccion, moverImagen)
    console.log(moverImagen);
    req.getConnection((err, conn) => {
      conn.query('SELECT COUNT(*) AS count FROM imagen', (err,result) => {
        contador = result[0].count
        contador = contador + 1;
        
        var post  = {id: contador, ubicacion: moverImagen, titulo: req.body.titulo, descripcion: req.body.descripcion, nombre: nombre};

        req.getConnection((err, conn) => {
          conn.query('INSERT INTO imagen set ?', [post], (err,result) => {
            if (err) console.log(err);

            console.log(result);
          });
        })

      });
    })
  }
  res.redirect('/');
});

router.get('/images/:id',(req, res) => {
  console.log('parametro', req.params.id)
  var id = req.params.id

  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM imagen WHERE id = ?', [id], (err,imagen) => {
      if (err) console.log(err);
      console.log(imagen);

      req.getConnection((err, conn) => {
        conn.query('SELECT * FROM comentario WHERE id = ?', [id], (err,comentario) => {
          if (err) console.log(err);
          
          console.log(comentario);
          res.render('imagen',{data: imagen, comentario: comentario});
        });
      })
    });
  })

});

router.post('/images/:id/comment',(req, res) => {
  console.log('cuerpo de la entrada', req.body)
  console.log('id:', req.params.id)

    var post  = {id: req.params.id, email: req.body.email, nombre: req.body.name, comentario: req.body.comment};

    req.getConnection((err, conn) => {
      conn.query('INSERT INTO comentario set ?', [post], (err,result) => {
        if (err) console.log(err);

        console.log(result);
        res.redirect('/images/' + req.params.id)
        //res.redirect('/contact');
      });
    })
});

module.exports = router;