import React, {useEffect, useState} from "react";
import '../style/board.css'
import styled from "styled-components";
import commentImg from "../assets/comment.svg";
import heartImg from "../assets/heart.svg";
import viewImg from "../assets/view.svg";
import userImg from "../assets/user.svg";
import axios from "axios";

const postList = [
  {
    "id": 1,
    "title": "title",
    "tag": ["태그"],
    "view": 8,
    "recommend": 0,
    "commentNum": 2,
    "userCode": 1234,
    "createDate": "2018-11-12T13:00:00",
    "modifiedDate": "2018-11-12T13:00:00"
  },
  {
    "id": 2,
    "title": "title2222",
    "tag": ["태그"],
    "view": 6,
    "recommend": 0,
    "commentNum": 0,
    "userCode": 1234,
    "createDate": "2018-11-12T13:00:00",
    "modifiedDate": "2018-11-12T13:00:00"
  },
  {
    "id": 3,
    "title": "title2222",
    "tag": ["태그"],
    "view": 2,
    "recommend": 0,
    "commentNum": 0,
    "userCode": 1234,
    "createDate": "2018-11-12T13:00:00",
    "modifiedDate": "2018-11-12T13:00:00"
  },
  {
    "id": 4,
    "title": "title2222",
    "tag": ["태그"],
    "view": 2,
    "recommend": 0,
    "commentNum": 0,
    "userCode": 1234,
    "createDate": "2018-11-12T13:00:00",
    "modifiedDate": "2018-11-12T13:00:00"
  },
  {
    "id": 5,
    "title": "title2222",
    "tag": ["태그"],
    "view": 2,
    "recommend": 0,
    "commentNum": 0,
    "userCode": 1234,
    "createDate": "2018-11-12T13:00:00",
    "modifiedDate": "2018-11-12T13:00:00"
  },
  {
    "id": 6,
    "title": "title2222",
    "tag": ["태그"],
    "view": 2,
    "recommend": 0,
    "commentNum": 0,
    "userCode": 1234,
    "createDate": "2018-11-12T13:00:00",
    "modifiedDate": "2018-11-12T13:00:00"
  },
  {
    "id": 7,
    "title": "title2222",
    "tag": ["태그"],
    "view": 2,
    "recommend": 0,
    "commentNum": 0,
    "userCode": 1234,
    "createDate": "2018-11-12T13:00:00",
    "modifiedDate": "2018-11-12T13:00:00"
  },
  {
    "id": 8,
    "title": "title2222",
    "tag": ["태그"],
    "view": 2,
    "recommend": 0,
    "commentNum": 0,
    "userCode": 1234,
    "createDate": "2018-11-12T13:00:00",
    "modifiedDate": "2018-11-12T13:00:00"
  },
  {
    "id": 9,
    "title": "title2222",
    "tag": ["태그"],
    "view": 2,
    "recommend": 0,
    "commentNum": 0,
    "userCode": 1234,
    "createDate": "2018-11-12T13:00:00",
    "modifiedDate": "2018-11-12T13:00:00"
  },
  {
    "id": 10,
    "title": "title2222",
    "tag": ["태그"],
    "view": 2,
    "recommend": 0,
    "commentNum": 0,
    "userCode": 1234,
    "createDate": "2018-11-12T13:00:00",
    "modifiedDate": "2018-11-12T13:00:00"
  },
  {
    "id": 11,
    "title": "title2222",
    "tag": ["태그"],
    "view": 2,
    "recommend": 0,
    "commentNum": 0,
    "userCode": 1234,
    "createDate": "2018-11-12T13:00:00",
    "modifiedDate": "2018-11-12T13:00:00"
  },
  {
    "id": 12,
    "title": "title2222",
    "tag": ["태그"],
    "view": 2,
    "recommend": 0,
    "commentNum": 0,
    "userCode": 1234,
    "createDate": "2018-11-12T13:00:00",
    "modifiedDate": "2018-11-12T13:00:00"
  }
]

function Board({path, pageNum}) {
  console.log(pageNum);
  {/*const [postList, setPostList] = useState([]);
  useEffect(async () => {
    try {
      const posts = await axios.get(path+String(pageNum)+'&size=12');
      setPostList(posts);
      console.log(postList);
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
                    <div className='listTitle'>{ item.title }</div>
                  </td>
                  <td className='postInfo'>
                    <img src = {commentImg} className='smallImg' />{ item.commentNum }</td>
                  <td className='postInfo'>
                    <img src = {heartImg} className='smallImg' />{ item.recommend }</td>
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
