import React from 'react';
import { Redirect } from 'react-router-dom'
// import React, { Component } from "react";
// import API from '../utils/API';
import axios from 'axios'
// import Jumbotron from "../components/Jumbotron";

//  
// class Search extends Component
export default class Saved extends React.Component {
    state = {
        savedBooks: [],
        redirect: false

    }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/saved' />
        }
    }




    // addBook = () => {
    //     API.addBook({
    //         title: this.state.title,
    //         author: this.state.author,
    //         description: this.state.description,
    //     }).then(response => {
    //         console.log(response)
    //     })
    // }

    render() {
        return (
            <div style={{ textAlign: "center", background: "yellow", marginLeft: "300px", marginRight: "300px", padding: "40px"}}>

                <h2>My library:</h2>
                <div>
                    {this.renderRedirect()}
                    <button style={{ padding: "10px", float: "left" }} onClick={this.setRedirect}>See my books</button>
                </div>
                



            </div>
        )
    }
}

