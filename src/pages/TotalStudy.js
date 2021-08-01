import React, {useState, useEffect} from "react";
import styled from "styled-components";
import StudyCard from "../component/studyCard"
import axios from "axios";

function TotalStudy() {
  const [user, setUser] = useState(1234);
  const [totalStudy, setTotalStudy] = useState();
  useEffect(async () => {
    try {
      const data = await axios.get(`http://localhost:8080/api/study/list`);
      setTotalStudy(data.data);
    }catch(e) {
      console.log(e);
    }
  }, []);

  return (
    <div>
      <div style={{'margin-top': '60px', 'width': '1200px', 'margin-left': '230px'}}>
        <div style={{'display':'flex'}}>
          <StudyTitle>벗들의 모여서 각자 코딩</StudyTitle>
        </div>
        <div style={{'display': 'inline-flex', 'flex-wrap':'wrap', 'width': '1200px'}}>
          { totalStudy ?.map((studyInfo) => {
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