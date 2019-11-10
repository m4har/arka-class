import React,{Component} from 'react'
import {InputGroup, FormControl, Button} from 'react-bootstrap'

class HeaderInput extends Component {
  render(){
    const {onChangeName, onChangeAge, onChangeAddr, onClick} = this.props
    return(
      <InputGroup style={{margin:10}} className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">A</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          onChange={onChangeName}
          style={{marginRight:10}}
          placeholder="Nama"
          aria-label="Nama"
          aria-describedby="basic-addon1"
        />
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">B</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          onChange={onChangeAge}
          style={{marginRight:10}}
          placeholder="Umur"
          aria-label="Umur"
          aria-describedby="basic-addon1"
        />
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">C</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          onChange={onChangeAddr}
          style={{marginRight:10}}
          placeholder="Alamat"
          aria-label="Alamat"
          aria-describedby="basic-addon1"
        />
        <Button onClick={onClick} variant='primary'>ADD</Button>
      </InputGroup>
    )
  }
}
export default HeaderInput