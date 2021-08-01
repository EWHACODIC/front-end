import React from "react";
import styled from "styled-components";
import SideLogin from '../component/sideLogin';
import PostDetail from '../component/postDetail';
import CommentList from '../component/commentList';
import CommentPost from "../component/commentPost";

function CommunityDetail({match}) {
    const {no} = match.params;
    return (
        <div style={{'display': 'flex'}}>
            <SideLogin />
            <PostviewComponent>
                <Title>Community</Title>
                <PostDetail path={`http://localhost:8080/api/community/${no}`}/>
                <CommentList path={`http://localhost:8080/api/community/${no}/comment`}/>
                <CommentPost type={'community'} postId={no}/>
            </PostviewComponent>
        </div>
    );
}

const Title = styled.div`
  width: 140px;
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

export default CommunityDetail;