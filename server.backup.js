const Express = require('express')
const bodyParser = require('body-parser')
// npm install body-parser
const app = Express()
const port = 3000

let data = [
  {
    id:1572072895826,
    nama:'Budi',
    umur:20,
    alamat:'Jakarta'
  },
  {
    id:1572072895827,
    nama:'Bambang',
    umur:20,
    alamat:'Jakarta'
  }
]
app.use(bodyParser())
// get semua data
app.get('/',(req, res)=>{
  res.json(data)
})
// get dengan spesifik id
app.get('/:id',(req, res)=>{
  const id = req.params.id
  const obj = data.find(item=>item.id == id)
  console.log(req.params)
  res.json(obj)
})
// post menambah data
app.post('/',(req, res)=>{
  const {nama, umur, alamat} = req.body
  const id = Number(new Date)
  console.log(req.body)
  data.push({id, nama, umur, alamat})
  res.json('Data berhasil di tambah')
})
// put mengedit data
app.put('/:id',(req, res)=>{
  const {nama, umur, alamat} = req.body
  const id = req.params.id
  const index = data.findIndex(item=>item.id == id)
  if(nama === undefined){
    data[index] = {...data[index], umur, alamat}
  } else {
    data[index] = {...data[index],nama, umur, alamat}
  }
  res.json('data berhasil diubah')
})
// delete data
app.delete('/:id',(req, res)=>{
  const id = req.params.id
  const newData = data.filter(item => item.id != id)
  data = newData
  console.log(newData)
  res.json('Data terhapus')
})

app.listen(port,()=>console.log('localhost:3000'))