import React, {useState, useEffect} from "react";
import styled from "styled-components";
import SideLogin from "../component/sideLogin";
import SubBar from '../component/subBar';
import Board from '../component/board';
import Pagination from '../component/pagination';
import axios from "axios";

const pageNum = 3;

function TechList() {
  const [page, setPage] = useState(1);
  const handlePageChange = (page) => {
    setPage(page);
  };
  {/*const [pageNum, setPageNum] = useState();
  useEffect(async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/tech/list/total/count`);
      setPageNum(response.data);
    } catch (e) {
      console.log(e)
    }
  }, [])*/}
  const [sort, setSort] = useState('createdAt,DESC');
  const [search, setSearch] = useState('');
  return (
    <div style={{'display': 'flex'}}>
      <SideLogin />
      <BoardComponent>
        <div style={{'display': 'flex'}}>
          <Title>TECH&JOBs</Title>
          <SubBar type={'tech'} setSort={setSort} setSearch={setSearch}/>
        </div>
        {sort ? (
          <div>
            <Board type={'tech'} path={`http://localhost:8080/api/tech/list?page=${pageNum}&size=12&sort=${sort}`} />
            <Pagination page={page} count={pageNum} setPage={handlePageChange} />
          </div>
        ):''}
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