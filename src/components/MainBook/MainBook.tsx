import React from "react";
import useFetch from "../../hooks/useFetch";

import { MainBookWrapper } from "./MainBook.element";
import MainBookCarousel from "./MainBookCarousel";
import { IMainResponseData } from "../../api/mainBook";

function MainBook() {
  const requestAPI = process.env.REACT_APP_MAIN_BOOK_API;
  const { response, error } = useFetch(requestAPI, null);

  if (!response) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  return (
    <MainBookWrapper>
      {response.data.map(({ ...el }: IMainResponseData) => {
        return (
          <MainBookCarousel
            key={el.categoryId}
            categoryTitle={el.categoryTitle}
            books={el.books}
          />
        );
      })}
    </MainBookWrapper>
  );
}

export default MainBook;
