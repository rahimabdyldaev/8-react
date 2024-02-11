import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import fetchAllBooks from "../../Store/Reducers/booklistCreator";
import BooklistItem from './BooklistItem'
import { addToCart } from "../../Store/Reducers/cartCreator";

const Booklist = () => {
  const { books, booksStatus, booksError } = useSelector((state) => state.booklist);
  const dispatch = useDispatch();
  const onAddToCart = (id) => dispatch(addToCart(id))

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, []);

  const booksCases = {
    pending: 'loading...',
    fulfilled: books?.map((book) => (
      <BooklistItem key={`books-item-${book.id}`} book={book} addToCart={(id) => console.log(id)} />)),
    rejected: booksError,
  };
  return (
    <ul>{booksCases[booksStatus]}</ul>
  )
}
export default Booklist;