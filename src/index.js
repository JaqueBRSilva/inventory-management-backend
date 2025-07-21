import express from "express";

const server = express();
server.use(express.json());

// const PORT = 3000 || process.env.DEFAULT_PORT
const PORT = 3000;

const produtos = [
  {
    name: 'Smart TV Samsung 32"',
    quantidade: 2000,
    preco: 1500,
  },
  {
    name: "Notebook Acer Nitro 5",
    quantidade: 1000,
    preco: 5500,
  },
  {
    name: "Gabinete Gamer 16GB i59400",
    quantidade: 1000,
    preco: 4500,
  },
];

server.get("/produtos", (req, res) => {
  res.status(200).json(produtos);
});

server.get("/produtos/:id_cod", (req, res) => {
  const id = Number(req.params.id_cod);

  if (Number.isNaN(id)) {
    return res.status(400).json({ msg: "Digite apenas números" });
  }

  const dados = produtos[id - 1];

  if (dados) {
    return res.status(200).json(dados);
  } else {
    return res.status(404).json({ msg: "Produto Não Encontrado" });
  }
});

server.post("/produtos", (req, res) => {
  const produto = req.body;
  produtos.push(produto);
  res.status(201).json({ msg: "Produto Cadastrado com Sucesso" });
});

server.listen(PORT, () => {
  console.info(`>>> SERVIDOR EM EXECUÇÃO NA PORTA: ${PORT} <<<`);
  console.warn(`ACESSE - http://localhost:${PORT}`);
});
