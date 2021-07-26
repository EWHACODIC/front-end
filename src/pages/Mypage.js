import React from "react";
import axios from "axios";
import styled from "styled-components";
import '../style/Signup.css';

const Wrapper = styled.div`
    text-align: left;
    display: inline-block;
    font-size:20px;
    font-family: 'Noto Sans KR';
    width: 650px;
`

function Mypage () {

    axios.get("/login")
        .then(res => {
            console.log(res);
        })
        .catch(res => console.log(res))

    return (
        <Wrapper>
            <h1 className='title'>마이페이지</h1>
            <hr size='10' color='#49A862'></hr>
            <div className="user_box">이화인 인증</div>
            <span style={{color: '#228B52'}}>이화인 인증이 완료되었습니다. </span><br/>
            <div className="user_box">아이디</div><br/>
            <div className="user_box">비밀번호</div><br/>
            <div className="user_box">비밀번호 확인</div><br/>
            <div className="user_box">깃허브 아이디</div><br/>
            <div className="user_box">이메일</div> <span id="email"></span><br/>
            <button className="modify">정보수정하기</button>
        </Wrapper>
    )

}

export default Mypage;