import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import '../style/board.css'
import styled from "styled-components";
import commentImg from "../assets/comment.svg";
import heartImg from "../assets/heart.svg";
import viewImg from "../assets/view.svg";
import userImg from "../assets/user.svg";
import axios from "axios";

const postList = [
    {
        "id": 17,
        "title": "제목",
        "tag": [
            "unity"
        ],
        "view": 15,
        "recommend": 16,
        "commentCount": 9,
        "userCode": "1234",
        "createDate": "2021-07-10T16:25:38",
        "modifiedDate": "2021-08-01T14:24:54"
    },
    {
        "id": 78,
        "title": "제목제목제목",
        "tag": [
            "React",
            "Spring"
        ],
        "view": 11,
        "recommend": 0,
        "commentCount": 0,
        "userCode": "1234",
        "createDate": "2021-08-01T14:23:52",
        "modifiedDate": "2021-08-01T14:23:52"
    }
]

function Board({type, path}) {
  {/*const [postList, setPostList] = useState();
  useEffect(async() => {
    try {
      const posts = await axios.get(path);
      setPostList(posts.data);
    }catch(e) {
      console.log(e);
    }
  }, []);*/}
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>댓글</th>
            <th>공감</th>
            <th>조회수</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {
            postList ? postList.map(item => (
                <tr key = {item.id}>
                  <td className='postOrder'>{ item.id }</td>
                  <td className='postTitle'>
                    {item.tag.length === 2 ? <div><Tag># {item.tag[0]}</Tag><Tag># {item.tag[1]}</Tag></div>:<Tag># {item.tag}</Tag>}
                    <div className='listTitle'>
                      <Link to={`${type}/postView/${item.id}`} style={{'text-decoration': 'none', 'color': 'black'}}>{ item.title }</Link>
                    </div>
                  </td>
                  <td className='postInfo'>
                    {item.commentCount != null ?
                      <div><img src = {commentImg} className='smallImg' />{ item.commentCount }</div> :
                      <div><img src = {commentImg} className='smallImg' />0</div>
                    }
                  </td>
                  <td className='postInfo'>
                    {item.recommend != null ?
                        <div><img src = {heartImg} className='smallImg' />{ item.recommend }</div> :
                        <div><img src = {heartImg} className='smallImg' />0</div>
                    }
                  </td>
                  <td className='postInfo'>
                    <img src = {viewImg} className='smallImg' />{ item.view }</td>
                  <td className='writer'>
                    <div style ={{"display": "inline-flex"}}><img src = {userImg} />
                      <div>
                        <LineBreak>{ item.userCode }</LineBreak>
                        <LineBreak>{ item.createDate.replace("T", " / ") }</LineBreak>
                      </div>
                    </div>
                  </td>
                </tr>
            )) : ''
          }
        </tbody>
      </table>
    </div>
  );
}

const Tag = styled.div`
  display:inline-flex;
  color: white; text-align: center; font-size: 10px;
  background: #FDCF47; border-radius: 5px;
  padding-left: 5px; padding-right: 5px;
  padding-top: 1px; padding-bottom: 1.5px;
  margin-right: 5px; margin-bottom: 3px;
`
const LineBreak = styled.div`
  display: flex;
`

export default Board;
