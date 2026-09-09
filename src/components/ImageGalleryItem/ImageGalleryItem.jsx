import React from "react";
import { Item } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({img}) =>{
    return (
        <Item>
            <img src={img} alt="" />
        </Item>
    )
}