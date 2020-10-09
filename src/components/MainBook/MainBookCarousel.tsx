import React from "react";
import Slider from "react-slick";

import { MainCarouselWrapper } from "./MainBook.element";
import { mainBookSettings } from "../../constants/carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BookCard from "../BookCard/BookCard";
import { IMainBookCarousel } from "../../api/mainBook";

const MainBookCarousel = ({ categoryTitle, books }: IMainBookCarousel) => {
  return (
    <MainCarouselWrapper>
      <h1 className="carousel-title">{categoryTitle}</h1>
      <Slider {...mainBookSettings}>
        {books.map((el) => {
          return (
            <BookCard
              key={el.id}
              bookId={el.id}
              imageUrl={el.imageUrl}
              title={el.title}
              author={el.author}
            />
          );
        })}
      </Slider>
    </MainCarouselWrapper>
  );
};

export default MainBookCarousel;
