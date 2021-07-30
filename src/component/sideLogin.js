import React, {useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginBox from "../component/Login";
import axios from "axios";

function SideLogin() {
  return (
    <div>
      <SubComponent>
        <LoginBox />
        <PostButton><Link to='/post' style={{'text-decoration':'none', 'color':'black'}}>새 글 쓰기</Link></PostButton>
      </SubComponent>
    </div>
  );
}

const SubComponent = styled.div`
  display: flex; flex-direction: row;
  width: 460px; flex:none;
`
const PostButton = styled.button`
  background: #C9E492;
  width: 180px; height: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px; border: none;
  padding: 10px 20px 10px 20px;
  font-size: 18px; font-weight: bold;
  margin-left: 245px; margin-top: 500px;
  cursor: pointer;
`

export default SideLogin;