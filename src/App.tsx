import React, {  useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { ContactListModal } from './components/ContactListModal'
import ButtonA from './components/ButtonA';
import ButtonB from './components/ButtonB';
import { changeUrlHash, clearUrlHash } from './utils/url'
import './App.css';

function App() {
  const [modal, setModal] = useState({
    open: false,
    id: ''
  });
  useEffect(() => {
    if(modal.id){
      changeUrlHash(`modal/${modal.id}`);
      if(modal.id === "A"){
        axios.get('https://api.dev.pastorsline.com/api/contacts.json', {
          headers: {
            Authorization: ' Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNzEiLCJleHAiOjE2MDM3ODM0Mzd9.3ievseHtX0t3roGh7nBuNsiaQeSjfiHWyyx_5GlOLXk'
          }
        }).then((res) => {
          console.log(res.data)
        })
        .catch((error) => {
          console.error(error)
        });
      }
    }else{
      clearUrlHash();
    }
  }, [modal.id])
  return (
    <div className="App">
      <div className="buttons-wrapper">
        <ButtonA handleClick={() => setModal(v => ({...v, open: true, id: 'A'}))}>Button A</ButtonA>{' '}
        <hr />
        <ButtonB handleClick={() => setModal(v => ({...v, open: true, id: 'B'}))}>Button B</ButtonB>
      </div>
      {modal.open && <ContactListModal id={modal.id} handleClose={() => setModal(v => ({...v, open: false, id: ''}))} />}
    </div>
  );
}

export default App;
