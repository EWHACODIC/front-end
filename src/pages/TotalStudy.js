import React, {useState, useEffect} from "react";
import styled from "styled-components";
import StudyCard from "../component/studyCard"
import axios from "axios";

const totalStudy = [
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
    "id": 41,
    "title": "제목",
    "maxPpl": 12,
    "curPpl": 3,
    "time": 23,
    "password": 1234,
    "studyType":"ONLINE",
    "startAt": "2021-07-12",
    "endAt": "2021-09-24",
    "createdAt": "2021-07-30T21:38:45",
    "userCode": "1234",
    "description": "공부공부공부공부공부~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
  },
  {
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
  }
]

function TotalStudy() {
  const [user, setUser] = useState(1234);
  {/*const [totalStudy, setTotalStudy] = useState();
  useEffect(async () => {
    try {
      const data = await axios.get(`http://localhost:8080/api/study/list`);
      setTotalStudy(data.data);
    }catch(e) {
      console.log(e);
    }
  }, []);*/}

  return (
    <div>
      <div style={{'margin-top': '60px', 'width': '1200px', 'margin-left': '230px'}}>
        <div style={{'display':'flex'}}>
          <StudyTitle>벗들의 모여서 각자 코딩</StudyTitle>
        </div>
        <div style={{'display': 'inline-flex', 'flex-wrap':'wrap', 'width': '1200px'}}>
          { totalStudy ? totalStudy.map((studyInfo) => {
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

export default TotalStudy;