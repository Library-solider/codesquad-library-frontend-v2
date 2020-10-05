import React from "react";
import Slider from "react-slick";
import { RecommendWrapper } from "./Recommend.element";
import recommendData from "../../data/recommend.data";
import RecommendCard from "./RecommendCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ICarouselSetting {
  dots: boolean;
  infinite: boolean;
  autoplay: boolean;
  autoplaySpeed: number;
  slidesToShow: number;
  slidesToScroll: number;
}

const carouselSetting: ICarouselSetting = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function RecommendCarousel() {
  return (
    <RecommendWrapper>
      <Slider {...carouselSetting} className="recommend-carousel">
        {recommendData.map((el) => {
          return (
            <RecommendCard
              key={el.id}
              title={el.title}
              subTitle={el.subTitle}
              image={el.image}
              recommendKeyword={el.recommendKeyword}
              themeColor={el.themeColor}
            />
          );
        })}
      </Slider>
    </RecommendWrapper>
  );
}

export default RecommendCarousel;
