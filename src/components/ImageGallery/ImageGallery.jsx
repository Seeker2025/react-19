import React, { Component } from "react";

import { Ul } from './ImageGallery.styled';

import { ImageGalleryItem } from "components/ImageGalleryItem";

export class Gallery extends Component {
    state ={

    };

    render(){
        const { arr } = this.props;
        return (
            <>
                <Ul >
                    {
                    arr.hits?.map((itm) =>{
                        return <li key = {itm.id}>
                                    <ImageGalleryItem
                                    img = {itm.webformatURL}>
                                    </ImageGalleryItem>
                                </li>
                    })
                    }
                </Ul>
            </>
        )
    }

}