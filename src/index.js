import cors from 'cors';
import "dotenv/config";
import express from "express";
import produtosRouter from "./routers/produtosRouter.js";
import usuariosRouter from "./routers/usuariosRouter.js";

const server = express()
server.use(cors({ origin: "*" }))
server.use(express.json()) // TODAS AS REQUISIÇÕES CONVERTIDAS PARA JSON

const PORT = 3000 || process.env.PORT

server.use(produtosRouter)
server.use(usuariosRouter)

server.listen(PORT, () => {
  console.info(`>>> SERVIDOR EM EXECUÇÃO NA PORTA: ${PORT} <<<`);
  console.warn(`http://localhost:${PORT}`);
});
