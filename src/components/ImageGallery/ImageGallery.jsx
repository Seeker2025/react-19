import React, { Component } from "react";

export class Gallery extends Component {
    state ={

    };

    render(){
        const { arr } = this.props;
        return (
            <>
                <ul >
                    {
                    arr.hits?.map((itm) =>{
                        return <li key={itm.id}>{itm.pageURL}</li>
                    })
                    }
                </ul>
            </>
        )
    }

}