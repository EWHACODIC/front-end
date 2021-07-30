import React from "react";
import '../style/pagination.css';
import Paging from "react-js-pagination";

const Pagination = ({page, count, setPage}) => {
  return (
    <div style = {{'width': '970px'}}>
      <Paging
        activePage={page}
        itemsCountPerPage={12}
        totalItemsCount={count}
        pageRangeDisplayed={9}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={setPage} />
    </div>
  );
};


export default Pagination;
