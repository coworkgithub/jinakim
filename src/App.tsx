import React from 'react';
import './App.css';
import { latestBoardListMock } from 'mocks';
import BoardListItem from 'components/BoardListItem';
 
function App() {
  return (
    <>
    {latestBoardListMock.map(boardListItem => <BoardListItem boardListItem = {boardListItem}/>)}
    </>
  );
}

export default App;
