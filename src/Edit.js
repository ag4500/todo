import React from 'react'
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
export default class Edit extends React.Component{
  render(){
      const items=this.props.a
      const list=items.map((item)=>{
          return  <div key={item.id} className="container my-5" >
          <div className='p-3 text-center bg-light'>
              <h1 className='mb-1'>Update ToDo</h1>
          </div>
          <InputGroup className="p-5 -3 ">
            <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
            <FormControl
              type="text"
              name="title"
              id={item.id}
              value={item.title}
              onChange={this.props.updateNow}
            />
            <InputGroup.Text id="basic-addon1">Description</InputGroup.Text>
            <FormControl
              type="text"
              name="desc"
              id={item.id}
              value={item.desc}
              onChange={this.props.updateNow}
            />
            <Button
              variant="info"
              type="submit"
              onClick={this.props.show}
            >
              Update Now
            </Button>
          </InputGroup>
        </div>
      })
      return(
          <>
          <div>{list}</div>
          </>
      )
  }
}
/*
import React from 'react'
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
export default class Edit extends React.Component{
  render(){
      const items=this.props.a
      const list=items.map((item)=>{
          return  <div key={item.id} className="container my-5" >
          <div className='p-3 text-center bg-light'>
              <h1 className='mb-1'>Update ToDo</h1>
          </div>
          <InputGroup className="p-5 -3 ">
            <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
            <FormControl
              type="text"
              name="title"
              id={item.id}
              value={item.title}
              onChange={(event)=>{this.props.updateNow(event.target.value,item.id)}}
            />
            <InputGroup.Text id="basic-addon1">Description</InputGroup.Text>
            <FormControl
              type="text"
              name="desc"
              id={item.id}
              value={item.desc}
              onChange={(event)=>{this.props.updateNow(event.target.value,item.id)}}
            />
            <Button
              variant="info"
              type="submit"
              onClick={this.props.show}
            >
              Update Now
            </Button>
          </InputGroup>
        </div>
      })
      return(
          <>
          <div>{list}</div>
          </>
      )
  }
}
*/