import React, {useEffect, useState} from "react";
import styled from "styled-components";
import UserGrayImg from '../assets/userGray.svg'
import axios from "axios";

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
function CommentList({path}) {
  const [comments, setComments] = useState();
  useEffect(async() => {
    try {
      const response = await axios.get(path);
      setComments(response.data);
      console.log(comments);
    } catch(e) {
      console.log(e);
    }
  }, [])
  return (
    <div>
        {comments ? comments.map((item) =>(
        <div>
          <CommentTitle>댓글 {comments.length}</CommentTitle>
          <Comment>
          <img src = {UserGrayImg} />
          <div style = {{'margin-left': '5px'}}>
            <User style = {{'font-weight': 'bold'}}>{item.userCode}</User>
            <User>{item.content}</User>
            <CreatedDate>{item.createDate.replace("T", " / ")} 작성</CreatedDate>
          </div>
          </Comment>
          <MiddleBar />
        </div>
      )):''}
    </div>
  );
}

export default CommentList;