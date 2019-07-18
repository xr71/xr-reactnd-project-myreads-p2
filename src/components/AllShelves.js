import React, { Component } from "react";
import BookShelf from './BookShelf';
import OpenSearch from './OpenSearch';

class AllShelves extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf books={this.props.books} 
            shelf="currentlyReading" 
            updateShelf={this.props.updateShelf} />

          <BookShelf books={this.props.books} 
            shelf="wantToRead" 
            updateShelf={this.props.updateShelf} />

          <BookShelf books={this.props.books} 
            shelf="read" 
            updateShelf={this.props.updateShelf} />
        </div>
        <OpenSearch />
      </div>
      
      
    )
  }
}

export default AllShelves;