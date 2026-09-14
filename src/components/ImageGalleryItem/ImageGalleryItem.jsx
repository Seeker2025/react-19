import React from "react";
import { Item } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({img, tags, onClick}) =>{
    return (
        <Item onClick={onClick}>
            <img src={img} alt={tags} />
        </Item>
    )
}