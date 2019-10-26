const Express = require('express')
const bodyParser = require('body-parser')
// npm install body-parser
const Pool = require('pg').Pool
const app = Express()
const port = 3000

const db = new Pool({
  user: 'dncdgalgtcxffu',
  host: 'ec2-54-83-202-132.compute-1.amazonaws.com',
  database: 'd14sr9dpf73eu9',
  password: '3da4eab64bcb8e9f29abeb4b32ca53013db66ec734920e97230e1b67370ef054',
  port: 5432,
  ssl: true
})

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
// get semua data dengan database
app.get('/', async(req, res)=>{
  const resData = await db.query('select * from users')
  res.json(resData.rows)
})
// get dengan spesifik id dengan database
app.get('/:id',async (req, res)=>{
  const id = req.params.id
  const resData = await db.query(`select * from users where id=${id}`)
  res.json(resData.rows[0])
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