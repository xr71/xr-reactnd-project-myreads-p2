import React, { Component } from "react";
import ChangeShelf from './ChangeShelf';

class Book extends Component {
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
            style={ { width:128, height:193, 
              backgroundImage: `url(${this.props.thumbnail})`
            } }
          ></div>
          <div className="book-shelf-changer">
            <ChangeShelf updateShelf={ this.props.updateShelf } book={ this.props.book }/>
          </div>
        </div>

        <div className="book-title">{ this.props.title }</div>
        <div className="book-authors">{ this.props.authors }</div>
      </div>
    )
  }
}

export default Book;