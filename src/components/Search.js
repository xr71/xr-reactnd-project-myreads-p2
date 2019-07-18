import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from '../BooksAPI';
import Book from './Book';
import ReactAutocomplete from 'react-autocomplete';

class Search extends Component {

  constructor(props) {
    super(props);

  }

  state = {
    query: '',
    resultBooks: []
  }

  performSearch = (q) => {
    // console.log(q);
    // BooksAPI.search(q).then((b) => console.log(b));
    BooksAPI.search(q).then(
      (books) => {
        books.map(book => (
          this.props.booksOnShelf.filter(
            (b) => b.id === book.id).map(
              b => book.shelf = b.shelf
            )
          )
        )
        
        this.setState({
          resultBooks: books
        })
      }
    )
  }

  searchterms = [
      {label: 'Android'},
      {label: 'Art'},
      {label: 'Artificial Intelligence'},
      {label: 'Astronomy'},
      {label: 'Austen'},
      {label: 'Baseball'},
      {label: 'Basketball'},
      {label: 'Bhagat'},
      {label: 'Biography'},
      {label: 'Brief'},
      {label: 'Business'},
      {label: 'Camus'},
      {label: 'Cervantes'},
      {label: 'Christie'},
      {label: 'Classics'},
      {label: 'Comics'},
      {label: 'Cook'},
      {label: 'Cricket'},
      {label: 'Cycling'},
      {label: 'Desai'},
      {label: 'Design'},
      {label: 'Development'},
      {label: 'Digital Marketing'},
      {label: 'Drama'},
      {label: 'Drawing'},
      {label: 'Dumas'},
      {label: 'Education'},
      {label: 'Everything'},
      {label: 'Fantasy'},
      {label: 'Film'},
      {label: 'Finance'},
      {label: 'First'},
      {label: 'Fitness'},
      {label: 'Football'},
      {label: 'Future'},
      {label: 'Games'},
      {label: 'Gandhi'},
      {label: 'Homer'},
      {label: 'Horror'},
      {label: 'Hugo'},
      {label: 'Ibsen'},
      {label: 'Journey'},
      {label: 'Kafka'},
      {label: 'King'},
      {label: 'Lahiri'},
      {label: 'Larsson'},
      {label: 'Learn'},
      {label: 'Literary Fiction'},
      {label: 'Make'},
      {label: 'Manage'},
      {label: 'Marquez'},
      {label: 'Money'},
      {label: 'Mystery'},
      {label: 'Negotiate'},
      {label: 'Painting'},
      {label: 'Philosophy'},
      {label: 'Photography'},
      {label: 'Poetry'},
      {label: 'Production'},
      {label: 'Programming'},
      {label: 'React'},
      {label: 'Redux'},
      {label: 'River'},
      {label: 'Robotics'},
      {label: 'Rowling'},
      {label: 'Satire'},
      {label: 'Science Fiction'},
      {label: 'Shakespeare'},
      {label: 'Singh'},
      {label: 'Swimming'},
      {label: 'Tale'},
      {label: 'Thrun'},
      {label: 'Time'},
      {label: 'Tolstoy'},
      {label: 'Travel'},
      {label: 'Ultimate'},
      {label: 'Virtual Reality'},
      {label: 'Web Development'},
      {label: 'iOS'},
  ]
  

  render() {
    // const { booksOnShelf } = this.props;
    // const booksOnShelfId = booksOnShelf.map((b) => b.id);

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>

          <div className="search-books-input-wrapper">
            <ReactAutocomplete
              value={ this.state.query }
              inputProps={{ placeholder: 'Search by Title or by Author' }}
              wrapperStyle={{ display: 'inline' }}
              items={this.searchterms}
              getItemValue={ item => item.label }
              shouldItemRender={ (item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1 }
              onChange={(event, value) => this.setState({ query: value }) }
              onSelect={ value => {
                this.setState({ query: value });
                this.performSearch(value);
              }}
              renderItem={ (item, highlighted) => (
                <div
                  key={item.label}
                  style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
                >
                  { item.label }
                </div>
              )}
            />
          </div>
        </div>

        <div className="search-books-results">
          <div className="results">
            <ol className="books-grid">
              { this.state.resultBooks.map((book) => (
                <li key={ book.id }>
                  <Book title={book.title} authors={ book.authors } 
                      thumbnail={ book.imageLinks ? 
                      book.imageLinks.thumbnail : "" } 
                      updateShelf = { this.props.updateShelf }
                      book={ book } />
                </li>
              )) }
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;