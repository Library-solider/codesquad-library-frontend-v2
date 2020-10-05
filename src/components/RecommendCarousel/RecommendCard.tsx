import React from "react";
import { Link } from "react-router-dom";

import {
  RecommendCardWrapper,
  RecommendCardContainer,
  RecommendButton,
} from "./Recommend.element";

interface IRecommendCard {
  title: string;
  subTitle: string;
  image: string;
  recommendKeyword: Array<string>;
  themeColor: string;
  key: number;
}

const RecommendCard = ({
  title,
  subTitle,
  image,
  recommendKeyword,
  themeColor,
  key,
}: IRecommendCard) => {
  return (
    <RecommendCardWrapper themeColor={themeColor}>
      <RecommendCardContainer>
        <div>
          <div className="card-title">{title}</div>
          <p>{subTitle}</p>
          <div>
            {recommendKeyword.map((keyword, idx) => {
              return (
                <RecommendButton key={idx}>
                  <Link to={`search?q=${keyword}`}>{keyword}</Link>
                </RecommendButton>
              );
            })}
          </div>
        </div>
        <img src={image} alt="logo" />
      </RecommendCardContainer>
    </RecommendCardWrapper>
  );
};

export default RecommendCard;
