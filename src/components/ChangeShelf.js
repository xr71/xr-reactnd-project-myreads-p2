import React, { Component } from 'react';

class ChangeShelf extends Component {

  render() {
    const { book, updateShelf } = this.props;
    
    // { console.log(updateShelf) }
    
    return (
      <select 
        onChange={
          (event) => updateShelf(book, event.target.value)
        }

        defaultValue={ book.shelf || 'none' }
      >
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    )
  }
}

export default ChangeShelf;