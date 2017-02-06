import React, { Component } from 'react';
// Need connect fn from react-redux lib so that
import { connect } from 'react-redux';

// We changed BookList from a component to a container because it cares about Redux state change
// and needs the data from it (BookList is the most parent component that needs access to the state, not 'App')
class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      // A react key just has to be any unique value from that piece of data
      return <li key={book.title} className="list-group-item">{book.title}</li>
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

// Take the application's whole state object and
// whatever is returned from this function will show up as 'props'
// inside of BookList and accessed by 'this.props.whateverPropertyYouCallItBelow'
function mapStateToProps(state) {
  // If our App state ever changes, this entire container will re-render
  return {
    books: state.books
  };
}

// Must use react-redux 'connect' fn to get access to container elsewhere in app
export default connect(mapStateToProps)(BookList);
