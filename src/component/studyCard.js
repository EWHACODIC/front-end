import React, {useState} from "react";
import styled from "styled-components";
import detailBtn from "../assets/plusBtn.svg";
import clock from '../assets/clock.svg';
import calendar from '../assets/calendar.svg';
import person from '../assets/person.svg';
import StudyDom from'./StudyDom';
import StudyPopup from './StudyPopup';

function StudyCard(props) {
  const [openPopup, setOpenPopup] = useState(false);
  console.log(props.studyInfo)
  return (
    <div>
      {props ? (
        <Info>
          <StudyName><p style={{'margin-left': '8px'}}>{props.studyInfo.title}</p></StudyName>
          <StudyInfo>
            <Info>
              <InfoDetail><Image src = {person} />{props.studyInfo.curPpl} / {props.studyInfo.maxPpl}</InfoDetail>
              <InfoDetail><Image src = {clock} />{props.studyInfo.time}시간</InfoDetail>
              <InfoDetail style={{'margin-top': '2px', 'margin-left':'2px'}}><Image src = {calendar} style={{'padding-bottom':'2px'}}/>{props.studyInfo.startAt} ~ {props.studyInfo.endAt}</InfoDetail>
            </Info>
            {props.studyInfo.studyType==='ONLINE'?<StudyType background={'#F28095'}>ONline</StudyType>:<StudyType background={'#2D7EF8'}>OFFline</StudyType>}
            <div style ={{"display": "inline-flex"}}>
              <UserImg />
              <div style={{'margin-right': '40px'}}>
                <LineBreak style={{'font-size': '12px'}}>{props.studyInfo.userCode.substring(0,2)+'*'.repeat(props.studyInfo.userCode.length-2)}</LineBreak>
                <LineBreak style={{'font-size': '10px'}}>{props.studyInfo.createdAt.replace('T', '/')} 작성</LineBreak>
              </div>
              <DetailBtn onClick={()=>{setOpenPopup(true)}}><img src = {detailBtn} style={{'width': '40px'}}/></DetailBtn>
              {openPopup &&
                <StudyDom>
                  <StudyPopup studyId={props.studyInfo.id} onClose={()=>setOpenPopup(false)} />
                </StudyDom>
              }
            </div>
          </StudyInfo>
        </Info>
      ):''}
    </div>
  );
}

const StudyName = styled.div`
  display: flex;
  width: 265px; height: 50px;
  align-items: center;
  font-size: 15px; font-weight: bold; color: white;
  background: #48A560;
  border-radius: 5px 5px 0 0;
  margin-right: 15px;
`
const StudyInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 265px; height: 185px;
  justify-content: center;
  background: #F8F8F8;
  margin-right: 15px;
  border-radius: 0 0 5px 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const Info = styled.div`
  margin-left: 8px;
  margin-bottom: 5px;
  text-align: left;
`
const InfoDetail = styled.div`
  display: inline-flex;
  align-content: center;
  text-align: left;
  font-size: 12px;
  margin-right: 10px;
`
const Image = styled.img`
  margin-right: 5px;
`
const StudyType = styled.div`
  width: 55px;
  padding: 3px; margin-bottom: 50px; margin-left: 5px;
  text-align: center;
  font-size: 12px; color: white;
  border-radius: 20px;
  background: ${(props) => (props.background)}
`
const UserImg = styled.div`
  display: flex;
  width: 35px; height: 35px;
  border-radius: 75px;
  background: #C4C4C4;
  margin-right: 5px; margin-left: 5px;
`
const LineBreak = styled.div`
  display: flex;
  padding: 1px;
`
const DetailBtn = styled.button.attrs({
  id: 'studyDom'
})`
  background: none; border: none;
  cursor: pointer;
`

export default StudyCard;