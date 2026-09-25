import React, { Component } from "react";
import PropTypes from "prop-types";

import { Modal } from "components/Modal";

import { Ul } from './ImageGallery.styled';

import { ImageGalleryItem } from "components/ImageGalleryItem";

export class Gallery extends Component {
    state = {
        modal:   false,
        itm:     null,
    };

    toggleModal = () => {
        this.setState((prevState) =>({
            modal: !prevState.modal
        }),
        ()=>console.log(this.state.modal))
    }

    getImg = ({ id, webformatURL, largeImageURL, tags }) => {
        this.setState({
            itm: { id, webformatURL, largeImageURL, tags},
            modal: true,
        },
        () => console.log(this.state.itm)
        )

    }

    render(){
        const { arr } = this.props;
        return (
            <>  
                <Ul >
                    {
                    arr.hits?.map((itm) =>{
                        return <li key = {itm.id}>
                                    <ImageGalleryItem
                                    img  = {itm.webformatURL}
                                    tags = {itm.tags}
                                    onClick = {()=>this.getImg(itm)} 
                                    >   
                                    </ImageGalleryItem>
                               </li>
                    })
                    }
                </Ul>

                    {
                        this.state.modal
                        &&
                        <Modal 
                        itm     = {this.state.itm}
                        onClose = {this.toggleModal}
                        />
                    }

            </>
        )
    }

}

// const arr = {
//     hits: [
//         {
//             id: number,
//             webformatURL: string,
//             tags: string,
//             largeImageURL: string,
//         },
//     ],
// };

Gallery.propTypes = {
    arr: PropTypes.shape({
    hits: PropTypes.arrayOf(
        PropTypes.shape({

            id:PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired

        }).isRequired
    ).isRequired
    }).isRequired
}