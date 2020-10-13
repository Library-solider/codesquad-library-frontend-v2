import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FcNoIdea } from "react-icons/fc";
import { RootState } from "../../modules/index";
import getMypageThunk from "../../modules/mypage/thunks";

import { MypageWrapper, MypageContainer } from "./Mypage.element";

import Loading from "../Loading/Loading";
import CustomError from "../ErrorPage/CustomError";
import UserInfo from "./UserInfo";
import Rental from "./Rental";

function Mypage() {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector(
    (state: RootState) => state.mypage
  );

  useEffect(() => {
    dispatch(getMypageThunk(process.env.REACT_APP_USER_MYPAGE_API));
  }, []);

  return (
    <MypageWrapper>
      <MypageContainer>
        {loading && <Loading />}
        {error && (
          <CustomError
            Icon={FcNoIdea}
            content="로그인 시 이용 가능한 페이지 입니다."
          />
        )}
        {data && (
          <>
            <UserInfo />
            <Rental />
          </>
        )}
      </MypageContainer>
    </MypageWrapper>
  );
}

export default Mypage;
