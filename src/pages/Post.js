import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";

const Title = styled.div`
  display: inline-flex;
  flex-direction: row;
  font-size: 24px;
  font-weight: bold;
  border-bottom: 3px solid #49A862;
  margin-right: 375px;
`
const TopBar = styled.div`
  width: 970px;
  height: 5px;
  background: #48A560;
  margin-top: 30px; margin-bottom: 20px;
`
const DropDown = styled.select.attrs({
  name: 'boardType'
})`
  display: inline-flex;
  width: 400px;
  border-top: none; border-left: none; border-right: none;
  border-bottom: 2px solid black;
  padding: 5px;
  font-size: 20px;
  cursor:pointer;
  &:focus {outline: none};
`
const BoardOption = styled.option.attrs({
  value: (props) => (props.value)
})`
  padding: 3px;
  font-size: 14px;
`
const RegisterBtn = styled.button.attrs({
  type: "submit"
})`
  width: 60px; height: 40px;
  margin-right: 10px;
  font-size: 16px;
  cursor: pointer;
  border: none; border-radius: 5px;
  background-color: #C9E492;
  font-weight: bold;
  box-shadow: 0px 4px 5px #C4C4C4;
`
const TitleInput = styled.input.attrs({
  placeholder: "제목을 입력해주세요."
})`
  display: flex;
  width: 900px;
  padding-left: 10px; padding-top: 8px; padding-bottom: 8px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 2.5px solid #C4C4C4;
  border-radius: 5px;
`
const ContentBox = styled.div`
  width: 890px; height: 280px;
  border: 2.5px solid #C4C4C4;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 30px;
`
const ContentInput = styled.textarea.attrs({
  placeholder: "내용을 입력하세요."
})`
  display: flex;
  width: 860px; height: 250px;
  border: none; resize: none;
  font-size: 13px;
  &:focus {outline: none};
`
const MiddleBar = styled.div`
  width: 970px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  margin-bottom: 30px;
`
const TagTitle = styled.div`
  width: 70px;
  padding: 3px;
  text-align: center;
  font-size: 15px; font-weight: bold;
  border: 2.5px solid #000000;
  border-radius: 20px;
`
const TagInput = styled.button.attrs({
    value: (props)=>(props.value)
})`
  width: 70px;
  padding: 3px;
  text-align: center;
  font-size: 15px; font-weight: bold;
  border: 2.5px solid #000000;
  border-radius: 20px;
  font-color: ${(props)=>(props.color)}
  background: ${(props)=>(props.background)}
`

function Post() {
  return (
    <div>
      <Title>새 글 쓰기</Title>
      <TopBar />
      <form style={{'width': '970px'}}>
        <div style={{'margin-left': '25px'}}>
        <div style={{'margin-bottom': '30px'}}>
          <DropDown>
            <BoardOption value="none">게시판을 선택해주세요</BoardOption>
            <BoardOption value="qna">Q&A</BoardOption>
            <BoardOption value="community">COMMUNITY</BoardOption>
            <BoardOption value="tech">TECH&JOBs</BoardOption>
          </DropDown>
          <div style={{"display": "inline-flex", "justify-content": "flex-end", "width": "510px"}}>
            <RegisterBtn>등록</RegisterBtn>
          </div>
        </div>
        <TitleInput />
        <ContentBox><ContentInput/></ContentBox>
        </div>
        <MiddleBar />
        <TagTitle>태그</TagTitle>

      </form>
    </div>
  );
}

export default Post;