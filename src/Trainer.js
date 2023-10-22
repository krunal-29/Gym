import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import SearchAppBar from './Searchbar';


export default function FormDialog() {
  const [show, setShow] = React.useState(false);

  const [todo, setTodo] = React.useState([]);
  const [text, setText] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [id, setId] = React.useState(0);
  const [type, setType] = React.useState("Add");
  
 

  const handleClose = () => {
    setShow(false);
    setId("");
    setTitle("");
    setText("");
  };

  const handleAdd = () => {
    if (id) {
      const copy = [...todo];
      const index = copy.findIndex((e) => e.id === id);
      copy[index].title = title;
      copy[index].text = text;
      setTodo([...copy]);
      handleClose();
    } else {
      setTodo([...todo, { id: todo.length + 1, title, text }]);
      setId(todo.length + 1);
      handleClose();
    }
    setTitle("");
    setText("");
  };

  const EditId = (id) => {
    for (let index = id + 1; index < todo.length; index += 1) {
      todo[index].id -= 1;
    }
  };

  return (
    <Container style={{ marginTop: "10px" }}>
      <div className="d-flex justify-content-end">
      <SearchAppBar/>

        <Button className='btn btn-primary mb-3' onClick={() => {
            setShow(true);
            setType("Add");
          }}>
          Add Trainers
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}  centered >
        <Modal.Header closeButton>
          <Modal.Title>Trainer&apos; data</Modal.Title>
        </Modal.Header>
        <form>
        <Modal.Body>
          <span>Trainer&apos; Name</span>
          <input
        autoFocus// eslint-disable-line jsx-a11y/no-autofocus
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            

          />
          <span>Trainer&apos; Status</span>
          <input
            type="text"
            className="form-control"
            value={text}
           
            onChange={(e) => {
              setText(e.target.value);

            }}
          />
        </Modal.Body>
        </form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            {type === "Add" ? "Add Trainer" : "Update Trainer"}
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="table-responsive">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th >ID</th>
              <th >Trainer&apos; name</th>
              <th >Status</th>
              <th >Edit</th>
              <th >Delete</th>
            </tr>
          </thead>
          <tbody>
            {todo.map((ele) => (
              <tr key={ele.id}>
                <td  >{ele.id}</td>
                <td >{ele.title}</td>
                <td >{ele.text}</td>
                <td >
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setShow(true);
                      setTitle(ele.title);
                      setText(ele.text);
                      setId(ele.id);
                      setType("Edit");
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td >
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      const index = todo.findIndex((j) => j.id === ele.id);
                      const arr = [...todo];
                      arr.splice(index, 1);
                      setTodo(arr);
                      EditId(index);
                    }}

                    
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}
