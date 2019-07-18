import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import AllShelves from './components/AllShelves';
import Search from './components/Search';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    // the returned books array has objects 
    // with key shelf [currentlyReading, wantToRead, read]
    this.refreshBooks()
  }

  refreshBooks = () => {
    BooksAPI.getAll().then(
      (books) => {
        this.setState(() => ({
          books: books
        }))
    })
  }

  // update api takes in book, not bookid
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      // console.log("moved")
      this.refreshBooks()
    })
  }

  render() {
      return (
        <div className="app">
          <Route exact path="/" 
            render={() => (
              <AllShelves 
                books={ this.state.books }
                updateShelf={ this.updateShelf }
              />
            )}
          />

          <Route exact path="/search" 
            render={() => (
              <Search 
                updateShelf = { this.updateShelf }
                booksOnShelf = { this.state.books }
              />
            )}
          />
        </div>
        
      )
  }
}

export default BooksApp;