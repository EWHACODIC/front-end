import styled from "styled-components";
import searchImg from "../assets/search.svg"

const SortBar = styled.div`
  display: inline-flex;
  flex-direction: row-reverse;
  align-items: flex-end;
`

const SortOpt = styled.button`
  display: inline-flex;
  font-size: 15px;
  background-color: transparent;
  border-top: none; border-left: none; border-right: none;
  border-bottom: 1px solid #000000;
  margin-right: 25px;
  padding: 0;
`

const SearchBox = styled.div`
  display: inline-flex;
  border: 2.5px solid #C4C4C4;
  border-radius: 5px;
  height: 25px;
`

const Input = styled.input.attrs({
    type: 'search'
})`
  border: none;
  &:focus {
        outline: none;
    }
`


function SubBar() {
  return (
    <SortBar>
      <SearchBox>
        <img src={searchImg} style={{'margin': '3px'}} />
        <Input />
      </SearchBox>
      <SortOpt>조회순</SortOpt>
      <SortOpt>공감순</SortOpt>
      <SortOpt>댓글순</SortOpt>
      <SortOpt>최신순</SortOpt>
    </SortBar>
  );
}

export default SubBar;