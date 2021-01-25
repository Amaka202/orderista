import React from 'react'
import { Modal, Button } from 'rsuite';


function AddMenuModal({isOpen}) {
    return (
        <div>
            <Modal show={isOpen} onHide={!isOpen}>
                <Modal.Header>
                    <Modal.Title>Modal Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h1>hey</h1>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={!isOpen} appearance="primary">
                    Ok
                    </Button>
                    <Button onClick={!isOpen} appearance="subtle">
                    Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddMenuModal
