import React, {useState} from "react";
import styled from "styled-components";
import SideLogin from "../component/sideLogin";
import SubBar from '../component/subBar';
import Board from '../component/board';
import Pagination from '../component/pagination';
import axios from "axios";

function TechList() {
  const [page, setPage] = useState(1);
  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <div style={{'display': 'flex'}}>
      <SideLogin />
      <BoardComponent>
        <div style={{'display': 'flex'}}>
          <Title>TECH&JOBs</Title>
          <SubBar />
        </div>
        <Board path={`http://localhost:8080/api/tech/post/list?page=`} pageNum={page} />
        <Pagination page={page} count={25} setPage={handlePageChange} />
      </BoardComponent>
    </div>
  );
}

const Title = styled.div`
  width: 150px;
  flex-direction: row;
  font-size: 24px;
  font-weight: bold;
  border-bottom: 3px solid #49A862;
  margin-right: 365px;
`
const BoardComponent = styled.div`
  display: flex; flex: 1; overflow: auto;
  flex-direction: column;
  width: 970px;
`
export default TechList;