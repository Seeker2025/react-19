import React, { Component } from "react";

import { SearchBar } from 'components/Search';
import { Gallery } from 'components/ImageGallery';
import { toGet } from "components/Services";

export class Finder extends Component {
    state = {
        page: 1,
        query: 'cat',
        arr: [],
    };

    componentDidMount(){
        toGet(this.state)
        .then(responce =>{
            console.log(responce.data)
            this.setState({arr: responce.data},
                 console.log('this.state.arr:', this.state.arr)
            )
        })
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.query !== this.state.query){
            
        }
    }

    toSubmit = (query)=>{
                this.setState({query})
            }

    render(){
        return (
            <>
                <SearchBar toSubmit = {this.toSubmit}/>
                <Gallery arr ={this.state.arr}/>
                <p>Text text</p>
            </>
        )
    }
} 