import React from "react";
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
export default class Show extends React.Component {
  render() {
    const items = this.props.a;
    const list = items.map((item, index) => {
      return (
        <div key={index} className="container my-5 ">
          <div className="form-check mx-2">
            <FormControl
              className="form-check-input"
              type="checkbox"
              value={item.complete}
              onChange={(event) => {
                this.props.com(event.target.checked, item.id);
              }}
            ></FormControl>

            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
              <FormControl
                type="text"
                name="title"
                id={item.id}
                value={item.title}
              />
              <InputGroup.Text id="basic-addon1">Description</InputGroup.Text>
              <FormControl
                type="text"
                name="desc"
                id={item.id}
                value={item.desc}
              />

              <Button
                className="mx-2"
                variant="info"
                type="submit"
                onClick={() => this.props.update(item.id)}
              >
                Update
              </Button>
              <Button
                variant="danger"
                type="submit"
                onClick={() => this.props.delete(item.id)}
              >
                Delete
              </Button>
            </InputGroup>
          </div>
        </div>
      );
    });
    return (
      <>
        <div>{list}</div>
      </>
    );
  }
}
