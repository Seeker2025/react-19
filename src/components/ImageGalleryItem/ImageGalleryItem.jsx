import React from "react";
import PropTypes from 'prop-types';

import { Item } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({img, tags, onClick}) =>{
    return (
        <Item onClick={onClick}>
            <img src={img} alt={tags} />
        </Item>
    )
}

ImageGalleryItem.propTypes = {
    img:     PropTypes.string.isRequired,
    tags:    PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}