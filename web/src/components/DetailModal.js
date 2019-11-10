import React,{Component} from 'react'
import {FormControl, Button, Modal} from 'react-bootstrap'

class DetailModal extends Component{
  render(){
    const {show, onHide} = this.props
    const {valueName, valueAge, valueAddr} = this.props
    const {onChangeAge, onChangeName, onChangeAddr} =this.props
    const {onDelete, onSave} = this.props
    return(
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl 
          value={valueName} 
          onChange={onChangeName} 
          style={{marginBottom:10}} 
          placeholder='Nama'
          />
          <FormControl 
          value={valueAge} 
          onChange={onChangeAge} 
          style={{marginBottom:10}} 
          placeholder='Umur'
          />
          <FormControl 
          value={valueAddr} 
          onChange={onChangeAddr} 
          style={{marginBottom:10}} 
          placeholder='Alamat'
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={onDelete}>
            Delete
          </Button>
          <Button variant="primary" onClick={onSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default DetailModal