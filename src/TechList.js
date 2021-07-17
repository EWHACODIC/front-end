import React, {useEffect, useState} from "react";
import styled from "styled-components";
import SubBar from './component/subBar';
import Board from './component/board';

const Title = styled.div`
  display: inline-flex;
  flex-direction: row;
  font-size: 24px;
  font-weight: bold;
  border-bottom: 3px solid #49A862;
  margin-right: 375px;
`

const postList = [
    {
        "id": 1,
        "title": "코딩코딩질문질문코딩코딩질문질문",
        "tag": ["react", "javascript"],
        "view": 8,
        "recommend": 0,
        "commentNum": 2,
        "userCode": "윤채원",
        "createDate": "2018-11-12T13:00:00",
        "modifiedDate": "2018-11-12T13:00:00"
    },
    {
        "id": 2,
        "title": "title2222",
        "tag": ["태그"],
        "view": 6,
        "recommend": 0,
        "commentNum": 0,
        "userCode": 1234,
        "createDate": "2018-11-12T13:00:00",
        "modifiedDate": "2018-11-12T13:00:00"
    },
    {
        "id": 3,
        "title": "title2222",
        "tag": ["태그"],
        "view": 2,
        "recommend": 0,
        "commentNum": 0,
        "userCode": 1234,
        "createDate": "2018-11-12T13:00:00",
        "modifiedDate": "2018-11-12T13:00:00"
    }
]

function TechList() {
  const [dataList, setDataList ] = useState([]);
  useEffect(() => {
      setDataList(postList);
  }, [])
  return (
    <div>
      <Title>TECH&JOBs</Title>
      <SubBar />
      <Board dataList={dataList}/>
    </div>
  );
}

export default TechList;