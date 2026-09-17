import React, { Component } from "react";

import { SearchBar }    from 'components/Search';
import { Gallery }      from 'components/ImageGallery';
import { toGet }        from "components/Services";
import { Loader }       from 'components/Loader';
import { Button }       from 'components/Button';

export class Finder extends Component {
    state = {
                page:    1,
                query:   'cat',
                arr:     [],
                spinner: false
    };

    // componentDidMount(){
    //     toGet(this.state)
    //     .then(responce =>{
    //         console.log(responce.data)
    //         this.setState({arr: responce.data},
    //              console.log('this.state.arr:', this.state.arr)
    //         )
    //     })
    // }

    componentDidUpdate(prevProps, prevState){
        if(
            prevState.query !== this.state.query
                        || 
            prevState.page !== this.state.page
            )  
            {
            toGet(this.state)
            .then(responce =>{
                console.log(responce.data)
                this.setState({arr: responce.data, spinner: false},
                () => console.log('this.state.arr:', this.state.arr)
                )
            })
        }
    }

    toDo = (query) => {
                this.setState({query, spinner: true})
            }

    toPlusOne = () =>{
        this.setState((prevState) => ({
            page: prevState.page + 1
        }),
        () => console.log(this.state.page)
        )
    }        

    render(){
        return (
            <>
                <SearchBar toDo = {this.toDo}/>

                {
                this.state.spinner && <Loader/>
                }

                <Gallery arr = {this.state.arr}/>
                {/* <p>Text text</p> */}

                <Button clickTo = {this.toPlusOne}/>
            </>
        )
    }
} 