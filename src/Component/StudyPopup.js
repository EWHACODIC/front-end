import React, {useEffect, useState} from "react";
import '../style/StudyPopup.css';
import styled from "styled-components";
import person from '../assets/person.svg';
import clock from '../assets/clock.svg';
import calendar from '../assets/calendar.svg';
import check from '../assets/check.svg';
import note from '../assets/note.svg';
import axios from "axios";

const studyDetail = {
  "id": 46,
  "maxPpl": 5,
  "curPpl": 3,
  "time": 31,
  "password": 1234,
  "studyType": "OFFLINE",
  "startAt": "2021-08-12",
  "endAt": "2021-09-11",
  "createdAt": "2021-07-30T22:49:31",
  "userCode": "1234",
  "title": "모각코모각코모각코",
  "description": "안녕하세요 여름 방학동안 같이 코딩 공부할 스터디 구합니다!"
}

{/*function StudyPopup(props) {
  const [studyDetail, setStudyDetail] = useState();
  useEffect(async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/study/${props.studyId}`);
      setStudyDetail(response.data);
      console.log(studyDetail);
    }catch(e) {
      console.log(e);
    }
  }, []);

  return (
    <div>
      {studyDetail ? (
        <Layer>
          <Layer>
            <AlertPopup>
              <StudyTop>
                <div style={{'width': '90%', 'font-size':'20px', 'padding':'10px'}}>{studyDetail.title}</div>
                <CloseBtn onClick={props.onClose}>×</CloseBtn>
              </StudyTop>
              <StudyContent>
                <UserInfo>
                  <UserImg />
                  <UserID>ID : {studyDetail.userCode.substring(0,2)+'*'.repeat(studyDetail.userCode.length-2)}</UserID>
                  <CreateDate>
                    <LineBreak style={{'margin-left':'15px'}}>{studyDetail.createdAt.split('T')[0].replace(/-/gi, ' ')}</LineBreak>
                    <LineBreak>{studyDetail.createdAt.split('T')[1]} 작성</LineBreak>
                  </CreateDate>
                </UserInfo>
                <MiddleLine />
                <StudyInfo>
                  <StudyDescription>
                    <img src={person} style={{'margin-right': '5px'}}/> 모집 인원
                    <p style={{'display':'inline-flex', 'margin-left': '15px'}}>{studyDetail.curPpl} / {studyDetail.maxPpl}</p> 명
                  </StudyDescription>
                  <StudyDescription>
                    <img src={clock} style={{'margin-right': '5px'}} /> 목표 시간
                    <p style={{'display':'inline-flex', 'margin-left': '15px'}}>{studyDetail.time}</p> 시간
                  </StudyDescription>
                </StudyInfo>
                <StudyInfo>
                  <StudyDescription>
                    <img src={calendar} style={{'margin-right': '5px', 'margin-left':'2px'}}/> 활동 기간
                    <p style={{'display':'inline-flex', 'margin-left': '15px', 'font-size': '12px'}}>{studyDetail.startAt} ~ {studyDetail.endAt}</p>
                  </StudyDescription>
                  <StudyDescription>
                    <img src={check} style={{'margin-right': '5px', 'width':'15px', 'margin-left':'2px'}} /> 스터디 유형
                    <p style={{'display':'inline-flex', 'margin-left': '15px'}}>{studyDetail.studyType==='ONLINE'?<StudyType background={'#F28095'}>ONline</StudyType>:<StudyType background={'#2D7EF8'}>OFFline</StudyType>}</p>
                  </StudyDescription>
                </StudyInfo>
                <StudyInfo>
                  <StudyDescription style={{'width':'90%', 'align-items':'flex-start'}}>
                    <img src={note} style={{'margin-right': '5px', 'width': '20px'}}/> 상세 내용
                    <p style={{'display':'inline-flex', 'margin-left': '15px', 'font-size': '12px'}}>{studyDetail.description}</p>
                  </StudyDescription>
                </StudyInfo>
                <StudyInfo>
                  <RegisterBtn>스터디 참가</RegisterBtn>
                </StudyInfo>
              </StudyContent>
            </AlertPopup>
          </Layer>
        </Layer>
      ):''}
    </div>

  );
}*/}

