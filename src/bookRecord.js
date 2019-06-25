import React,{ useState, useEffect } from 'react';
import JsonData from './data.json';
import {Table, Button} from 'react-bootstrap';
import ReactModal from './reactModal';

function BookRecord(props) {
  console.log("hi i am sujeet");

    let obj = {}
    const fs = require('browserify-fs');
    fs.readFile("./data.json", "utf-8", function(err, data) {
      if (err) throw err;
      data = JSON.parse(data);
      // console.log(data)
      Object.values(data).forEach( (x) =>{
        obj[x.id] = x;
      });
    });
    // console.log(JsonData)
    // JsonData.forEach( (x) =>{
    //   obj[x.id] = x;
    // });
    const [recordsObj, setRecordobj] = useState(obj);
    const [openModal, setOpenModal] = useState(false);
    const [formData , setFormData] = useState({
                                      "id": '',
                                      "name": '',
                                      "category": '',
                                      "description": ''
                                    });


  const deleteRecord = (bookId) => {
    const data = recordsObj;
    delete data[bookId];
    const fs = require('browserify-fs');
    fs.writeFile("./data.json", JSON.stringify(data, null, 4), function(err) {
        if (err) throw err;
        console.log("fgd")
    });
    console.log(data)
    setRecordobj(data);
  }

  const editRecord = (id) => {
    setOpenModal(true);
    setFormData(recordsObj[id]);
  }

  const closeModal = (close) => {
    setOpenModal(close);
  }

  const changeformData = (userchangedData) =>{
    const ob = recordsObj;
    ob[userchangedData.id] = userchangedData;
    let data = Object.values(ob);
    const fs = require('browserify-fs');
    fs.writeFile("/data.json", JSON.stringify(data, null, 4), function(err) {
        if (err) throw err;
        console.log("fgd")
      });
  setRecordobj(ob);
  setOpenModal(true);
  }

  return(
    <div>
      {
        !openModal && Object.values(recordsObj).length > 0 &&
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>DISCRIPTION</th>
              <th>CATAGORY </th>
            </tr>
          </thead>
          <tbody>
            {
              Object.values(recordsObj).map(book => {
                return (
                  <tr key={book.id}>
                    <td>{book.id}</td>
                    <td>{book.name}</td>
                    <td>{book.description}</td>
                    <td>{book.category}</td>
                    <Button variant="warning" type="button" onClick={() => editRecord(book.id)} name="button" >EDIT</Button>
                    <Button variant="danger" type="button" name="button" onClick={() => deleteRecord(book.id)}>DELETE</Button>
                  </tr>
                );
              })
            }
          </tbody>
        </Table>
      }
      {
        openModal &&
        <ReactModal book={formData} changeformData= {changeformData} closeModal={closeModal}/>
      }
    </div>
  );
}

export default BookRecord;
