import React,{ useState, useEffect } from "react";
import ReactModal from './reactModal';
import 'bootstrap/dist/css/bootstrap.css';
import JsonData from './data.json';
function Add(){
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
  // JsonData.forEach( (x) =>{
  //   obj[x.id] = x;
  // });
  const [recordsObj, setRecordobj] = useState(obj);
  const [formData, setFormData] = useState({
                                            id: '',
                                            name: '',
                                            category: '',
                                            description: ''
                                          });
  const [openModal, setOpenModal] = useState(true);

  const changeformData = (userchangedData) =>{
    const data = recordsObj;
    data[userchangedData.id] = userchangedData;
    const fs = require('browserify-fs');
    fs.writeFile("./data.json", JSON.stringify(data, null, 4), function(err) {
        if (err) throw err;
        console.log("fgd")
    });
    console.log(data)
    setFormData(userchangedData);
  }

  const closeModal = (close) => {
    setOpenModal(close);
  }

    console.log(openModal);
    return(
      <div>
        {
          openModal &&
          <ReactModal book = {formData} changeformData= {changeformData} closeModal={closeModal}/>
        }
      </div>
    );
}

export default Add;
