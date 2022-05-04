const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

let db = [
  { '1': { Nome: 'Cliente 1', Idade: '21', Endereco: 'Rua 1' } },
  { '2': { Nome: 'Cliente 2', Idade: '22', Endereco: 'Rua 2' } },
  { '3': { Nome: 'Cliente 3', Idade: '23', Endereco: 'Rua 3' } }
]

app.get('/', (req, res) => {
  return res.json(db)
})



app.listen(3000, () => {
  console.log('Server is running on port 3000');
})