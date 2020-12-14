import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form } from 'react-bootstrap';
import './App.css';

const ContentModal = ({ id, handleClose }: {id: string, handleClose: Function}) => (<Modal
show
onHide={handleClose}
backdrop="static"
keyboard={false}
>
<Modal.Header className="modal-header">
<Button variant="info" size="lg" className="button-a-color">All Contacts</Button>{' '}
<Button variant="info" size="lg" className="button-b-color">US Contacts</Button>{' '}
<Button variant="info" size="lg" className="button-c" onClick={() => handleClose()}>Close</Button>
</Modal.Header>
<Modal.Body>

</Modal.Body>
<Modal.Footer className="modal-footer">
  <Form.Check type="checkbox" label="Only even" />
</Modal.Footer>
</Modal>)

function App() {
  const [modal, setModal] = useState({
    open: false,
    id: ''
  });
  return (
    <div className="App">
      <div className="buttons-wrapper">
        <Button variant="info" size="lg" className="button-a-color no-hover" onClick={() => setModal(v => ({...v, open: true, id: 'A'}))}>Button A</Button>{' '}
        <hr />
        <Button variant="info" size="lg" className="button-b-color no-hover" onClick={() => setModal(v => ({...v, open: true, id: 'B'}))}>Button B</Button>
      </div>
      {modal.open && <ContentModal id={modal.id} handleClose={() => setModal(v => ({...v, open: false}))} />}
    </div>
  );
}

export default App;
