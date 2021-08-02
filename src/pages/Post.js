import React, {useEffect, useState} from "react";
import '../style/Post.css';
import styled from "styled-components";
import SideLogin from "../component/sideLogin";
import axios from "axios";

function Post() {
  const [type, setType] = useState();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [tagList, setTagList] = useState([]);
  const [user, setUser] = useState(123);
  const typeHandler = (e) => {
    e.preventDefault();
    setType(e.target.value);
  };
  const titleHandler = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const contentHandler = (e) => {
    e.preventDefault();
    setContent(e.target.value);
  };
  const tagHandler = (e) => {
    e.preventDefault();
    setTagList(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(type);
    console.log(title);
    console.log(content);
    console.log(tagList);
    console.log(user);
    let body = {
      title: title,
      content: content,
      tag: tagList,
      userId: user,
    };
    axios
      .post(`http://localhost:8080/api/${type}/new`, body)
      .then((res)=>console.log(res));
  };
  return (
    <div style={{'display': 'flex'}}>
      <SideLogin />
      <PostComponent>
        <Title>새 글 쓰기</Title>
        <TopBar />
        <form style={{'width': '970px'}}>
          <div style={{'margin-left': '25px'}}>
            <div style={{'margin-bottom': '30px'}}>
              <DropDown>
                <BoardOption value={"none"}>게시판을 선택해주세요</BoardOption>
                <BoardOption value={"qna"}>Q&A</BoardOption>
                <BoardOption value={"community"}>COMMUNITY</BoardOption>
                <BoardOption value={"tech"}>TECH&JOBs</BoardOption>
              </DropDown>
              <div style={{"display": "inline-flex", "justify-content": "flex-end", "width": "510px"}}>
                <RegisterBtn>등록</RegisterBtn>
              </div>
            </div>
            <TitleInput />
            <ContentBox><ContentInput/></ContentBox>
          </div>
          <MiddleBar />
        <TagTitle>태그 선택 <div style={{'margin-left': '10px', 'margin-top': '6px'}}>(최대 2개 선택가능)</div></TagTitle>
        <div style={{'display':'inline-flex', 'flex-wrap':'wrap', 'width': '860px', 'text-align': 'left'}}>
          <TagInput className='tagInput' id='btn_01' value="C"/><label className='tagLabel' for='btn_01'>C</label>
          <TagInput className='tagInput' id='btn_02' value="C#"/><label className='tagLabel' for='btn_02'>C#</label>
          <TagInput className='tagInput' id='btn_03' value="C++"/><label className='tagLabel' for='btn_03'>C++</label>
          <TagInput className='tagInput' id='btn_04' value="java"/><label className='tagLabel' for='btn_04'>java</label>
          <TagInput className='tagInput' id='btn_05' value="go"/><label className='tagLabel' for='btn_05'>go</label>
          <TagInput className='tagInput' id='btn_06' value="swift"/><label className='tagLabel' for='btn_06'>swift</label>
          <TagInput className='tagInput' id='btn_07' value="kotlin"/><label className='tagLabel' for='btn_07'>kotlin</label>
          <TagInput className='tagInput' id='btn_08' value="python"/><label className='tagLabel' for='btn_08'>python</label>
          <TagInput className='tagInput' id='btn_09' value="unity"/><label className='tagLabel' for='btn_09'>unity</label>
          <TagInput className='tagInput' id='btn_10' value="react"/><label className='tagLabel' for='btn_10'>react</label>
          <TagInput className='tagInput' id='btn_11' value="redux"/><label className='tagLabel' for='btn_11'>redux</label>
          <TagInput className='tagInput' id='btn_12' value="html"/><label className='tagLabel' for='btn_12'>html</label>
          <TagInput className='tagInput' id='btn_13' value="mysql"/><label className='tagLabel' for='btn_13'>mysql</label>
          <TagInput className='tagInput' id='btn_14' value="nosql"/><label className='tagLabel' for='btn_14'>nosql</label>
          <TagInput className='tagInput' id='btn_15' value="css"/><label className='tagLabel' for='btn_15'>css</label>
          <TagInput className='tagInput' id='btn_16' value="javascript"/><label className='tagLabel' for='btn_16'>javascript</label>
          <TagInput className='tagInput' id='btn_17' value="spring"/><label className='tagLabel' for='btn_17'>spring</label>
          <TagInput className='tagInput' id='btn_18' value="springboot"/><label className='tagLabel' for='btn_18'>springboot</label>
          <TagInput className='tagInput' id='btn_19' value="express"/><label className='tagLabel' for='btn_19'>express</label>
          <TagInput className='tagInput' id='btn_20' value="node.js"/><label className='tagLabel' for='btn_20'>node.js</label>
          <TagInput className='tagInput' id='btn_21' value="django"/><label className='tagLabel' for='btn_21'>diango</label>
          <TagInput className='tagInput' id='btn_22' value="next.js"/><label className='tagLabel' for='btn_22'>next.js</label>
          <TagInput className='tagInput' id='btn_23' value="diango rest framework"/><label className='tagLabel' for='btn_23'>diango rest framework</label>
        </div>
        </form>
      </PostComponent>
    </div>
  );
}

const Title = styled.div`
  width: 100px;
  flex-direction: row;
  font-size: 24px;
  font-weight: bold;
  border-bottom: 3px solid #49A862;
  margin-right: 365px;
`
const PostComponent = styled.div`
  display: flex; flex: 1; overflow: auto;
  flex-direction: column;
  width: 970px;
`

const TopBar = styled.div`
  width: 970px;
  height: 5px;
  background: #48A560;
  margin-top: 30px; margin-bottom: 20px;
`
const DropDown = styled.select.attrs({
  name: 'boardType'
})`
  display: inline-flex;
  width: 400px;
  border-top: none; border-left: none; border-right: none;
  border-bottom: 2px solid black;
  padding: 5px;
  font-size: 20px;
  cursor:pointer;
  &:focus {outline: none};
`
const BoardOption = styled.option.attrs({
  value: (props) => (props.value)
})`
  padding: 3px;
  font-size: 14px;
`
const RegisterBtn = styled.button.attrs({
  type: "submit"
})`
  width: 60px; height: 40px;
  margin-right: 10px;
  font-size: 16px;
  cursor: pointer;
  border: none; border-radius: 5px;
  background-color: #C9E492;
  font-weight: bold;
  box-shadow: 0px 4px 5px #C4C4C4;
`
const TitleInput = styled.input.attrs({
  placeholder: "제목을 입력해주세요."
})`
  display: flex;
  width: 900px;
  padding-left: 10px; padding-top: 8px; padding-bottom: 8px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 2.5px solid #C4C4C4;
  border-radius: 5px;
`
const ContentBox = styled.div`
  width: 890px; height: 280px;
  border: 2.5px solid #C4C4C4;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 30px;
`
const ContentInput = styled.textarea.attrs({
  placeholder: "내용을 입력하세요."
})`
  display: flex;
  width: 860px; height: 250px;
  border: none; resize: none;
  font-size: 13px;
  &:focus {outline: none};
`
const MiddleBar = styled.div`
  width: 970px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  margin-bottom: 15px;
`
const TagTitle = styled.div`
  display: flex;
  text-align: left;
  font-size: 18px; font-weight: bold;
  margin-left: 25px; margin-bottom: 15px;
`

const TagInput = styled.input.attrs({
  type: 'checkbox'
})
`

`

export default Post;