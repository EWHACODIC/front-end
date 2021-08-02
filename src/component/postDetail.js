import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from 'axios';
import '../style/postDetail.css';
import commentImg from "../assets/comment.svg";
import heartImg from "../assets/heart.svg";
import viewImg from "../assets/view.svg";
import UserGrayImg from "../assets/userGray.svg";

const post = {
  "id": 78,
  "title": "제목제목제목",
  "tag": [
    "React",
    "Spring"
  ],
  "view": 11,
  "recommend": 0,
  "commentCount": 0,
  "userCode": 1234,
  "createDate": "2021-08-01T14:23:52",
  "content": "내용내용",
  "modifiedDate": "2021-08-01T14:23:52"
}

function PostDetail({path})  {
  const [isLike, setLike] = useState(false);
  function handleLikeChange() {
    if (isLike===false) {
      setLike(true)
    } else {
      setLike(false)
    }
  }
  {/*const [post, setPost] = useState();
  useEffect(async() => {
    try {
      const response = await axios.get(path);
      setPost(response.data);
    } catch(e) {
      console.log(e);
    }
  }, []);*/}
  //const [color, setColor] = useState({
  //  data:[],
  //  isLike: "#C4C4C4",
  //});
  //const {data, isLike} = color;
  return (
    <div>
    {post ? (
      <div>
        <TopBar />
          <div className='index'>{post.id}</div>
          {post.tag.length === 2 ? <div><Tag># {post.tag[0]}</Tag><Tag># {post.tag[1]}</Tag></div>:<Tag># {post.tag}</Tag>}
          <PostTitle>{post.title}</PostTitle>
          <PostInfo>
            <img src = {UserGrayImg} />
            <div style={{'margin-right': '630px'}}>
              <User>{post.userCode}</User>
               <Date>{post.createDate.replace("T", " / ")}</Date>
            </div>
            <SortBar>
              {post.view}<img src = {viewImg} className='smallImg'/>
              {post.recommend != null ?
                  <div><img src = {heartImg} className='smallImg'/>{ post.recommend }</div> :
                  <div><img src = {heartImg} className='smallImg'/>0</div>
              }
              {post.commentCount != null ?
                  <div><img src = {commentImg} className='smallImg'/>{ post.commentCount }</div> :
                  <div><img src = {commentImg} className='smallImg'/>0</div>
              }
            </SortBar>
          </PostInfo>
          <MiddleBar />
          <Content>{post.content}</Content>
          <HeartBtn onClick={handleLikeChange} >
            <HeartImg color = {(isLike===true)?'black':'#C4C4C4'}/>
            <FontChange weight = {(isLike===true)?'bold':'medium'}> 공감</FontChange>
          </HeartBtn>
          <MiddleBar />
        </div>
      ):''}
      </div>
    )
}

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
  margin-bottom: 3px; margin-left: 5px;
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
  display: flex;
  font-size: 14px;
  color: "#C4C4C4";
  background-color: transparent;
  border: none;
  margin-top: 10px; margin-bottom: 5px;
  margin-left: 900px;
  cursor: pointer;
`
const HeartImg = styled.div`
  display: inline-flex;
  position: relative;
  width: 20px; height: 18px;
  margin-right: 5px;
  :before,
  :after {
    position: absolute;
    content: "";
    left: 10px;
    top: 0;
    width: 10px; height: 16px;
    background: ${props => props.color};
    border-radius: 10px 10px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }
  :after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`
const FontChange = styled.div`
  font-weight: ${props => props.weight};
  font-size: 13px;
`

export default PostDetail;