import React, { Component } from "react";

import { SearchBar } from 'components/Search';
import { Gallery } from 'components/ImageGallery';

export class Finder extends Component {
    state = {

    };

    render(){
        return (
            <>
                <SearchBar/>
                <Gallery/>
                <p>Text text</p>
            </>
        )
    }
} 