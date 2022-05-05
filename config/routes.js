const { response } = require('express');
const express = require('express');
const routes = express.Router();

let db = [
  { '1': { Nome: 'Cliente 1', Idade: '21', Endereco: 'Rua 1' } },
  { '2': { Nome: 'Cliente 2', Idade: '22', Endereco: 'Rua 2' } },
  { '3': { Nome: 'Cliente 3', Idade: '23', Endereco: 'Rua 3' } }
]


routes.get('/', (req, res) => {
  return res.json(db)
})

routes.post('/add', (req, res) => {
  const body = req.body

  if (!body) 
    return res.status(400).end()

  db.push(body)
  return res.json(body)
})

routes.delete('/:id', (req, res) => {
  const id = req.params.id

  let newDB = db.filter(item => {
    if (!item[id]) 
      return item
  })

  db = newDB

  return res.send(newDB)
})


module.exports = routes