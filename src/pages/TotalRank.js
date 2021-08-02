import React, {useState, useEffect} from "react";
import styled from "styled-components";
import LoginBox from '../Component/Login';
import RankCard from "../Component/rankCard";
import axios from "axios";

const totalRank = [
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

function TotalRank() {
  const colorList = ['#48A560', '#63B779', '#7EC18F', '#B1D8BB', '#CEE3D4'];
  {/*const [user, setUser] = useState(1234);
  const [totalRank, setTotalRank] = useState();
  useEffect(async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/rank`);
      setTotalRank(response.data);
      console.log(totalRank);
    }catch(e) {
      console.log(e);
    }
  }, []);*/}
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
            <RankTitle>전체 Github 랭킹</RankTitle>
          </div>
          <div style={{'display': 'inline-flex', 'flex-wrap': 'wrap', 'width':'1000px'}}>
            { totalRank ? totalRank.map((rankInfo, i) => {
              if (i<5) {
                return(
                  <RankComponent>
                    <RankCard color={colorList[i]} rank={rankInfo.rank} user={rankInfo.userName} />
                  </RankComponent>
                );}
              else {
                return (
                  <RankComponent>
                    <RankCard color={colorList[4]} rank={rankInfo.rank} user={rankInfo.userName} />
                  </RankComponent>
                );}
            }):''}
            <Circle color={'#228B52'} />
            <Circle color={'#48A560'} />
            <Circle color={'#B1D8BB'} />
          </div>
        </RankingComponent>
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
  width: 180px;
  flex-direction: row;
  font-size: 24px;
  font-weight: bold;
  border-bottom: 3px solid #49A862;
  margin-bottom: 25px; margin-right: 580px;
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

export default TotalRank;