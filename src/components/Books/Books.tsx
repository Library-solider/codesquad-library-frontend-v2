import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../modules/index";
import getBooksThunk from "../../modules/books/thunks";

import { BooksWrapper, BooksContainer } from "./Books.element";

import Loading from "../Loading/Loading";
import { IBookCard } from "../../api/books";
import BookCard from "../BookCard/BookCard";

function Books() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector(
    (state: RootState) => state.books
  );

  const currentPathname = history.location.pathname;

  useEffect(() => {
    dispatch(getBooksThunk(process.env.REACT_APP_DB_HOST + currentPathname));
  }, [dispatch, currentPathname]);

  return (
    <BooksWrapper className="he">
      <BooksContainer>
        {loading && <Loading />}
        {error && <div>Error !</div>}
        {data &&
          data.data.books.map((el: IBookCard) => {
            return (
              <div className="book-card">
                <BookCard
                  key={el.id}
                  bookId={el.id}
                  imageUrl={el.imageUrl}
                  title={el.title}
                  author={el.author}
                />
              </div>
            );
          })}
      </BooksContainer>
    </BooksWrapper>
  );
}

export default Books;
