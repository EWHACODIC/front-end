import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import '../style/Signup.css';
import Login from '../component/Login';
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

    const { register, handleSubmit, getValues, formState: { errors } } = useForm();

    //폼에서 제출한 데이터 백으로 post, 홈으로 redirect(나중에 라우터 path로 변경필)
    const onSubmit = (data) =>
        fetch(`http://localhost:3000`)
        .then(
            axios.post('/api/signup', JSON.stringify(data)))

    //이메일 인증
    const emailCertify = () => {
        const email = 'test@ewhain.net';
        console.log(email);
        axios.post('/CheckMail', {
            email:email
          })
          .then(function (response) {
            alert("인증번호가 전송되었습니다.");
            const isCertification=true;
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
                        {...register('userId', { required: true })}
                        placeholder='유레카 이메일' style= {{ width: '15vw', display: 'inline-block' }} />
                    <span> @ ewhain.net </span> <button class="emailCertify" onClick={emailCertify}> 이화인 인증 </button>
                    <br></br><br></br>
                    <InputBox
                        {...register('password', { required: true })}
                        placeholder='비밀 번호' style= {{ width: '40vw' }} />
                    <InputBox
                        {...register('password_confirm',
                            { required: true,
                                validate: {
                                    matchesPreviousPassword: (value) => {
                                        const { password } = getValues();
                                        return password === value || "입력한 비밀번호와 다릅니다."; }
                            }}
                        )}
                        placeholder='비밀 번호 확인' style= {{ width: '40vw' }} />
                    {/* 비밀번호 불일치 시 메시지 */}
                    {errors.password_confirm && (
                        <a style={{display: 'block'}}>{errors.password_confirm.message}
                        </a>
                    )}
                    <a>비밀번호는 영문소문자와 숫자의 조합으로 8-16자</a><br></br>
                    <InputBox
                        {...register('githubName', { required: true })}
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