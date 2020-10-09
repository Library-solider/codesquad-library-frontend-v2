import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../modules/index";
import { DetailBookContent } from "./DetailBook.element";

function DetailBookInfo() {
  const { data } = useSelector((state: RootState) => state.detailbook);

  return (
    <DetailBookContent>
      <div className="detail-book-top">
        <div className="book-cover">
          <img src={data.data.imageUrl} alt="book cover" />
        </div>
        <div className="book-info">
          <h2 className="detail-book-title">{data.data.title}</h2>
          <p>저자:{data.data.author}</p>
          <p>출판:{data.data.publisher}</p>
          <p>출판일:{data.data.publicationDate}</p>
          <p>표준번호:{data.data.isbn}</p>
        </div>
      </div>
      <div className="detail-book-bottom">
        <h2 className="bottom-title">책소개</h2>
        <p className="detail-book-content">{data.data.description}</p>
      </div>
    </DetailBookContent>
  );
}

export default DetailBookInfo;
