import React from "react";
import { MdClose } from "react-icons/md";

import { useTransition, animated } from "react-spring";
import {
  LauncherToggleWrapper,
  LauncherToggleHeader,
} from "./Launcher.element";

interface ILauncherToggle {
  isOpen: boolean;
  onClose: () => void;
}
function LauncherToggle({ isOpen, onClose }: ILauncherToggle) {
  const slideUpTransition = useTransition(isOpen, null, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
  });

  return (
    <div>
      {slideUpTransition.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props}>
              <LauncherToggleWrapper>
                <LauncherToggleHeader>
                  <h3>Service Feedback</h3>
                  <MdClose onClick={onClose} className="close-modal-btn" />
                </LauncherToggleHeader>
                <div className="context-top">
                  <p>안녕하세요.</p>
                  <p>코드스쿼드 도서관 운영자 입니다.</p>
                </div>
                <p>
                  서비스를 이용하시면서 버그 또는 추가 기능에 대해서 여러분들의
                  의견을 전달해 주시면 적극 반영하도록 하겠습니다.
                </p>
                <p className="admin-email">Email : jhchoi1115@gmail.com</p>

                <a
                  href="mailto:jhchoi1115@gmail.com"
                  className="email-recipient-link"
                >
                  보내기
                </a>
              </LauncherToggleWrapper>
            </animated.div>
          )
      )}
    </div>
  );
}

export default LauncherToggle;
