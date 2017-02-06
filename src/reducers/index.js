import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

// combineReducers maps the reducer output to the main app state as the property you set it as
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
