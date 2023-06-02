import { Button, Form, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Grid } from '@mui/material';
import { useState } from 'react';

const defaultData = {
  First: '',
  Last: '',
  Email: '',
  Subject: '',
  Message: '',
}

function App() {
  const [data, setdata] = useState([]);
  const [newData, setnewData] = useState([])

  const editData = (Email) => {
    setdata(newData);
  }

  const deleteData = (Email) => {
    setnewData(defaultData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    dataChange(name, value)
  }

  const dataChange = (name, value) => {
    setdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(data);
  };

  const handleSubmit = (event) => {
    if (data.First && data.Last && data.Email) {
      setnewData(data);
      setdata(defaultData);
    } else {
      alert('Plses Fill All requried fields!');
    }

  }

  return (
    <div className="App">
      <Grid container>
        <Grid item xs={8} sm={12} md={6}>
          <div className="card">
            <div className="section">
              <div name="registration" class="registartion-form">
                <table>
                  <tr>
                    <div style={{ display: 'flex' }}>
                      <td><input type="text" name="First" id="First" placeholder="First Name*" value={data.First} onChange={handleChange} className='col-25' />
                        <input type="text" name="Last" id="Last" placeholder="Last Name*" required value={data.Last} onChange={handleChange} className='col-25' /></td>
                    </div>
                  </tr>
                  <tr>
                    <td><input type="text" name="Email" id="Email" placeholder="Email*" required value={data.Email} onChange={handleChange} className='col-75' /></td>
                  </tr>
                  <tr>
                    <td><input type="text" name="Subject" id="Subject" placeholder="Message Subject" value={data.Subject} onChange={handleChange} className='col-75' /></td>
                  </tr>
                  <tr>
                    <td><textarea type="text" name="Message" id="Message" placeholder="Drop Your Message Here" value={data.Message} onChange={handleChange} className='col-75' style={{ height: '100px' }} /></td>
                  </tr>
                  <tr>
                    <td><button type="text" class="button button1" onClick={handleSubmit}>SEND</button></td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={8} sm={12} md={6}>
          <div className="card">
            <div className="section" style={{ justifyContent: 'center' }}>
              <table class="table table-bordered" border={0}>
                <tbody>
                  <tr>
                    <th scope="row">First Name:</th>
                    <td style={{ width: '300px' }}>{newData.First}</td>
                  </tr>
                  <tr>
                    <th scope="row">Last Name:</th>
                    <td>{newData.Last}</td>
                  </tr>
                  <tr>
                    <th scope="row">Email:</th>
                    <td >{newData.Email}</td>
                  </tr>
                  <tr>
                    <th scope="row">Subject:</th>
                    <td>{newData.Subject}</td>
                  </tr>
                  <tr>
                    <th scope="row">Message:</th>
                    <td>{newData.Message}</td>
                  </tr>
                  {newData.First &&
                    <tr>
                      <td style={{ display: 'flex', alignItems: 'centre' }}>
                        <button type="text" class="button button2" onClick={editData}>EDIT</button>
                        <button type="text" class="button button2" onClick={deleteData}>DELETE</button>
                      </td>
                    </tr>}
                </tbody>
              </table>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;


