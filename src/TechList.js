import styled from "styled-components";
import SubBar from './component/subBar';
import Board from './component/board';

const Title = styled.div`
  display: inline-flex;
  flex-direction: row;
  font-size: 24px;
  font-weight: bold;
  border-bottom: 4px solid #49A862;
  margin-right: 350px;
`

function TechList() {
  return (
    <div>
        {/*<Title>TECH&JOBs</Title>
      <SubBar />*/}
      <Board />
    </div>
  );
}

export default TechList;