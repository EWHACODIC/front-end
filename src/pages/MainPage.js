import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Banner from "../assets/MainBanner.png"
import Comment from "../assets/comment.png"
import Heart from "../assets/heart.png"
import View from "../assets/view.png"
import axios from "axios";
axios.defaults.baseURL = "http://34.64.231.193";

const Wrapper = styled.div`
    font-family: 'Noto Sans KR';
`

const MainPage = () => {
    axios.get("/login")
        .then(res => {
            console.log(res);
        })
        .catch(console.log("error"))


    const qnaData = [
        {
            "id": 1,
            "title": "title",
            "view": 8,
            "recommend": 0,
            "commentNum": 2,
        },
        {
            "id": 2,
            "title": "title2222",
            "view": 6,
            "recommend": 0,
            "commentNum": 0,
        },
        {
            "id": 3,
            "title": "title3333333",
            "view": 2,
            "recommend": 0,
            "commentNum": 0,
        },
        {
            "id": 4,
            "title": "자바스크립트 질문이 있습니다",
            "view": 2,
            "recommend": 3,
            "commentNum": 1,
        },
        {
            "id": 5,
            "title": "코딩 그만.....",
            "view": 1,
            "recommend": 0,
            "commentNum": 1,
        }
    ];
    
    return (
        <Wrapper>
            <img src={Banner}></img>

            <div className='container'>
                <h1 className='title'>Q&A</h1>
                <p className='more'>MORE →</p>
                <div className="board">
                    {qnaData.map(qna =>{
                        return <div>
                            <a>{qna.title}</a>
                            <div className="board-info">
                                <img src={Comment}></img><a>{qna.commentNum}</a>
                                <img src={Heart}></img><a>{qna.recommend}</a>
                                <img src={View}></img><a>{qna.view}</a>
                            </div>
                        </div>
                    })}
                </div>
            </div>

            <div className='container' style={{width: '565px', display: 'inline-block', marginRight: '53px'}}>
                <h1 className='title'>COMMUNITY</h1>
                <p className='more'>MORE →</p>
                <div className="board">
                    {qnaData.map(qna =>{
                        return <div>
                            <a>{qna.title}</a>
                            <div className="board-info">
                                <img src={Comment}></img><a>{qna.commentNum}</a>
                                <img src={Heart}></img><a>{qna.recommend}</a>
                                <img src={View}></img><a>{qna.view}</a>
                            </div>
                        </div>
                    })}
                </div>
            </div>

            <div className='container' style={{width: '565px', display: 'inline-block'}}>
                <h1 className='title'>STUDY</h1>
                <Link to="/study"><p className='more'>MORE →</p></Link>
                <div className="board">
                    {qnaData.map(qna =>{
                        return <div>
                            <a>{qna.title}</a>
                            <div className="board-info">
                                <img src={Comment}></img><a>{qna.commentNum}</a>
                                <img src={Heart}></img><a>{qna.recommend}</a>
                                <img src={View}></img><a>{qna.view}</a>
                            </div>
                        </div>
                    })}
                </div>
            </div>

            <div className='container'>
                <h1 className='title'>TECH&JOB</h1>
                <Link to="/tech"><p className='more'>MORE →</p></Link>
                <div className="board">
                    {qnaData.map(qna =>{
                        return <div>
                            <a>{qna.title}</a>
                            <div className="board-info">
                                <img src={Comment}></img><a>{qna.commentNum}</a>
                                <img src={Heart}></img><a>{qna.recommend}</a>
                                <img src={View}></img><a>{qna.view}</a>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </Wrapper>
    )
}

export default MainPage;