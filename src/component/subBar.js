import styled from "styled-components";
import searchImg from "../assets/search.svg"

function SubBar(props) {
  return (
    <SortBar>
      <SearchBox>
        <img src={searchImg} style={{'margin': '3px', 'width': '15px'}} />
        <Input />
      </SearchBox>
      <SortOpt onClick={() => props.setSort("view,DESC")}>조회순</SortOpt>
      <SortOpt onClick={() => props.setSort("recommend,DESC")}>공감순</SortOpt>
      <SortOpt onClick={() => props.setSort("commentCount,DESC")}>댓글순</SortOpt>
      <SortOpt onClick={() => props.setSort("createdAt,DESC")}>최신순</SortOpt>
    </SortBar>
  );
}

const SortBar = styled.div`
  display: inline-flex;
  flex-direction: row-reverse;
  align-items: flex-end;
`
const SortOpt = styled.button`
  display: inline-flex;
  font-size: 13px;
  background-color: transparent;
  border-top: none; border-left: none; border-right: none; border-bottom: 1px solid #000000;
  margin-right: 25px;
  padding: 0;
  cursor: pointer;
`
const SearchBox = styled.div`
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  border: 2.5px solid #C4C4C4; border-radius: 5px;
  height: 25px;
`
const Input = styled.input.attrs({
    type: 'search'
})`
  border: none;
  &:focus { outline: none; }
`

export default SubBar;