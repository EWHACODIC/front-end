import React from "react";
import styled from "styled-components";
import '../style/postDetail.css';
import commentImg from "../assets/comment.svg";
import heartImg from "../assets/heart.svg";
import viewImg from "../assets/view.svg";
import bigHeartImg from "../assets/bigHeart.svg"
import UserGrayImg from "../assets/userGray.svg";

const TopBar = styled.div`
  width: 970px;
  height: 5px;
  background: #48A560;
  margin-top: 20px; margin-bottom: 10px;
`
const Tag = styled.div`
  display:inline-flex;
  color: white; text-align: center; font-size: 12px;
  background: #4D4D4D; border-radius: 5px;
  padding-left: 8px; padding-right: 8px;
  padding-top: 3px; padding-bottom: 3.5px;
  margin-bottom: 3px;
`
const PostTitle = styled.div`
  display: flex;
  font-size: 18px; font-weight: bold;
  margin: 5px;
`
const PostInfo = styled.div`
  display: inline-flex;
  margin-top: 10px; margin-left: 5px;
`
const UserImg = styled.div`
  background: #C4C4C4;
  width: 33px; border-radius: 20px;
  margin-right: 8px;
`
const User = styled.div`
  display: flex;
  font-size: 14px;
  margin-bottom: 2px;
`
const Date = styled.div`
  font-size: 10px;
  display: flex;
`
const SortBar = styled.div`
  display: inline-flex;
  flex-direction: row-reverse;
  align-items: flex-end;
`
const MiddleBar = styled.div`
  width: 970px;
  height: 2px;
  background: #666666;
  margin-top: 10px; margin-bottom: 20px;
`
const Content = styled.div`
  display: flex;
  width: 850px;
  margin: 5px;
  font-size: 14px;
`
const HeartBtn = styled.button`
  display: inline-flex;
  font-size: 14px; color: #C4C4C4;
  background-color: transparent;
  border: none;
  margin-top: 10px; margin-bottom: 5px;
  margin-left: 900px;
`
function PostDetail() {
  return (
    <div>
            <div>
              <TopBar />
              <div className='index'>9807</div>
              <Tag># react</Tag> <Tag># react</Tag>
              <PostTitle>코딩코딩질문질문코딩코딩질문질문코딩코딩질문질문</PostTitle>
              <PostInfo>
                <img src = {UserGrayImg} />
                <div style={{'margin-right': '630px'}}>
                  <User>윤채원</User>
                  <Date>2021.06.05 / 00:14:56 작성</Date>
                </div>
                <SortBar>
                  3<img src = {viewImg} className='smallImg'/>
                  3<img src = {heartImg} className='smallImg'/>
                  3<img src = {commentImg} className='smallImg'/>
                </SortBar>
              </PostInfo>
              <MiddleBar />
              <Content>코딩코딩질문질문코딩코딩질문질문코딩코딩질문질문코딩코딩질문질문코딩코딩질문질문코딩 코딩질문질문코딩코딩질문질문코딩코딩질문질문코딩코딩질문질문 코딩코딩질문질문코딩코딩질문질문코딩코딩질문질문코딩코딩질문질문코딩코딩질문질문코딩코딩질문질문 \ 문코딩코딩질문질문코딩코딩질문질문코딩코딩질문질문 문코딩코딩질문질문코딩코딩질문질문코딩코딩질문질문문코딩코딩질문질문코딩코딩질문질문코딩코딩질문질문ㅍ</Content>
              <HeartBtn><img src = {bigHeartImg} className='bigImg'/> 공감</HeartBtn>
              <MiddleBar />
            </div>
    </div>
  );
}

export default PostDetail;