import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
export default class Forms extends React.Component {
  render() {
    return (
      <div className="container my-5 ">
        <div className='p-3 text-center bg-light'>
                <h1 className='mb-1'>TODO...</h1>
        <Form onSubmit={this.props.submit}>
        <InputGroup className="mb-3 ">
          <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
          <FormControl
            type="text" id="title" name="title" value={this.props.value.title} onChange={this.props.chnge}
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Description</InputGroup.Text>
          <FormControl
            type="text" id="desc" name="desc" value={this.props.value.desc} onChange={this.props.chnge}
            aria-describedby="basic-addon1"
          />
        </InputGroup>
          <Button variant="primary" type="submit" onClick={this.props.d}>
            Add Todo
          </Button>
        </Form>
        </div>
      </div>
    );
  }
}
