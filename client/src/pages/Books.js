import React from 'react';
// import API from '../utils/API';
import axios from 'axios'

export default class Books extends React.Component {
    state = {
        books: [],

        book: ""

    }
  

    getGoogleBooks = () => {
        console.log('called function');
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.book, {

        })
            .then(res => {
                  this.setState({books: res.data.items})

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
            <div>

                Search by title:
                <form className="form">
                    <input
                        value={this.state.book}
                        name="book"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Type your book here..."></input>


                    <button type="button" onClick={this.getGoogleBooks}>Submit</button>
                </form>


                {
                    this.state.books.map((book, index) => <Book key={index + "-book"} book={book} />)
                }


            </div>
        )
    }
}

function Book({ book }) {
    return (
        <div>
            <h4>{book.volumeInfo.title}</h4>
            <p>{book.volumeInfo.authors}</p>
            <p>{book.volumeInfo.description}</p>
            <a href={book.volumeInfo.infoLink}><button>More info</button></a>

        </div>
    )
}