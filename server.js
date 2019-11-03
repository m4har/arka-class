const Express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
// npm install body-parser
const Pool = require('pg').Pool
const app = Express()
const port = 3001

const db = new Pool({
  user: 'dncdgalgtcxffu',
  host: 'ec2-54-83-202-132.compute-1.amazonaws.com',
  database: 'd14sr9dpf73eu9',
  password: '3da4eab64bcb8e9f29abeb4b32ca53013db66ec734920e97230e1b67370ef054',
  port: 5432,
  ssl: true
})
db.connect()
app.use(bodyParser())
app.use(cors())

// get semua data dengan database
app.get('/', async(req, res)=>{
  try {
    const resData = await db.query('select * from users order by id asc')
    res.json(resData.rows)
  } catch (error) {
    // jalan ketika ada error
    console.log(error)
    res.status(422).json('error, please check log')
  }
})

// get dengan spesifik id dengan database
app.get('/:id',async (req, res)=>{
  try {
    const id = req.params.id
    const resData = await db.query(`select * from users where id=${id}`)
    res.json(resData.rows[0])
  } catch (error) {
    // jalan ketika ada error
    console.log(error)
    res.status(422).json('error, please check log')
  }
})

// post menambah data
app.post('/',async (req, res)=>{
  try {
    const {nama, umur, alamat} = req.body
    await db.query(`insert into users(nama, umur, alamat) values('${nama}',${umur},'${alamat}')`)
    res.json('Data berhasil di tambah')
  } catch (error) {
    // jalan ketika ada error
    console.log(error)
    res.status(422).json('error, please check log')
  }
})

// put mengedit data
app.put('/:id', async(req, res)=>{
  try {
    const {nama, umur, alamat} = req.body
    const id = req.params.id
    await db.query(`update users set nama='${nama}', umur=${umur}, alamat='${alamat}' where id=${id}`)
    res.json('data berhasil diubah')
  } catch (error) {
    // jalan ketika ada error
    console.log(error)
    res.status(422).json('error, please check log')
  }
})

// delete data
app.delete('/:id',async(req, res)=>{
  try {
    const id = req.params.id
    await db.query(`delete from users where id=${id}`)
    res.json('Data terhapus')
  } catch (error) {
    // jalan ketika ada error
    console.log(error)
    res.status(422).json('error, please check log')
  }
})

app.listen(port,()=>console.log('localhost:3001'))