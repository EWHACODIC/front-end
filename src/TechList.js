import React, {useEffect, useState} from "react";
import styled from "styled-components";
import SubBar from './component/subBar';
import Board from './component/board';
import {response} from './boardListEx';

const Title = styled.div`
  display: inline-flex;
  flex-direction: row;
  font-size: 24px;
  font-weight: bold;
  border-bottom: 3px solid #49A862;
  margin-right: 375px;
`

function TechList() {
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);
  useEffect(() => {
      setLoading(true);
      setPostList(response);
      setLoading(false);
  }, [])
  console.log(postList)
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  function currentPosts(tmp) {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
    }
  return (
    <div>
      <Title>TECH&JOBs</Title>
      <SubBar />
      <Board postList={postList} loading={loading} />
    </div>
  );
}

export default TechList;