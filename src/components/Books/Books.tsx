import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import querystring from "query-string";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../modules/index";
import getBooksThunk from "../../modules/books/thunks";
import useIsMobile from "../../hooks/useResponsive";

import { BooksWrapper, BooksContainer } from "./Books.element";

import { IBookCard } from "../../api/books";
import Loading from "../Loading/Loading";
import BookCard from "../BookCard/BookCard";
import Pagination from "../Pagination/Pagination";

import {
  PER_PAGE,
  SHOW_PAGE_COUNT_DESKTOP,
  SHOW_PAGE_COUNT_MOBILE,
  MIN_PAGINATION,
} from "../../constants/pagination";

function Books() {
  const history = useHistory();

  const dispatch = useDispatch();
  const { loading, error, data } = useSelector(
    (state: RootState) => state.books
  );

  const currentPathname = history.location.pathname;
  const isMobile = useIsMobile();

  const locationSearch = history.location.search;
  const parsedSearchQueries = querystring.parse(locationSearch);
  const currentPage = parsedSearchQueries.page
    ? Number(parsedSearchQueries.page)
    : MIN_PAGINATION;

  useEffect(() => {
    dispatch(
      getBooksThunk(
        process.env.REACT_APP_DB_HOST + currentPathname + locationSearch
      )
    );

    window.scrollTo(0, 0);
  }, [dispatch, locationSearch, currentPathname]);

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
        {data && (
          <Pagination
            totalItem={data.data.bookCount}
            itemPerPage={PER_PAGE}
            showPageCount={
              isMobile ? SHOW_PAGE_COUNT_MOBILE : SHOW_PAGE_COUNT_DESKTOP
            }
            currentPage={Math.max(currentPage, 1)}
          />
        )}
      </BooksContainer>
    </BooksWrapper>
  );
}

export default Books;
