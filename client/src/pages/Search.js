import React from 'react';
import { Redirect } from 'react-router-dom'

import axios from 'axios'

export default class Search extends React.Component {
    state = {
        books: [],

        book: "",
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



    getGoogleBooks = () => {
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.book, {

        })
            .then(res => {

                this.setState({ books: res.data.items })


            })
            .catch(err => console.log(err));
    }


    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });

    }


    render() {
        return (
            <div style={{ textAlign: "center", background: "yellow", marginLeft: "300px", marginRight: "300px", padding: "40px" }}>

                <h2>Search by title:</h2>
                <div>
                    {this.renderRedirect()}
                    <button style={{ padding: "10px", float: "left" }} onClick={this.setRedirect}>See my books</button>
                </div>
                <form className="form">
                    <input
                        style={{ padding: "12px", borderRadius: "5px", marginRight: "20px" }}
                        value={this.state.book}
                        name="book"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Type your book here..."></input>



                    <button style={{ padding: "10px", borderRadius: "5px" }} type="button" onClick={this.getGoogleBooks}>Submit</button>
                </form>
                

                {/* <Jumbotron> */}

                {
                    this.state.books.map((book, index) => <Book key={index + "-book"} book={book} />)
                }
                {/* </Jumbotron> */}



            </div>
        )
    }
}

function Book({ book }) {
    return (
        <div>
            <h4>{book.volumeInfo.title}</h4>
            <p>{book.volumeInfo.authors}</p>
            {book.volumeInfo.imageLinks &&
                <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} />
            }
            <p>{book.volumeInfo.description}</p>
            <a href={book.volumeInfo.infoLink}><button style={{ padding: "20px" }}>More info</button></a>
            <hr></hr>

        </div>
    )

}
// export default Search;