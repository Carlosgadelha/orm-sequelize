import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.get('/', (req, res) => {
    res.status(200).send({msg: 'ola'})
})

app.listen(port, () =>{
    console.log(`Setvidor está rodando na porta: ${port}`);
})

export default app;