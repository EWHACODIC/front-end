import React from "react";
import styled from "styled-components";
import '../style/MakeStudy.css';

const Wrapper = styled.div `
    width: 700px;
    text-align: left;
    margin: auto;
    font-size: 20px;
`

const Input = styled.input`
    border: none;
    border-bottom: 2px solid #000000;
    line-height: 29px;
    color: #AEAEAE;
    font-size: 18px;
`

const Textarea = styled.textarea`
    width: 700px;
    height: 180px;
    border: 2.5px solid #C4C4C4;
    box-sizing: border-box;
    border-radius: 5px;
    resize: none;
    font-size: 18px;
    font: inherit;
`

const Button = styled.button`
    width: 217px;
    height: 59px;
    background: #C9E492;
    border-radius: 5px;
    grid-column: 3/4;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 35px;
    color: #000000;
`

const MakeStudy = () => {
    return (
        <Wrapper>
            <h1 className='title'>STUDY</h1>
            <hr size='10' color='#49A862'></hr>
            <div class="form">
                <form action="">
                    <div style={{gridColumn: '1 / 3'}}>
                        <p>스터디명</p>
                        <Input type='text' placeholder='그룹명을 입력해주세요.' style={{width: '435px'}}></Input>
                    </div>
                    <div>
                        <p>스터디 유형</p>
                        <Input type='text' placeholder='online/offline'></Input>
                    </div>
                    <div>
                        <p>모집인원</p>
                        <Input type='text' placeholder='n명'></Input>
                    </div>
                    <div>
                        <p>진행 요일</p>
                        <Input type='text' placeholder='없음'></Input>
                    </div>
                    <div>
                        <p>비밀번호 설정</p>
                        <Input type='password' placeholder='없음 / ****'></Input>
                    </div>
                    <div>
                        <p>목표 시간</p>
                        <Input type='text' placeholder='n시간'></Input>
                    </div>
                    <div>
                        <p>여는 시간</p>
                        <Input type='text' placeholder='00 : 00'></Input>
                    </div>
                    <div>
                        <p>마치는 시간</p>
                        <Input type='text' placeholder='00 : 00'></Input>
                    </div>
                    <div style={{gridColumn: '1 / 4'}}>
                        <p>내용</p>
                        <Textarea placeholder='상세 내용을 입력하세요.'></Textarea>
                    </div>

                    <Button type='submit'>스터디 만들기</Button>

                </form>
            </div>
        </Wrapper>
    )
}

export default MakeStudy;