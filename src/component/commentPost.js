import React from "react";
import styled from "styled-components";
import CommentImg from '../assets/comment.svg'

const CommentHeader = styled.div`
  display: inline-flex;
  align-items: flex-start;
  width: 850px;
  margin: 5px;
`
const CommentTitle = styled.div`
  display: flex;
  font-size: 16px; font-weight: bold;
`
const CommentBox = styled.div`
  width: 900px; height: 150px;
  margin-left: 25px;
  margin-top: 10px;
  border: 2.5px solid #C4C4C4;
  border-radius: 5px;
`
const User = styled.div`
  display: flex;
  font-size: 14px;
  margin: 10px;
`
const CommentInput = styled.textarea.attrs({
    placeholder: "댓글을 남겨보세요.",
    placeholderTextColor: "#C4C4C4"
})`
  display: flex;
  width: 800px; height: 60px;
  border: none; resize: none;
  margin-left: 8px;
  &:focus {outline: none};
`
const RegisterBtn = styled.button `
  width: 60px; height: 40px;
  margin-right: 10px;
  font-size: 14px;
  cursor: pointer;
  border: none; border-radius: 5px;
  background-color: #C9E492;
`
const MiddleBar = styled.div`
  width: 970px;
  height: 2px;
  background: #666666;
  margin-top: 20px; margin-bottom: 20px;
`
function CommentPost() {
  return (
    <div>
      <CommentHeader>
      <img src = {CommentImg} style={{"width": "25px"}} />
      <CommentTitle>댓글쓰기</CommentTitle>
      </CommentHeader>
      <CommentBox>
        <User>김수아</User>
        <CommentInput />
        <div style={{"display":"flex","justify-content":"flex-end", "width":"900px"}}>
          <RegisterBtn>등록</RegisterBtn>
        </div>
      </CommentBox>
      <MiddleBar />
    </div>
 );
}

export default CommentPost;