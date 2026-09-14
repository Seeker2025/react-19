import { Overlay } from './Modal.styled'

import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ largeImageURL, tags }) =>{

    return createPortal(
        <Overlay>
            <Modal>
                <img src={largeImageURL} alt={tags}/>
            </Modal>
        </Overlay>,

        modalRoot
    )

}