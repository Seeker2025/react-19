import React, { Component } from "react";
import {    HeaderSearch,
            Form,
            ButtonForm,
            InputForm
                            } from "./Search.styled";

export class SearchBar extends Component {
    state = {

    };

    render(){
        return (
            <HeaderSearch>
                <Form>
                    <ButtonForm type="submit">
                    <span>Search</span>
                    </ButtonForm>

                    <InputForm
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    />
                </Form>
            </HeaderSearch>
        )
    }
}