import React,{Component} from 'react'
import {InputGroup, FormControl, Container, Button, Table, Modal} from 'react-bootstrap'
import Axios from 'axios'
import HeaderInput from './components/HeaderInput'
import DataTable from './components/Table'
import DetailModal from './components/DetailModal'

const url = 'http://127.0.0.1:3001'

class App extends Component{
  state = {
    data:[],
    showModal:false,
    nama:'',
    umur:'',
    alamat:'',
    // untuk detail
    dNama:'',
    dUmur:'',
    dAlamat:'',
    id:''
  }
  constructor(props){
    super(props)
    // this.getDataFromApi()
  }
  // jalan ketika setelah render
  componentDidMount(){
    this.getDataFromApi()
  }
  //mendapatkan data dari api
  getDataFromApi = async() => {
    try {
    // Axios.get(url)
    // .then(item => console.log(item))
    // .catch(error=> console.log({error}))
    const resData = await Axios.get(url)
    this.setState({data:resData.data})
    } catch (error) {
      console.log({error})
      alert('terjadi kesalahan')
    }
  }

  postDataFromApi = async()=>{
    try {
      if(!isNaN(this.state.umur)){
        await Axios.post(url,{
          nama:this.state.nama,
          umur:Number(this.state.umur),
          alamat:this.state.alamat
        })
        alert('Data Berhasil Ditambah')
      } else {
        alert('Umur Harus Nomor')
      }
      this.getDataFromApi()
    } catch (error) {
      console.log({error})
      alert('terjadi kesalahan')
    }
  }
  editDataApi = async()=>{
    const {id, dUmur, dAlamat, dNama} = this.state
    try {
      if(!isNaN(dUmur)){
        await Axios.put(`${url}/${id}`,{
          nama:dNama,
          umur:Number(dUmur),
          alamat:dAlamat
        })
        alert('Data Berhasil Diubah')
        this.setState({showModal:false})
        this.getDataFromApi()
      } else {
        alert('Umur Harus Nomor')
      }
    } catch (error) {
      console.log({error})
      alert('terjadi kesalahan')
    }
  }

  deleteDataApi = async() => {
    try {
      const {id} = this.state
      await Axios.delete(`${url}/${id}`)
      alert('Data Berhasil dihapus')
      this.setState({showModal:false})
      this.getDataFromApi()
    } catch (error) {
      console.log({error})
      alert('terjadi kesalahan')
    }
  }

  showModal = (item) => {
    const {id, umur, alamat, nama} = item
    this.setState({showModal:true, id:id, dUmur:umur, dAlamat:alamat, dNama:nama})
    console.log(this.state)
  }

  hideModal = () => {
    this.setState({showModal:false})
  }

  render(){
    return (
      <Container>
        {/* Tampilan From */}
        <HeaderInput
          onChangeName={(event)=>this.setState({nama:event.target.value})}
          onChangeAge={(event)=>this.setState({umur:event.target.value})}
          onChangeAddr={(event)=>this.setState({alamat:event.target.value})}
          onClick={()=>this.postDataFromApi()}
        />
        {/* Tampilan Table */}
        <DataTable
          data={this.state.data}
          onClick={(item)=>this.showModal(item)}
        />
        {/* Modal */}
        <DetailModal
          show={this.state.showModal}
          onHide={()=>this.hideModal()}
          valueName={this.state.dNama}
          valueAge={this.state.dUmur}
          valueAddr={this.state.dAlamat}
          onChangeAge={(event)=>this.setState({dUmur:event.target.value})}
          onChangeName={(event)=>this.setState({dNama:event.target.value})}
          onChangeAddr={(event)=>this.setState({dAlamat:event.target.value})}
          onDelete={()=>this.deleteDataApi()}
          onSave={()=>this.editDataApi()}
        />
      </Container>
    )
  }
}

export default App