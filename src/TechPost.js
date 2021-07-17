import React, {useEffect, useState} from "react";
import styled from "styled-components";
import SubBar from './component/subBar';
import PostDetail from './component/postDetail';

const Title = styled.div`
  display: inline-flex;
  flex-direction: row;
  font-size: 24px;
  font-weight: bold;
  border-bottom: 3px solid #49A862;
  margin-right: 375px;
`

const post = {
    "id": 1,
    "title": "title",
    "content": "content",
    "tag": ["태그"],
    "view": 8,
    "recommend": 0,
    "comments": [
        {
            "id": 1,
            "content": "12314123",
            "userCode": 1234,
            "createdAt": "2018-11-12T13:00:00",
            "modifiedAt": "2018-11-12T13:00:00",
            "postId": 1
        },
        {
            "id": 2,
            "content": "내용내용 ",
            "userCode": 134,
            "createdAt": "2021-11-13T15:31:00",
            "modifiedAt": "2021-11-13T15:31:00",
            "postId": 1
        }
    ],
    "userCode": 1234,
    "createdAt": "2018-11-12T13:00:00",
    "modifiedAt": "2018-11-12T13:00:00"
}

function TechPost() {
  const [ data, setData ] = useState({});
  useEffect(() => {
    setData(post);
  }, [])
  return (
    <div>
      <Title>TECH&JOBs</Title>
      <SubBar />
      <PostDetail data={data}/>
    </div>
  );
}

export default TechPost;