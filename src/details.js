import React from "react";
import Forms from "./App";
import Show from "./show";
import Edit from "./Edit";
export default class Detail extends React.Component {
  state = {
    arr: [],
    narr: [],
    edit: false,
    data: {
      title: "",
      desc: "",
      complete: "",
      id: "",
    },
  };
  onChange = (i) => {
    const { name, value } = i.target;
    const id = Math.random();
    const data = { ...this.state.data, [name]: value, id };
    this.setState({ data });
  };
  addItem = (i) => {
    i.preventDefault();
    const n = this.state.data;
    if (n.title !== "") {
      const nd = [...this.state.arr, n];
      this.setState({
        arr: nd,
        data: {
          title: "",
          desc: "",
          id: "",
        },
      });
    }
  };
  Update = (id) => {
    let items = [...this.state.arr];
    const it = items.filter((i) => id === i.id);
    this.setState({
      edit: true,
      arr: it,
    });
  };
  updateNow = (e) => {
    const items = [...this.state.arr];
    const { name, value } = e.target;
    for (let i in items) {
      items[i] = {
        ...this.state.arr[i],
        [name]: value,
      };
    }
    this.setState({
      arr: items,
    });
  };

  Delete = (id) => {
    const filteritems = this.state.arr.filter((i) => i.id !== id);
    this.setState({
      arr: filteritems,
    });
  };
  show = () => {
    const items = [...this.state.arr];
    this.setState({
      arr: items,
      edit: false,
    });
  };
  HasComplete = (value, id) => {
    if (value) {
      const a = this.state.arr;
      a.map((i) => {
        if (i.id === id) {
          i.complete = value;
        }
        return a;
      });
      this.setState({
        arr: a,
      });
    }
  };

  render() {
    return this.state.edit === false ? (
      <>
        <Forms
          submit={this.addItem}
          value={this.state.data}
          chnge={this.onChange}
        />
        <Show
          a={this.state.arr}
          delete={this.Delete}
          update={this.Update}
          com={this.HasComplete}
        />
      </>
    ) : (
      <Edit
        a={this.state.arr}
        updateNow={this.updateNow}
        t={this.title}
        show={this.show}
      />
    );
  }
}
