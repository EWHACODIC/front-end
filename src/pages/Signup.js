import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import '../style/Signup.css';
import Login from '../Component/Login';
import axios from "axios";
axios.defaults.baseURL = "http://34.64.231.193";

const Wrapper = styled.div`
    text-align: left;
    display: inline-block;
    font-size: 20px;
    font-family: 'Noto Sans KR';
    margin-top: 40px;
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
    const history = useHistory();

    //폼에서 제출한 데이터 백으로 post, 홈으로 redirect
    const onSubmit = (data) => {
        axios.post('/api/signup', JSON.stringify(data))
        .then(function (response) {
            alert("회원가입이 완료되었습니다.");
            history.push('/');
        })
        .catch(function (error) {
            alert("에러");
        })
    }

    //이메일 인증
    const emailCertify = () => {

        const email = document.getElementById("email_input").value;

        axios.post('/api/email/verify', email)
          .then(function (response) {
            alert("인증번호가 전송되었습니다.");
            
          })
          .catch(function (error) {
            alert("에러");
          });
    }

    //function compare() {
        //if (document.getElementById("email_code").value == code) {   //인증 키 값을 비교를 위해 텍스트인풋과 벨류를 비교
			//document.getElementById("compare-text").text("인증 성공");
			//const isCertification = true;  //인증 성공여부 check
		//} else {
			//document.getElementById("compare-text").text("불일치").css("color", "red");
			//const isCertification = false; //인증 실패
		//}
    //}

    return (
        <div>
            <Wrapper>
                <Login></Login>
                <h1 className='title'>회원가입</h1>
                <hr size='10' color='#49A862'></hr>
                <a className='sub_title'>이메일로 가입하기</a>
                <form onSubmit={handleSubmit(onSubmit)} className='form'>
                    <InputBox
                        {...register('userId', { required: true })}
                        id='email_input' placeholder='유레카 이메일' style= {{ width: '15vw', display: 'inline-block' }} />
                    <span> @ ewhain.net </span> <button class="emailCertify" onClick={emailCertify}> 이화인 인증 </button>
                    <br></br>

                    <InputBox
                        id='email_code' placeholder='인증번호' style= {{ width: '15vw', display: 'inline-block' }} />
                        <span className='compare-text'></span>
                    <br></br><br></br>

                    <InputBox
                        {...register('password', { required: true })}
                        placeholder='비밀 번호' type='password' style= {{ width: '40vw' }} />

                    <InputBox
                        {...register('password_confirm',
                            { required: true,
                                validate: {
                                    matchesPreviousPassword: (value) => {
                                        const { password } = getValues();
                                        return password === value || "입력한 비밀번호와 다릅니다."; }
                            }}
                        )}
                        placeholder='비밀 번호 확인' type='password' style= {{ width: '40vw' }} />
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