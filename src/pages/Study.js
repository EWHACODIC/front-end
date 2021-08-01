import React, {useState, useEffect} from "react";
import styled from "styled-components";
import LoginBox from '../component/Login';
import RankCard from "../component/rankCard";
import StudyCard from "../component/studyCard"
import axios from "axios";
import {Link} from "react-router-dom";

function Study() {
  const colorList = ['#48A560', '#63B779', '#7EC18F', '#B1D8BB', '#CEE3D4'];
  const [user, setUser] = useState(1234);
  const [rankList, setRankList] = useState();
  const [recentStudy, setRecentStudy] = useState();
  useEffect(async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/rank`);
      setRankList(response.data);
    }catch(e) {
      console.log(e);
    }
  }, []);
  useEffect(async () => {
    try {
      const data = await axios.get(`http://localhost:8080/api/study/list/recent`);
      setRecentStudy(data.data);
    }catch(e) {
      console.log(e);
    }
  }, []);

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