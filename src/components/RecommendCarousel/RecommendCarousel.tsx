import React from "react";
import Slider from "react-slick";
import { RecommendWrapper } from "./Recommend.element";
import recommendData from "../../data/recommend.data";
import RecommendCard from "./RecommendCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { recommendSettings } from "../../constants/carousel";

function RecommendCarousel() {
  return (
    <RecommendWrapper>
      <Slider {...recommendSettings} className="recommend-carousel">
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
