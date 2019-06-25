import React,{ useState, useEffect } from 'react';
import {  Button, Form, Modal } from 'react-bootstrap';

  function FillData(props) {
    const [id,setId] = useState(props.book.id);
    const [name,setName] = useState(props.book.name);
    const [description,setDescription] = useState(props.book.description);
    const [category,setCategory] = useState(props.book.category);

  const handleid = e => {
    setId(e.target.value);
  }

  const handlename = e => {
    setName(e.target.value);
  }

  const handlecategory = e =>{
    setCategory(e.target.value);
  }

  const handledescription = e =>{
    setDescription(e.target.value);
  }

  const handlesumbit = e =>{
    const obj ={
      "id": id,
      "name": name,
      "description": description,
      "category":category
    };
    props.changeformData(obj);
    props.closeModal(false)
  }

  return(
    <div>
      <Modal show={true} onHide={props.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>ID : </Form.Label>
                <Form.Control type="text" placeholder="Book ID " value = {id} onChange = {handleid} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Book Name</Form.Label>
              <Form.Control type="text" placeholder="Name of Book" value = {name}
              onChange = {handlename}/>
            </Form.Group>
            <Form.Group controlId="formBasicText">
              <Form.Label>Description :</Form.Label>
              <Form.Control type="text" placeholder="Description" value = {description}
              onChange = {handledescription}/>
            </Form.Group>
            <Form.Group controlId="formBasicText">
              <Form.Label>Category :</Form.Label>
              <Form.Control type="text" placeholder="Category :- like progamming" value = {category}
              onChange = {handlecategory} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handlesumbit}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default FillData;
