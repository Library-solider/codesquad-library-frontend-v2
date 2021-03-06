import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../modules/index";
import { DetailBookContent, RentalButton } from "./DetailBook.element";
import image_ready from "../../assets/images/image-ready.png";

import Modal from "../Modal/Modal";
import RentalModal from "./RentalModal";

function DetailBookInfo() {
  const [isOpen, setIsOpen] = useState(false);
  const store = useSelector((state: RootState) => state);
  const detailBookData = store.detailbook.data;
  const isRentalActive = store.login.isLogin;

  function onClickRentalBtn() {
    setIsOpen(true);
  }

  function onCloseRentalModal() {
    setIsOpen(false);
  }

  return (
    <DetailBookContent rentalState={detailBookData.data.available}>
      <div className="detail-book-top">
        <div className="book-cover">
          <img
            src={
              detailBookData.data.imageUrl
                ? detailBookData.data.imageUrl
                : image_ready
            }
            alt="book cover"
          />
          <RentalButton
            isActive={isRentalActive}
            disabled={!detailBookData.data.available}
            onClick={onClickRentalBtn}
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
          <p>도서위치:{detailBookData.data.location}</p>
          <p className="rental-available">
            {detailBookData.data.available ? "대여가능" : "대여중"}
          </p>
        </div>
      </div>
      <div className="detail-book-bottom">
        <h2 className="bottom-title">책소개</h2>
        <div
          className="detail-book-content"
          dangerouslySetInnerHTML={{ __html: detailBookData.data.description }}
        />
      </div>
      {isOpen && (
        <Modal>
          <RentalModal onCloseModal={onCloseRentalModal} />
        </Modal>
      )}
    </DetailBookContent>
  );
}

export default DetailBookInfo;
