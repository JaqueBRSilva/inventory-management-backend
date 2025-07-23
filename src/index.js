import express from "express";
import productsRouter from "./routers/produtosRouter.js";

const server = express()
server.use(express.json()) // TODAS AS REQUISIÇÕES CONVERTIDAS PARA JSON

const PORT = 3000;

server.use(productsRouter)

server.listen(PORT, () => {
  console.info(`>>> SERVIDOR EM EXECUÇÃO NA PORTA: ${PORT} <<<`);
  console.warn(`http://localhost:${PORT}`);
});
