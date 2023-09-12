const express = require("express");
const path = require("path");
const port = 8000;
const app = express();


// app.use('./opciones', opciones)
// app.use('/opciones', opciones);


app.get('/opciones/:lenguaje', (req,res) => {
    const lenguaje = req.params.lenguaje

    switch (lenguaje) {
        case "español":
            res.sendFile(path.join(__dirname + "/esp.html"));
            break;
        case "ingles":
            res.sendFile(path.join(__dirname + "/eng.html"));
            break;
        case "portugues":
            res.sendFile(path.join(__dirname + "/por.html"));
            break;
        default:
            res.send("Idioma no encontrado");
            break;
    }
})

app.get('/contar/:numeros',(req,res) => {
    const numeros = parseInt(req.params.numeros)
    let conteo = ','
    for (let i = 1; i <= numeros; i++) {
        conteo += i+';'        
    }
    // res.send(conteo)
    res.send(`<h1> ${conteo}</h1>`)
});

app.get('/', (req,res) => {
    res.send('inicio del programa')
});



app.listen(port, () => {console.log(`El servidor corre en el puerto ${port}`)});

