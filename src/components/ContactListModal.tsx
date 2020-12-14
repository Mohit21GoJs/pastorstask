import React from 'react';
import ButtonA from './ButtonA';
import ButtonB from './ButtonB';
import { Modal, Form, Button } from 'react-bootstrap';

export const ContactListModal: React.FC<{id: string, handleClose: () => void}> = ({ id, handleClose }: {id: string, handleClose: Function}) => (<Modal
    show
    onHide={handleClose}
    backdrop="static"
    keyboard={false}
    >
    <Modal.Header className="modal-header">
    <ButtonA>All Contacts</ButtonA>{' '}
    <ButtonB>US Contacts</ButtonB>{' '}
    <Button variant="info" size="lg" className="button-c" onClick={() => handleClose()}>Close</Button>
    </Modal.Header>
    <Modal.Body>
    
    </Modal.Body>
    <Modal.Footer className="modal-footer">
      <Form.Check type="checkbox" label="Only even" />
    </Modal.Footer>
    </Modal>)

export default ContactListModal;