import React,{Component} from 'react'
import {Button, Table} from 'react-bootstrap'

class DataTable extends Component {
  render(){
    const {data, onClick} = this.props
    return(
      <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Nama</th>
              <th>Umur</th>
              <th>Alamat</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           {data.map((item, index)=>(
             <tr key={index}>
              <td>{index+1}</td>
              <td>{item.nama}</td>
              <td>{item.umur}</td>
              <td>{item.alamat}</td>
              <td style={{width:50}}>
                <Button variant='warning' onClick={()=>onClick(item)}>Edit/Delete</Button>
              </td>
           </tr>
           ))}
          </tbody>
        </Table>
    )
  }
}

export default DataTable