import React from "react";
import { NavLink, useHistory } from "react-router-dom";

import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import {
  PaginationWrapper,
  PaginationInner,
  Pages,
  Page,
  MoveButton,
} from "./Pagination.element";

import calcUpdatePagination from "../../utils/query";

interface IPagination {
  totalItem: number;
  itemPerPage: number;
  showPageCount: number;
  currentPage: number;
}

function Pagination({
  totalItem,
  itemPerPage,
  showPageCount,
  currentPage,
}: IPagination) {
  const { pathname, search } = useHistory().location;

  const totalPage = Math.ceil(totalItem / itemPerPage);
  const totalPagination = Math.ceil(totalPage / showPageCount);
  const currentPaginationPosition = Math.ceil(currentPage / showPageCount);

  const isShowingPreviousButton = currentPaginationPosition > 1;
  const isShowingNextButton = currentPaginationPosition < totalPagination;

  return (
    <PaginationWrapper>
      <PaginationInner>
        {isShowingPreviousButton && (
          <MoveButton>
            <NavLink
              to={calcUpdatePagination(
                pathname,
                search,
                (currentPaginationPosition - 2) * showPageCount + 1
              )}
            >
              <GoChevronLeft />
            </NavLink>
          </MoveButton>
        )}
        <Pages>
          {Array.from({ length: showPageCount }).map((_, idx) => {
            const moveToPage =
              (currentPaginationPosition - 1) * showPageCount + (idx + 1);

            if (totalPage < moveToPage) {
              return null;
            }

            return (
              <Page isActive={currentPage === moveToPage} key={idx}>
                <NavLink
                  to={calcUpdatePagination(pathname, search, moveToPage)}
                >
                  {moveToPage}
                </NavLink>
              </Page>
            );
          })}
        </Pages>
        {isShowingNextButton && (
          <MoveButton>
            <NavLink
              to={calcUpdatePagination(
                pathname,
                search,
                currentPaginationPosition * showPageCount + 1
              )}
            >
              <GoChevronRight />
            </NavLink>
          </MoveButton>
        )}
      </PaginationInner>
    </PaginationWrapper>
  );
}

export default Pagination;
