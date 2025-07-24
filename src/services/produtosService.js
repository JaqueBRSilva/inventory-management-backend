import { getFirestore } from "firebase-admin/firestore"
import app from "../firebase/app.js"

const db = getFirestore(app)

/**
 * Retorna todos os produtos
 */
async function findAll() {
    const documents = await db.collection("produtos").get()
    const produtos = []

    documents.forEach(doc => {
        const produto = { id: doc.id, ...doc.data() }
        produtos.push(produto)
    })

    return produtos
}

/**
 * Retorna produto específico
 */
async function findById(id) {
    const doc = await db.collection("produtos").doc(id).get()

    if (doc.exists) {
        const produto = { id: doc.id, ...doc.data() }
        return produto
    } else {
        return null
    }
}

/**
 * Criar produto
 */
async function save(produto) {
    await db.collection("produtos").add(produto)
}

/**
 * Atualizar produto
 */
async function update(id, produto) {
    const docRef = db.collection("produtos").doc(id)
    const doc = await docRef.get()

    if (doc.exists) {
        await docRef.update(produto)
        return true
    } else {
        return false
    }
}

/**
 * Apagar produto
 */
async function remove(id) {
    const docRef = db.collection("produtos").doc(id)
    const doc = await docRef.get()

    if (doc.exists) {
        await docRef.delete()
        return true
    } else {
        return false
    }
}

export {
    findAll,
    findById,
    remove,
    save,
    update
}