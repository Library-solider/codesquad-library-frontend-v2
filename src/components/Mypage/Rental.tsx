import React from "react";
import { FcDeleteDatabase } from "react-icons/fc";

import { useSelector } from "react-redux";
import { RootState } from "../../modules/index";

import { RentalListWrapper, RentalList } from "./Mypage.element";

import RentalCard from "./RentalCard";

function Rental() {
  const { data } = useSelector((state: RootState) => state.mypage);

  return (
    <RentalListWrapper>
      <h2 className="rental-list-title">대여 목록</h2>
      {data.data.rentalBookResponse ? (
        <RentalList>
          {data.data.rentalBookResponse.map((el) => {
            return (
              <RentalCard
                key={el.id}
                id={el.id}
                title={el.title}
                imageUrl={el.imageUrl}
                author={el.author}
                returnDate={el.returnDate}
              />
            );
          })}
        </RentalList>
      ) : (
        <div className="none-rental-list">
          <FcDeleteDatabase />
          <h3>대여중인 서재가 없습니다.</h3>
        </div>
      )}
    </RentalListWrapper>
  );
}

export default Rental;
