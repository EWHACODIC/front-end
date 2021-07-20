import React from "react";
import styled from "styled-components";
import Input from "./Input"
import Lock from "../assets/login-lock.png"

const Wrapper = styled.div`
    font-family: 'Noto Sans KR';
    position: absolute;
`

const Login = () => {
    return (
        <Wrapper>
            <hr size='3' color='black'></hr>
            <img src={Lock}></img><a>LOGIN</a>
            <Input name="ID"></Input>
            <Input name="PASSWORD"></Input>
            <hr size='3' color='black'></hr>
        </Wrapper>
    )
}

export default Login;