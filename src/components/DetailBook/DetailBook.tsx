import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import getDetailBookTunk from "../../modules/detailBook/thunks";
import { RootState } from "../../modules/index";

import { DetailBookWrapper, DetailBookContainer } from "./DetailBook.element";

import Loading from "../Loading/Loading";
import DetailBookInfo from "./DetailBookInfo";
import ErrorPage from "../ErrorPage/ErrorPage";

function DetailBook() {
  const history = useHistory();
  const currentPathname = history.location.pathname;

  const dispatch = useDispatch();
  const { loading, error, data } = useSelector(
    (state: RootState) => state.detailbook
  );

  useEffect(() => {
    dispatch(
      getDetailBookTunk(process.env.REACT_APP_DB_HOST + currentPathname)
    );
  }, [currentPathname, dispatch]);

  return (
    <DetailBookWrapper>
      <DetailBookContainer>
        {loading && <Loading />}
        {error && <ErrorPage status={error.response.status} />}
        {data && <DetailBookInfo />}
      </DetailBookContainer>
    </DetailBookWrapper>
  );
}

export default DetailBook;
