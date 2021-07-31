import React from "react";
import styled from "styled-components";
import Lock from "../assets/login-lock.png"
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080";

const Wrapper = styled.div`
    font-family: 'Noto Sans KR';
    position: absolute;
    width: 200px;
    left: 240px;
`

const Input = styled.input`
    border: 2.5px solid #C4C4C4;
    border-radius: 5px;
    box-sizing: border-box;
    line-height: 23px;
    display: block;
    margin-top: 1px;
    width: 130px;
`

const Button = styled.button`
    background: #C4C4C4;
    border-radius: 2px; 
    border: none;
    color: white;
    width: 60px;
    height: 62px;
    float: right;
`

const ButtonJoin = styled.button`
    background: #C4C4C4;
    border-radius: 2px;
    border: none;
    color: white;
    font-size: 12px;
    height: 25px;
`

const Login = () => {
    const { register, handleSubmit } = useForm();
    const history = useHistory();
    //로그인 정보 백으로 전송
    const onSubmit = (data) =>
        axios.post('/login', JSON.stringify(data))
        .then(history.push('/mypage'));

    //axios로 로그인 정보 받아오기(백 미구현)
    //if(axios.get('/login')
        //.then return <userInfo/>
        //로그인 정보 없을 시
        //.catch() 
        return (
            <Wrapper>
                <hr size='2' color='black'></hr>
                <img src={Lock}></img><a> LOGIN</a>
                <form onSubmit={handleSubmit(onSubmit)} style={{marginTop:'10px'}}>
                    <div style={{ display: 'inline-block', marginRight: '4px' }}>
                        <Input placeholder='ID' {...register('userId', { required: true })}></Input>
                        <Input placeholder='PASSWORD' {...register('password', { required: true })}></Input>
                    </div>
                    <Button type="submit">Log-in</Button>
                </form>
                <hr size='1' color='grey'></hr>
                <div style={{textAlign: 'center'}}>
                    <ButtonJoin style={{width: '30%', marginRight: '5%'}}>회원가입</ButtonJoin>
                    <ButtonJoin style={{width: '60%'}}>아이디 / 비번 찾기</ButtonJoin>
                </div>
                <hr size='2' color='black'></hr>
            </Wrapper>
        );
}

export default Login;