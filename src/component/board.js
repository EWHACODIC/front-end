import React from "react";
import './board.css'
import styled from "styled-components";
import commentImg from "../assets/comment.svg";
import heartImg from "../assets/heart.svg";
import viewImg from "../assets/view.svg";
import userImg from "../assets/user.svg";

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

function Board(props) {
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
            props.dataList ? props.dataList.map((item, index) => {
              return (
                <tr key = {index}>
                  <td className='postOrder'>{ item.id }</td>
                  <td className='postTitle'>
                    {item.tag.length === 2 ? <div><Tag># {item.tag[0]}</Tag><Tag># {item.tag[1]}</Tag></div>:<Tag># {item.tag}</Tag>}
                    <LineBreak>{ item.title }</LineBreak>
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
              )
            }) : ''
          }
        </tbody>
      </table>
    </div>
  );
}

export default Board;
