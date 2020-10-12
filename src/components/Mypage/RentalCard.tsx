import React, { useState } from "react";

import { RentalCardWrapper } from "./Mypage.element";
import { Button } from "../../styles/Button";

import Modal from "../Modal/Modal";
import ReturnModal from "./ReturnModal";
import BookCard from "../BookCard/BookCard";

import { calcValidDate } from "../../utils/date";

interface IRentalCard {
  id: number;
  title: string;
  imageUrl: string;
  author: string;
  returnDate: string;
}

const RentalCard = ({
  id,
  title,
  imageUrl,
  author,
  returnDate,
}: IRentalCard) => {
  const [isOpen, setIsOpen] = useState(false);

  function onCloseModal() {
    setIsOpen(false);
  }

  function onClickReturnBtn() {
    setIsOpen(true);
  }

  return (
    <RentalCardWrapper isReturn={calcValidDate(returnDate)}>
      <BookCard bookId={id} imageUrl={imageUrl} title={title} author={author} />
      <p className="return-date">{returnDate}</p>
      <Button onClick={onClickReturnBtn}>반납하기</Button>
      {isOpen && (
        <Modal>
          <ReturnModal onCloseModal={onCloseModal} bookId={id} />
        </Modal>
      )}
    </RentalCardWrapper>
  );
};

export default RentalCard;
