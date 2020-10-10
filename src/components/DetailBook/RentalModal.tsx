import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { Button } from "../../styles/Button";
import { RentalModalWrapper } from "./DetailBook.element";

interface IRentalModal {
  onCloseModal: () => void;
}

function RentalModal({ onCloseModal }: IRentalModal) {
  const history = useHistory();
  const currentPathname = history.location.pathname;

  const [error, setIsError] = useState(null);

  async function onConfirmRental() {
    try {
      await axios.post(process.env.REACT_APP_DB_HOST + currentPathname);

      history.goBack();
    } catch (e) {
      const err = e as AxiosError;
      setIsError(err.response.data);
    }
  }

  return (
    <RentalModalWrapper>
      {!error ? (
        <p className="modal-content">대여를 진행하시겠습니까?</p>
      ) : (
        <p className="modal-content">
          {error.message}
          <span role="img" aria-label="emoji">
            🥺
          </span>
        </p>
      )}
      <div className="modal-buttons">
        <Button className="cancel-button" onClick={onCloseModal}>
          취소
        </Button>
        <Button onClick={onConfirmRental}>확인</Button>
      </div>
    </RentalModalWrapper>
  );
}

export default RentalModal;
