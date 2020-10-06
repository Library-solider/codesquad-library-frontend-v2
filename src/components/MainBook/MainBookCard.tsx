import React from "react";
import { Link } from "react-router-dom";
import { MainBookCardWrapper } from "./MainBook.element";
import { IMainBookCard } from "../../api/mainBook";

function MainBookCard({ bookId, imageUrl, title, author }: IMainBookCard) {
  return (
    <Link to={`/books/${bookId}`}>
      <MainBookCardWrapper>
        <img src={imageUrl} alt="book wrapper" />
        <p className="book-title">{title}</p>
        <p className="book-author">{author}</p>
      </MainBookCardWrapper>
    </Link>
  );
}

export default MainBookCard;
