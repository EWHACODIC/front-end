import React, {useState} from "react";
import styled from "styled-components";
import SubBar from '../component/subBar';
import Board from '../component/board';
import Pagination from '../component/pagination'
import {response} from '../boardListEx';
import axios from "axios";

const Title = styled.div`
  display: inline-flex;
  flex-direction: row;
  font-size: 24px;
  font-weight: bold;
  border-bottom: 3px solid #49A862;
  margin-right: 375px;
`

function TechList() {
  const [page, setPage] = useState(1);
  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <div>
      <Title>TECH&JOBs</Title>
      <SubBar />
      <Board path={`http://localhost:8080/api/tech/post/list?page=`} pageNum={page} />
      <Pagination page={page} count={response.length} setPage={handlePageChange} />

    </div>
  );
}

export default TechList;