import React from "react";
import { Pagination } from "antd";
import style from "./PaginationSelect.module.css";
import { useAppDispatch } from "../../../bll/store";
import { setCurrentPageSizeAC } from "../../../bll/reducers/users-reducer";

type PaginationSelectType = {
  totalCount?: number;
  pageSize?: number;
  currentPage?: number;
  disable?: boolean;
};

export const PaginationSelect: React.FC<PaginationSelectType> = ({
  totalCount,
  pageSize,
  currentPage,
  disable,
}) => {
  const dispatch = useAppDispatch();

  const changeCurrentPageHandler = (currentPage: number, pageSize: number) => {
    console.log(currentPage, pageSize);
    dispatch(setCurrentPageSizeAC(currentPage, pageSize));
  };

  return (
    <div className={style.pagination}>
      <Pagination
        disabled={disable}
        size={"small"}
        total={totalCount}
        current={currentPage}
        pageSize={pageSize}
        showSizeChanger
        onChange={changeCurrentPageHandler}
        pageSizeOptions={["5", "10", "15"]}
      />
    </div>
  );
};
