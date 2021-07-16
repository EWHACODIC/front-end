import React from "react";
import styled from "styled-components";
import Input from "../component/Input"
import Login from "../component/Login"

const Wrapper = styled.div`
    text-align: left;
    display: inline-block;
    font-size:20px;
    font-family: 'Noto Sans KR';
`

const Button = styled.button`
    color: #48A560, 100%;
`

const Signup = () => {
    return (
        <div>
            <Login></Login>
            <Wrapper>
                <h1 style={{fontSize:"27px"}}>회원가입</h1>
                <a>이메일로 가입하기</a>
                <Input name="아이디" width="40vw"></Input>
                <span>아이디는 영문소문자와 숫자의 조합으로 8~16자</span>
                <Input name="비밀 번호" width="40vw"></Input>
                <Input name="비밀 번호 확인" width="40vw"></Input>
                <Input name="이름" width="20vw"></Input>
                <Input name="유레카 이메일" width="15vw"></Input><span>ewhain.net</span>
                <Input name="깃허브 아이디" width="40vw"></Input>
                <Button>아래 약관을 동의하며 계정 생성</Button>
            </Wrapper>
        </div>
    )
}

export default Signup;