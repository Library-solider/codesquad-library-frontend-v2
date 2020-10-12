import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { Button } from "../../styles/Button";
import { ReturnModalWrapper } from "./Mypage.element";

interface IReturnModal {
  onCloseModal: () => void;
  bookId: number;
}

function ReturnModal({ onCloseModal, bookId }: IReturnModal) {
  const history = useHistory();
  const [error, setError] = useState(null);

  async function putReturnBook() {
    try {
      await axios.put(
        process.env.REACT_APP_DB_HOST + `/books/${bookId}`,
        null,
        {
          withCredentials: true,
        }
      );
      history.go(0);
    } catch (e) {
      const err = e as AxiosError;
      setError(err.response.data);
    }
  }

  return (
    <ReturnModalWrapper>
      {!error ? (
        <p className="modal-content">반납하시겠습니까?</p>
      ) : (
        <p className="modal-content">{error.message}</p>
      )}
      <div className="modal-buttons">
        <Button className="cancel-button" onClick={onCloseModal}>
          취소
        </Button>
        <Button onClick={putReturnBook}>확인</Button>
      </div>
    </ReturnModalWrapper>
  );
}

export default ReturnModal;
