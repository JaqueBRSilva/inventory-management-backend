import express from "express"
import { createUser, deleteUser, findAllUsers, findUserById, updateUser } from "../services/usuariosService.js"

const usuariosRouter = express.Router()

// GET /usuarios
usuariosRouter.get("/usuarios", async (req, res) => {
    try {
        const usuarios = await findAllUsers()
        return res.status(200).json(usuarios)

    } catch (error) {
        return res.status(500).json({ msg: "Houve um erro. Tente mais tarde" })
    }
})

// GET /usuarios/:id
usuariosRouter.get("/usuarios/:id", async (req, res) => {
    try {
        const id = req.params.id
        const usuario = await findUserById(id)

        if (usuario) {
            return res.status(200).json(usuario)
        } else {
            return res.status(404).json({ msg: "Usuário não encontrado" })
        }

    } catch (error) {
        return res.status(500).json({ msg: "Houve um erro. Tente mais tarde" })
    }
})

// POST /usuarios
usuariosRouter.post("/usuarios", async (req, res) => {
    try {
        const usuario = req.body
        await createUser(usuario)
        return res.status(201).json({ msg: "Usuário Cadastrado" })
    } catch (error) {
        return res.status(500).json({ msg: "Erro interno no servidor" })
    }
})

// PUT /usuarios/:id
usuariosRouter.put("/usuarios/:id", async (req, res) => {
    try {
        const id = req.params.id
        const usuario = req.body
        const flag = await updateUser(id, usuario)

        if (flag) {
            return res.status(200).json({ msg: "Usuário alterado" })
        } else {
            return res.status(404).json({ msg: "Usuário não encontrado" })
        }
    } catch (error) {
        return res.status(500).json({ msg: "Erro interno no servidor" })
    }
})

// DELETE /usuarios/:id
usuariosRouter.delete("/usuarios/:id", async (req, res) => {
    try {
        const id = req.params.id
        const flag = await deleteUser(id)

        if (flag) {
            return res.status(200).json({ msg: "Usuário excluído" })
        } else {
            return res.status(404).json({ msg: "Usuário não encontrado" })
        }
    } catch (error) {
        return res.status(500).json({ msg: "Erro interno no servidor" })
    }
})

export default usuariosRouter