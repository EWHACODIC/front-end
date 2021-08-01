import React, { useState } from "react";
import styled from "styled-components";
import Lock from "../assets/login-lock.png"
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Letter from "../assets/letter.png"
import Logout from "../assets/logout.png"
import axios from "axios";
axios.defaults.baseURL = "http://34.64.231.193";

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
    const onSubmit = (data) => {
        axios.post('/login', data)
        .then(
            //로그인 완료시 mypage로 이동
            history.push('/mypage'),
            //로그인한 userId 세션스토리지에 저장
            function (response) {
                sessionStorage.setItem('userId', response['userId']);
            }
        )
        .catch(alert("로그인에 실패했습니다."));
    }
    
    //이미 로그인을 했을 경우(세션스토리지에 데이터가 있을 경우)
    if (sessionStorage.getItem('userId') != null && sessionStorage.getItem('userId') != 'undefined' ) {
        return ( <Welcome></Welcome> )
    }
    else {
        return (
            //로그인 폼
            <Wrapper>
                <hr size='2' color='black'></hr>
                <img src={Lock}></img><a> LOGIN</a>
                <form onSubmit={handleSubmit(onSubmit)} style={{marginTop:'10px'}}>
                    <div style={{ display: 'inline-block', marginRight: '4px' }}>
                        <Input placeholder='ID' {...register('userId', { required: true })}></Input>
                        <Input placeholder='PASSWORD' {...register('password', { required: true })} type='password'></Input>
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
}

//로그인 성공 시, 로그인폼이 아닌 유저 info로 전환
const Welcome = ()=> {
    return (
      <Wrapper>
        <hr size='2' color='black'></hr>
        <div style={{textAlign: 'left'}}>
            <Profile />
            <a style={{fontSize: '18px', lineHeight: '26px'}}>안녕하세요 <br></br> {sessionStorage.getItem('userId')}님</a>
        </div>
        <hr size='1' color='grey'></hr>
        <div style={{textAlign: 'center', margin: '12px'}}>
            <img src={Letter}></img>
            <a style={{marginRight: '10px'}}>쪽지 0통</a>
            <img src={Logout}></img>
            <a>로그아웃</a>
        </div>
        <div style={{textAlign: 'center'}}>
            <hr size='1' color='grey'></hr>
            <p>마이페이지</p>
            <hr size='1' color='grey'></hr>
            <p>내 공감글 보기</p>
            <hr size='2' color='black'></hr>
        </div>
      </Wrapper>
      )
}

const Profile = styled.div`
    background: #C4C4C4;
    border-radius: 10px;
    width: 51px;
    height: 51px;
    float: left;
    display: inline-block;
    font-size: 18px;
    margin-right: 16px;
    text-align: left;
`

export default Login;