import React, {useEffect, useState} from "react";
import styled from "styled-components";
import SideLogin from '../component/sideLogin';
import PostDetail from '../component/postDetail';
import CommentList from '../component/commentList';
import CommentPost from "../component/commentPost";

function TechDetail({match}) {
  const {no} = match.params;
  return (
    <div style={{'display': 'flex'}}>
      <SideLogin />
      <PostviewComponent>
        <Title>TECH&JOBs</Title>
        <PostDetail path={`http://localhost:8080/api/tech/${no}`}/>
        <CommentList path={`http://localhost:8080/api/tech/${no}/comment`}/>
        <CommentPost type={'tech'} postId={no}/>
      </PostviewComponent>
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
const PostviewComponent = styled.div`
  display: flex; flex: 1; overflow: auto;
  flex-direction: column;
  width: 970px; text-align: left;
`

export default TechDetail;