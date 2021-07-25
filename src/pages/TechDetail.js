import React, {useEffect, useState} from "react";
import styled from "styled-components";
import SubBar from '../component/subBar';
import PostDetail from '../component/postDetail';
import CommentList from '../component/commentList';
import CommentPost from "../component/commentPost";

const Title = styled.div`
  display: inline-flex;
  flex-direction: row;
  font-size: 24px;
  font-weight: bold;
  border-bottom: 3px solid #49A862;
  margin-right: 375px;
`

function TechDetail() {
  return (
    <div>
      <Title>TECH&JOBs</Title>
      <PostDetail path={`http://localhost:8080/api/tech/post/`+`1`}/>
      <CommentList />
      <CommentPost />
    </div>
  );
}

export default TechDetail;