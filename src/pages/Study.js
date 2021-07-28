import React from "react";
import styled from "styled-components";
import RankCard from "../component/rankCard";

const Title = styled.div`
  display: flex;
  width: 80px;
  font-size: 24px;
  font-weight: bold;
  border-bottom: 3px solid #49A862;
  margin-bottom: 20px;
`
const RankComponent = styled.div`
  margin-right: 5px;
`

const Circle = styled.div`
  display: inline-flex;
  width: 10px; height: 10px;
  border-radius: 75px;
  background: ${props=>props.color};
  margin-top: 137.5px; margin-left: 5px;
`

const data = [
  {
    'rank': 1,
    'userName': '이지원'
  },
  {
    'rank': 2,
    'userName': '이지원'
  },
  {
     'rank': 3,
     'userName': '이지원'
  },
  {
     'rank': 4,
     'userName': '이지원'
  },
  {
    'rank': 5,
    'userName': '이지원'
  }
]

function Study() {
  const colorList = ['#48A560', '#63B779', '#7EC18F', '#B1D8BB', '#CEE3D4'];
  return (
    <div>
      <Title>STUDY</Title>
      <div style={{'display': 'inline-flex'}}>
      { data ?.map((rankInfo, i) => {
        if (i<5)
        return (
          <RankComponent>
          <RankCard color={colorList[i]} rank={rankInfo.rank} user={rankInfo.userName} />
          </RankComponent>
        )
      })}
      <Circle color={'#228B52'} />
      <Circle color={'#48A560'} />
      <Circle color={'#B1D8BB'} />
    </div>
    </div>
  );
}

export default Study;