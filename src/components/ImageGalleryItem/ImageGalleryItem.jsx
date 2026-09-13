import React from "react";
import { Item } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({img, tags}) =>{
    return (
        <Item>
            <img src={img} alt={tags} />
        </Item>
    )
}