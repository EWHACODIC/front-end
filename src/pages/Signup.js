import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import '../style/Signup.css';
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080";

const Wrapper = styled.div`
    text-align: left;
    display: inline-block;
    font-size:20px;
    font-family: 'Noto Sans KR';
`

const Button = styled.button`
    background: #48A560;
    border-radius: 5px;
    width: -webkit-fill-available;
    color: white;
    border: none;
    font-size: 20px;
    line-height: 30px;
    margin-top: 20vh;
    margin-bottom: 15px;

`

const InputBox = styled.input`
    border: 2.5px solid #C4C4C4;
    border-radius: 5px;
    box-sizing: border-box;
    font-size:20px;
    line-height: 2vw;
    display: block;
    margin-top: 10px;
`

const Signup = () => {

    //입력받은 데이터 콘솔에 출력
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    //이메일 인증 백으로 post
    const email = 'test@ewhain.net';
    const emailCertify = () => {
        axios.post('/CheckMail', {
            email:email
          })
          .then(function (response) {
            alert("인증번호가 전송되었습니다.");
          })
          .catch(function (error) {
            alert("에러");
          });
    }

    return (
        <div>
            <Wrapper>
                <h1 className='title'>회원가입</h1>
                <hr size='10' color='#49A862'></hr>
                <a className='sub_title'>이메일로 가입하기</a>
                <form onSubmit={handleSubmit(onSubmit)} className='form'>
                    <InputBox
                        {...register('email', { required: true })}
                        placeholder='유레카 이메일' style= {{ width: '15vw', display: 'inline-block' }} />
                    <span> @ ewhain.net</span> <button onClick={emailCertify}>이화인 인증</button>
                    <InputBox
                        {...register('password', { required: true })}
                        placeholder='비밀 번호' style= {{ width: '40vw' }} />
                    <InputBox
                        {...register('password_2', { required: true })}
                        placeholder='비밀 번호 확인' style= {{ width: '40vw' }} />
                    <a>비밀번호는 영문소문자와 숫자의 조합으로 8-16자</a><br></br>
                    <InputBox
                        {...register('github', { required: true })}
                        placeholder='깃허브 아이디' style= {{ width: '40vw' }} />
                    <Button type="submit">아래 약관을 동의하며 계정 생성</Button>
                    <div className="info">
                        <span>회원가입 약관</span>
                        <span>개인정보취급방침</span>
                    </div>
                </form>
            </Wrapper>
        </div>
    )
}

export default Signup;