import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../modules/index";
import Modal from "../Modal/Modal";
import { DetailBookContent, RentalButton } from "./DetailBook.element";

function DetailBookInfo() {
  const store = useSelector((state: RootState) => state);
  const detailBookData = store.detailbook.data;
  const isRentalActive = store.login.isLogin;

  return (
    <DetailBookContent rentalState={detailBookData.data.isAvailable}>
      <div className="detail-book-top">
        <div className="book-cover">
          <img src={detailBookData.data.imageUrl} alt="book cover" />
          <RentalButton
            isActive={isRentalActive}
            disabled={!detailBookData.data.isAvailable}
          >
            대여하기
          </RentalButton>
        </div>
        <div className="book-info">
          <h2 className="detail-book-title">{detailBookData.data.title}</h2>
          <p>저자:{detailBookData.data.author}</p>
          <p>출판:{detailBookData.data.publisher}</p>
          <p>출판일:{detailBookData.data.publicationDate}</p>
          <p>표준번호:{detailBookData.data.isbn}</p>
          <p className="rental-available">
            {detailBookData.data.isAvailable ? "대여중" : "대여가능"}
          </p>
        </div>
      </div>
      <div className="detail-book-bottom">
        <h2 className="bottom-title">책소개</h2>
        <p className="detail-book-content">{detailBookData.data.description}</p>
      </div>
      {/* <Modal>
        <div>대여 준비중</div>
      </Modal> */}
    </DetailBookContent>
  );
}

export default DetailBookInfo;
