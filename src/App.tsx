import React, {  useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchContacts } from './api/contacts';
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
        fetchContacts().then(console.log);
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
