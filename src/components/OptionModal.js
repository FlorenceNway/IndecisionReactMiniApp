import React from 'react';
import Modal from 'react-modal'

const OptionModal = (props) => (
        
        <Modal 
            isOpen={!!props.selectedOption} //if not undefined, it will be true
            onRequestClose={props.handleClearSelectedOption} //when click on background or press esc key
            contentLabel="Selected Option"
        >
            <h3>Selected Option</h3>
            {props.selectedOption && <p>{props.selectedOption}</p>}
            <button onClick={props.handleClearSelectedOption}>Okay</button>
        </Modal>
);


export default OptionModal;