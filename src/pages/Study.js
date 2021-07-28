import React from "react";
import styled from "styled-components";
import RankCard from "../component/rankCard";
import StudyCard from "../component/studyCard"

const RankTitle = styled.div`
  display: inline-flex;
  flex-direction: row;
  font-size: 24px;
  font-weight: bold;
  border-bottom: 3px solid #49A862;
  margin-right: 680px; margin-bottom: 25px;
`
const RankBtn = styled.button`
  font-size: 15px; font-weight: bold;
  border: none; background: none;
  cursor: pointer;
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
const StudyTitle = styled.div`
  display: inline-flex;
  flex-direction: row;
  font-size: 22px;
  font-weight: bold;
  border-bottom: 3px solid #49A862;
  margin-right: 800px; margin-bottom: 30px;
`
const StudyComponent = styled.div`
  margin-right: 10px;
  margin-bottom: 30px;
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

const studyData = [
    {
        'id': 1,
        'title': '자바 알고리즘 스터디',
        'currentMember': 6,
        'totalMember': 8,
        'time': 3,
        'term': 3,
        'type': 'online',
        'userName': '이지원',
        'createdAt': '2018-11-12T13:00:00'
    },
    {
        'id': 2,
        'title': '자바 알고리즘 스터디',
        'currentMember': 6,
        'totalMember': 8,
        'time': 3,
        'term': 3,
        'type': 'offline',
        'userName': '이지원',
        'createdAt': '2018-11-12T13:00:00'
    },
    {
        'id': 3,
        'title': '자바 알고리즘 스터디',
        'currentMember': 6,
        'totalMember': 8,
        'time': 3,
        'term': 3,
        'type': 'online',
        'userName': '이지원',
        'createdAt': '2018-11-12T13:00:00'
    },
    {
        'id': 4,
        'title': '자바 알고리즘 스터디',
        'currentMember': 6,
        'totalMember': 8,
        'time': 3,
        'term': 3,
        'type': 'online',
        'userName': '이지원',
        'createdAt': '2018-11-12T13:00:00'
    },
    {
        'id': 5,
        'title': '자바 알고리즘 스터디',
        'currentMember': 6,
        'totalMember': 8,
        'time': 3,
        'term': 3,
        'type': 'offline',
        'userName': '이지원',
        'createdAt': '2018-11-12T13:00:00'
    },
    {
        'id': 6,
        'title': '자바 알고리즘 스터디',
        'currentMember': 6,
        'totalMember': 8,
        'time': 3,
        'term': 3,
        'type': 'offline',
        'userName': '이지원',
        'createdAt': '2018-11-12T13:00:00'
    },
    {
        'id': 7,
        'title': '자바 알고리즘 스터디',
        'currentMember': 6,
        'totalMember': 8,
        'time': 3,
        'term': 3,
        'type': 'online',
        'userName': '이지원',
        'createdAt': '2018-11-12T13:00:00'
    },
    {
        'id': 8,
        'title': '자바 알고리즘 스터디',
        'currentMember': 6,
        'totalMember': 8,
        'time': 3,
        'term': 3,
        'type': 'online',
        'userName': '이지원',
        'createdAt': '2018-11-12T13:00:00'
    }

]

function Study() {
  const colorList = ['#48A560', '#63B779', '#7EC18F', '#B1D8BB', '#CEE3D4'];
  return (
    <div>
      <div style={{'margin-bottom': '80px'}}>
        <RankTitle>STUDY</RankTitle>
        <RankBtn>이화여자대학교 전체 랭킹 보러가기 →</RankBtn>
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
    <div style={{'width': '1200px'}}>
      <StudyTitle>벗들의 모여서 각자 코딩</StudyTitle>
      <RankBtn><p style={{'font-size': '18px'}}>MORE →</p></RankBtn>
      <div style={{'display': 'inline-flex', 'flex-wrap':'wrap'}}>
        { studyData ?.map((studyInfo) => {
          return (
            <StudyComponent>
              <StudyCard studyInfo={studyInfo}/>
            </StudyComponent>
          )
        })}
      </div>
    </div>
  </div>

  );
}

export default Study;