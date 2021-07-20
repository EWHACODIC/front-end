import React from "react";
import styled from "styled-components";
import UserGrayImg from '../assets/userGray.svg'

const CommentTitle = styled.div`
  display: flex;
  font-size: 16px; font-weight: bold;
  margin-left: 5px; margin-bottom: 10px;
`
const MiddleBar = styled.div`
  width: 970px;
  height: 2px;
  background: #666666;
  margin-top: 20px; margin-bottom: 20px;
`
const Comment = styled.div`
  display: inline-flex;
  text-align: center;
  width: 850px;
  margin-top: 8px; margin-bottom: 8px;
  margin-left: 5px;
`
const User = styled.div`
  display: flex;
  font-size: 14px;
  margin-bottom: 5px;
`
const CreatedDate = styled.div`
  display: flex;
  font-size: 11px;;
`
function CommentList() {
  return (
    <div>
      <CommentTitle>댓글 3</CommentTitle>
      <Comment>
        <img src = {UserGrayImg} />
        <div style = {{'margin-left': '5px'}}>
          <User style = {{'font-weight': 'bold'}}>윤채원</User>
          <User>답글댓글답글댓글답글댓글답글댓글답글댓글답글댓글답글댓글답글댓글</User>
          <CreatedDate>2021.06.05 / 00:14:56 작성</CreatedDate>
        </div>
      </Comment>
      <MiddleBar />
    </div>
  );
}

export default CommentList;