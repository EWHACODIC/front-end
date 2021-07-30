import React, {useEffect, useState} from "react";
import styled from "styled-components";
import SideLogin from "../component/sideLogin";
import axios from "axios";

function Post() {
  return (
    <div style={{'display': 'flex'}}>
      <SideLogin />
      <PostComponent>
        <Title>새 글 쓰기</Title>
        <TopBar />
        <form style={{'width': '970px'}}>
          <div style={{'margin-left': '25px'}}>
            <div style={{'margin-bottom': '30px'}}>
              <DropDown>
                <BoardOption value={"none"}>게시판을 선택해주세요</BoardOption>
                <BoardOption value={"qna"}>Q&A</BoardOption>
                <BoardOption value={"community"}>COMMUNITY</BoardOption>
                <BoardOption value={"tech"}>TECH&JOBs</BoardOption>
              </DropDown>
              <div style={{"display": "inline-flex", "justify-content": "flex-end", "width": "510px"}}>
                <RegisterBtn>등록</RegisterBtn>
              </div>
            </div>
            <TitleInput />
            <ContentBox><ContentInput/></ContentBox>
          </div>
          <MiddleBar />
        {/*<TagTitle>태그</TagTitle>
        <div style={{'display':'inline-flex', 'flex-wrap':'wrap', 'width': '860px'}}>
        <TagInput># C</TagInput>
        <TagInput># C#</TagInput>
        <TagInput># C++</TagInput>
        <TagInput># java</TagInput>
        <TagInput># go</TagInput>
        <TagInput># swift</TagInput>
        <TagInput># kotlin</TagInput>
        <TagInput># python</TagInput>
        <TagInput># unity</TagInput>
        <TagInput># react</TagInput>
        <TagInput># redux</TagInput>
        <TagInput># html</TagInput>
        <TagInput># css</TagInput>
        <TagInput># javascript</TagInput>
        <TagInput># spring</TagInput>
        <TagInput># springboot</TagInput>
        <TagInput># express</TagInput>
        <TagInput># node.js</TagInput>
        <TagInput># django</TagInput>
        <TagInput># next.js</TagInput>
        <TagInput># mysql</TagInput>
        <TagInput># nosql</TagInput>
        <TagInput># django rest framework</TagInput>
        </div>*/}
        </form>
      </PostComponent>
    </div>
  );
}

const Title = styled.div`
  width: 100px;
  flex-direction: row;
  font-size: 24px;
  font-weight: bold;
  border-bottom: 3px solid #49A862;
  margin-right: 365px;
`
const PostComponent = styled.div`
  display: flex; flex: 1; overflow: auto;
  flex-direction: column;
  width: 970px;
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
  display: inline-flex;
  padding-left: 25px; padding-right: 25px;
  padding-top: 3px; padding-bottom: 3.5px;
  text-align: center;
  font-size: 15px; font-weight: bold;
  border: 2.5px solid #000000;
  border-radius: 20px;
  margin-right: 25px;
`
const TagInput = styled.button.attrs({
  value: (props)=>(props.value)
})`
  text-align: center;
  font-size: 15px;
  border: 2.5px solid #C4C4C4;
  border-radius: 20px;
  padding-left: 15px; padding-right: 15px;
  padding-top: 3px; padding-bottom: 3.5px;
  margin-right: 10px; margin-bottom: 10px;
  font-color: ${(props)=>(props.color)}
  background: ${(props)=>(props.background)}
`

export default Post;