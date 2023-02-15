const express = require("express"); //Importando

const app = express(); //Instanciando
app.use(express.json());

app.get('/politicos/preferidos', (req, res) =>{
    res.send({
        message: "Ruim demais!",
    });
})

app.get('/responder/:nome', (req, res) => {
    const nomeAluno = req.params.nome
    const listaAlunos = [
        'Roberto', 'Emilly', 'Vitória'
    ]
    res.send({
        destinatario: "Antônio",
        message: `Oi ${nomeAluno}`,
        colegas: listaAlunos,
    });
});

app.listen(9000, () =>{
    console.log("Ok! Estou escutando! Aguardo requisições...")
});