function StudyPopup(props) {
  return (
      <div>
        {studyDetail ? (
            <Layer>
              <Layer>
                <AlertPopup>
                  <StudyTop>
                    <div style={{'width': '90%', 'font-size': '20px', 'padding': '10px'}}>{studyDetail.title}</div>
                    <CloseBtn onClick={props.onClose}>×</CloseBtn>
                  </StudyTop>
                  <StudyContent>
                    <UserInfo>
                      <UserImg/>
                      <UserID>ID
                        : {studyDetail.userCode.substring(0, 2) + '*'.repeat(studyDetail.userCode.length - 2)}</UserID>
                      <CreateDate>
                        <LineBreak
                            style={{'margin-left': '15px'}}>{studyDetail.createdAt.split('T')[0].replace(/-/gi, ' ')}</LineBreak>
                        <LineBreak>{studyDetail.createdAt.split('T')[1]} 작성</LineBreak>
                      </CreateDate>
                    </UserInfo>
                    <MiddleLine/>
                    <StudyInfo>
                      <StudyDescription>
                        <img src={person} style={{'margin-right': '5px'}}/> 모집 인원
                        <p style={{
                          'display': 'inline-flex',
                          'margin-left': '15px'
                        }}>{studyDetail.curPpl} / {studyDetail.maxPpl}</p> 명
                      </StudyDescription>
                      <StudyDescription>
                        <img src={clock} style={{'margin-right': '5px'}}/> 목표 시간
                        <p style={{'display': 'inline-flex', 'margin-left': '15px'}}>{studyDetail.time}</p> 시간
                      </StudyDescription>
                    </StudyInfo>
                    <StudyInfo>
                      <StudyDescription>
                        <img src={calendar} style={{'margin-right': '5px', 'margin-left': '2px'}}/> 활동 기간
                        <p style={{
                          'display': 'inline-flex',
                          'margin-left': '15px',
                          'font-size': '12px'
                        }}>{studyDetail.startAt} ~ {studyDetail.endAt}</p>
                      </StudyDescription>
                      <StudyDescription>
                        <img src={check} style={{'margin-right': '5px', 'width': '15px', 'margin-left': '2px'}}/> 스터디 유형
                        <p style={{
                          'display': 'inline-flex',
                          'margin-left': '15px'
                        }}>{studyDetail.studyType === 'ONLINE' ? <StudyType background={'#F28095'}>ONline</StudyType> :
                            <StudyType background={'#2D7EF8'}>OFFline</StudyType>}</p>
                      </StudyDescription>
                    </StudyInfo>
                    <StudyInfo>
                      <StudyDescription style={{'width': '90%', 'align-items': 'flex-start'}}>
                        <img src={note} style={{'margin-right': '5px', 'width': '20px'}}/> 상세 내용
                        <p style={{
                          'display': 'inline-flex',
                          'margin-left': '15px',
                          'font-size': '12px'
                        }}>{studyDetail.description}</p>
                      </StudyDescription>
                    </StudyInfo>
                    <StudyInfo>
                      <RegisterBtn>스터디 참가</RegisterBtn>
                    </StudyInfo>
                  </StudyContent>
                </AlertPopup>
              </Layer>
            </Layer>
        ) : ''}
      </div>

  );
}

const Layer = styled.div`
  overflow:hidden;
  position:fixed;
  top:0; right:0; bottom:0; left:0;
  width:100%; height:100%;
  z-index:100;
  text-align:center; white-space:nowrap;
  font-size:0; display:inline-block;
  vertical-align:middle;
  content:'';
  cursor: default;
`
const AlertPopup = styled.div`
  z-index: 2;
  position: relative;
  display:inline-block;
  vertical-align: middle;
  width: 550px;
  white-space: normal;
  word-break: break-word;
  text-align: left;
  box-sizing: border-box;
  font-size: 16px;
  margin-top: 200px;
`
const StudyTop = styled.div`
  display: inline-flex;
  width: 100%;
  background: #48A560;
  padding: 10px;
  color: white; font-weight: bold;
`
const CloseBtn = styled.button`
  border: none; background: transparent;
  font-size: 30px; color: white; font-weight: bold;
  cursor: pointer;
`
const StudyContent = styled.div`
  width: 100%;
  background: #FFFFFF;
  box-shadow: 4px 10px 40px rgba(0, 0, 0, 0.45);
  padding: 10px;
  color: black; font-size: 15px;
`
const UserInfo = styled.div`
  display: inline-flex;
  padding: 5px;
`
const UserImg = styled.div`
  width: 40px; height: 40px;
  background: #C4C4C4;
  border-radius: 10px; margin-right: 5px;
`
const UserID = styled.div`
  margin: 10px 300px 0 5px; font-size: 16px; font-weight: bold;
`
const CreateDate = styled.div`
  color: #C4C4C4;
  justify-content: flex-end;
`
const LineBreak = styled.div`
  display: flex;
  font-size: 14px;
`
const MiddleLine = styled.div`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.6);
  background: rgba(0, 0, 0, 0.6);
  margin-top: 2px; margin-bottom: 10px;
`
const StudyInfo = styled.div`
  display: inline-flex;
  width: 100%;
`
const StudyDescription = styled.div`
  justify-content: center;
  width: 50%;
  font-size: 15px; font-weight: bold;
  margin-left: 20px;
`
const StudyType = styled.div`
  width: 55px;
  padding: 3px;
  text-align: center;
  font-size: 12px; color: white;
  border-radius: 20px;
  background: ${(props) => (props.background)}
`
const RegisterBtn = styled.button`
  background: #C9E492;
  width: 120px; height: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px; border: none;
  padding: 10px 20px 10px 20px;
  font-size: 15px; font-weight: bold;
  margin: 20px 0 20px 420px;
  cursor: pointer;
`

export default StudyPopup;