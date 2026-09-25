import React, { Component } from "react";

import { SearchBar }    from 'components/Search';
import { Gallery }      from 'components/ImageGallery';
import { toGet }        from "components/Services";
import { Loader }       from 'components/Loader';
import { Button }       from 'components/Button';

export class Finder extends Component {
    state = {
                page:    1,
                query:   '',
                arr:    {
                    hits: []
                } ,
                spinner: false,
                button: false
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
            prevState.page  !== this.state.page
            )  
            {
            toGet(this.state)
            .then(response =>{
                console.log(response.data)
                this.setState(prevState =>({
                    arr: {
                            ...response.data,
                        hits: [
                            ...(prevState.arr.hits || []),
                            ...response.data.hits
                        ]
                    },
                    spinner: false,
                    button: response.data.hits.length > 0
                    && 
                    prevState.page * 12 < response.data.totalHits
                
                }),
                // () => console.log('this.state.arr:', this.state.arr)
                () => console.log('this.state.arr.hits:', this.state.arr.hits)
                )
            }).catch(error =>{
                console.log(error);
                this.setState({
                spinner: false
                });
            })
        }
    }

    toDo = (query) => {
                this.setState({query, spinner: true, page: 1, arr: { hits: []}})
            }

    toPlusOne = () =>{
        this.setState((prevState) => ({
            page: prevState.page + 1,
            spinner: true
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

                {
                this.state.button
                &&
                <Button clickTo = {this.toPlusOne}/>
                }
                
            </>
        )
    }
} 