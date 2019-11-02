import React from 'react';
// import React, { Component } from "react";
// import API from '../utils/API';
import axios from 'axios'
// import Jumbotron from "../components/Jumbotron";

//  
// class Search extends Component
export default class Saved extends React.Component {
    state = {
        savedBooks: []

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
                



            </div>
        )
    }
}

