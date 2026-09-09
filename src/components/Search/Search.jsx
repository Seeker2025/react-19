import React, { Component } from "react";
import {    HeaderSearch,
            Form,
            ButtonForm,
            InputForm
                            } from "./Search.styled";

export class SearchBar extends Component {
    state = {
        input: '',
    };

    handleChange = e =>{
        this.setState({ input: e.target.value})
    }

    handleSubmit = () =>{
        this.props.toSubmit(this.state.input)
    }

    render(){
        return (
            <HeaderSearch>
                <Form onSubmit = {this.handleSubmit}>
                    <ButtonForm type="submit">
                    <span>Search</span>
                    </ButtonForm>

                    <InputForm
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value = {this.state.input}
                    onChange = {this.handleChange}
                    />

                </Form>
            </HeaderSearch>
        )
    }
}