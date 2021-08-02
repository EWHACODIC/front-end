import React from "react";
import styled from "styled-components";

function RankCard(props) {
  return (
    <div>
      {props ? (
        <div>
        <Ranking background={props.color}>{props.rank}위</Ranking>
        <UserInfo>
          <ImageTmp />
          <UserName>{props.user}</UserName>
        </UserInfo>
        </div>
      ):''}
    </div>
    );
}

const Ranking = styled.div`
  display: flex;
  width: 150px; height: 80px;
  align-items: center; justify-content: center;
  font-size: 26px; font-weight: bold; color: white;
  background: ${props => props.background};
  border-radius: 5px 5px 0 0;
  margin-right: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px; height: 185px;
  align-items: center; justify-content: center;
  background: #F8F8F8;
  margin-right: 20px; margin-bottom: 20px;
  border-radius: 0 0 5px 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const ImageTmp = styled.div`
  display: flex;
  width: 90px; height: 90px;
  border-radius: 75px;
  background: #C4C4C4;
  margin-bottom: 15px;
`
const UserName = styled.div`
  display: flex;
  font-size: 20px; font-weight: bold;
`

export default RankCard;