import React from "react";
import { Link } from "react-router-dom";
import BookCardWrapper from "./BookCard.element";
import image_ready from "../../assets/images/image-ready.png";
import { IBookCard } from "../../api/bookCard";

function BookCard({ bookId, imageUrl, title, author }: IBookCard) {
  return (
    <Link to={`/books/${bookId}`}>
      <BookCardWrapper>
        <img src={imageUrl ? imageUrl : image_ready} alt="book wrapper" />
        <p className="book-title">{title}</p>
        <p className="book-author">{author}</p>
      </BookCardWrapper>
    </Link>
  );
}

export default BookCard;
