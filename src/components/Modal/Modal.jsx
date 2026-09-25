import PropTypes from 'prop-types';

import { Overlay, ModalWindow, ButtonClose, CrossIcon } from './Modal.styled'

import { createPortal } from "react-dom";


const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ itm, onClose }) =>{

    return createPortal(
        <Overlay>
            <ModalWindow>
                <img src={itm.largeImageURL} alt={itm.tags}/>
            </ModalWindow>

            <ButtonClose type="button" onClick = {onClose}>
                <CrossIcon />
            </ButtonClose>
        </Overlay>,

        modalRoot
    )

}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,

    itm: PropTypes.shape({
        largeImageURL: PropTypes.string.isRequired,
        tags:         PropTypes.string.isRequired,
    }).isRequired
}