import React, {useState, useEffect} from "react";
import styled from "styled-components";
import LoginBox from '../component/Login';
import RankCard from "../component/rankCard";
import StudyCard from "../component/studyCard"
import axios from "axios";
import {Link} from "react-router-dom";

const rankList = [
  {
    "userName": "2",
    "commitCount": 1400,
    "rank": 1
  },
  {
    "userName": "4",
    "commitCount": 1200,
    "rank": 2
  },
  {
    "userName": "5",
    "commitCount": 732,
    "rank": 3
  },
  {
    "userName": "dotsi2",
    "commitCount": 110,
    "rank": 4
  },
  {
    "userName": "ttt",
    "commitCount": 52,
    "rank": 5
  },
  {
    "userName": "1",
    "commitCount": 12,
    "rank": 6
  },
  {
    "userName": "3",
    "commitCount": 9,
    "rank": 7
  },
  {
    "userName": "dotsi",
    "commitCount": 0,
    "rank": 8
  }
]

const recentStudy = [{
  "id": 43,
  "title": "제목",
  "maxPpl": 11,
  "curPpl": 5,
  "time": 23,
  "password": 1234,
  "studyType": "ONLINE",
  "startAt": "2021-08-12",
  "endAt": "2021-09-11",
  "createdAt": "2021-07-30T22:30:27",
  "userCode": "1234",
  "description": "모각코모각코모각코"
},
  {
    "id": 42,
    "title": "제목",
    "maxPpl": 11,
    "curPpl": 5,
    "time": 23,
    "password": 1234,
    "studyType": "OFFLINE",
    "startAt": "2021-08-12",
    "endAt": "2021-09-11",
    "createdAt": "2021-07-30T22:29:43",
    "userCode": "1234",
    "description": "모각코모각코모각코"
  },
  {
    "id": 41,
    "title": "제목",
    "maxPpl": 12,
    "curPpl": 3,
    "time": 23,
    "password": 1234,
    "studyType": "ONLINE",
    "startAt": "2021-07-12",
    "endAt": "2021-09-24",
    "createdAt": "2021-07-30T21:38:45",
    "userCode": "1234",
    "description": "공부공부공부공부공부~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
  },
  {
    "id": 40,
    "title": "제목",
    "maxPpl": 12,
    "curPpl": 3,
    "time": 23,
    "password": 1234,
    "studyType": "OFFLINE",
    "startAt": "2021-07-12",
    "endAt": "2021-08-12",
    "createdAt": "2021-07-30T21:30:44",
    "userCode": "1234",
    "description": "공부공부공부공부공부~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
  },
  {
    "id": 37,
    "title": "제목",
    "maxPpl": 11,
    "curPpl": 5,
    "time": 23,
    "password": 1234,
    "studyType": "ONLINE",
    "startAt": "2021-07-12",
    "endAt": "2021-07-29",
    "createdAt": "2021-07-29T22:34:31",
    "userCode": "1234",
    "description": "study"
  },
  {
    "id": 36,
    "title": "제목",
    "maxPpl": 10,
    "curPpl": 3,
    "time": 24,
    "password": 1234,
    "studyType": "ONLINE",
    "startAt": "2021-07-13",
    "endAt": "2021-07-31",
    "createdAt": "2021-07-29T22:33:29",
    "userCode": "1234",
    "description": "study"
  }
]

function Study() {
  const colorList = ['#48A560', '#63B779', '#7EC18F', '#B1D8BB', '#CEE3D4'];
  const [user, setUser] = useState(1234);
  {/*const [rankList, setRankList] = useState();
  const [recentStudy, setRecentStudy] = useState();
  useEffect(async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/rank`);
      setRankList(response.data);
      console.log(rankList);
    }catch(e) {
      console.log(e);
    }
  }, []);
  useEffect(async () => {
    try {
      const data = await axios.get(`http://localhost:8080/api/study/list/recent`);
      setRecentStudy(data.data);
      console.log(recentStudy);
    }catch(e) {
      console.log(e);
    }
  }, []); */}

  return (
    <div>
      <div style={{'display': 'flex'}}>
        <SubComponent>
          <LoginBox />
          <MyRanking>
            <MyRankName>김수아 님의 MY RANKING</MyRankName>
            <MyRankNum>36위</MyRankNum>
          </MyRanking>
        </SubComponent>
        <RankingComponent>
          <div style={{'display': 'flex'}}>
            <RankTitle>STUDY</RankTitle>
            <Link to='/study/rank' style={{'margin-top': '15px'}}><RankBtn>이화여자대학교 전체 랭킹 보러가기 →</RankBtn></Link>
          </div>
          <div style={{'display': 'inline-flex'}}>
            { rankList ? rankList.map((rankInfo, i) => {
              if (i<5)
                return (
                  <RankComponent>
                    <RankCard color={colorList[i]} rank={rankInfo.rank} user={rankInfo.userName} />
                  </RankComponent>
                )
            }): ''}
            <Circle color={'#228B52'} />
            <Circle color={'#48A560'} />
            <Circle color={'#B1D8BB'} />
          </div>
        </RankingComponent>
      </div>
      <div style={{'margin-top': '60px', 'width': '1200px', 'margin-left': '230px'}}>
        <div style={{'display':'flex'}}>
          <StudyTitle>벗들의 모여서 각자 코딩</StudyTitle>
          <Link to='/study/total' style={{'margin-top': '15px'}}><RankBtn><p style={{'font-size': '18px', 'margin-right': '35px'}}>MORE →</p></RankBtn></Link>
        </div>
        <div style={{'display': 'inline-flex', 'flex-wrap':'wrap', 'width': '1200px'}}>
          { recentStudy ? recentStudy.map((studyInfo) => {
            return (
              <StudyComponent>
                <StudyCard studyInfo={studyInfo}/>
              </StudyComponent>
            )
          }):''}
        </div>
      </div>
    </div>

  );
}

const SubComponent = styled.div`
  display: flex; flex-direction: row;
  width: 460px; flex:none;
`
const MyRanking = styled.div`
  display: flex;
  flex-direction: column;
  width: 205px; height: 130px;
  color: white; background: #48A560;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin-top: 205px; margin-left: 230px;
`
const MyRankName = styled.div`
  padding: 15px;
  font-size: 14px;
  text-align: left;
`
const MyRankNum = styled.div`
  padding-top: 10px;
  font-size: 30px;
  font-weight: bold;
`
const RankingComponent = styled.div`
  display: flex; flex: 1; overflow: auto;
  flex-direction: column;
  width: 970px;
`
const RankTitle = styled.div`
  width: 80px;
  flex-direction: row;
  font-size: 24px;
  font-weight: bold;
  border-bottom: 3px solid #49A862;
  margin-bottom: 25px; margin-right: 580px;
`
const RankBtn = styled.button`
  font-size: 15px;
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
  display: flex; flex: none;
  width: 240px;
  flex-direction: row;
  font-size: 24px; font-weight: bold;
  border-bottom: 3px solid #49A862;
  margin-bottom: 25px; margin-right: 830px;
`
const StudyComponent = styled.div`
  margin-right: 10px;
  margin-bottom: 30px;
`

export default Study;