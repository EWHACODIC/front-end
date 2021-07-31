import React, {useEffect, useState} from "react";
import '../style/board.css'
import styled from "styled-components";
import commentImg from "../assets/comment.svg";
import heartImg from "../assets/heart.svg";
import viewImg from "../assets/view.svg";
import userImg from "../assets/user.svg";
import axios from "axios";

function Board({type, pageNum, sort}) {
  const [postList, setPostList] = useState();
  useEffect(async () => {
    try {
      const posts = await axios.get(`http://localhost:8080/api/${type}/list?page=${pageNum}&size=12&sort=${sort}`);
      setPostList(posts.data);
      console.log(postList);
    }catch(e) {
      console.log(e);
    }
  }, []);
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
                    {item.tag2 ? <div><Tag># {item.tag1}</Tag><Tag># {item.tag2}</Tag></div>:<Tag># {item.tag1}</Tag>}
                    <div className='listTitle'>{ item.title }</div>
                  </td>
                  <td className='postInfo'>
                    {item.commentCount != null ?
                      <div><img src = {commentImg} className='smallImg' />{ item.commentCount }</div>:
                      <div><img src = {commentImg} className='smallImg' />0</div>
                    }
                  </td>
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
