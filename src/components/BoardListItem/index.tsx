import React from 'react'
import './style.css';
import { BoardListItem } from 'types/interface';
import { useNavigate } from 'react-router-dom';
import defaultProfileImage from 'assets/image/default-profile-image.png'

interface Props{
    boardListItem: BoardListItem //boardListItem이라는 이름으로 BoardListItem 타입의 객체를 받도록 정의
}

//          component : Board List Item 컴포넌트            //
export default function BoardItem( {boardListItem}:Props ) { // Props 객체의 boardListItem 속성을 변수로 가져오는 방식

    //          properties                          //
    
    const{boardNumber, title, content, boardTitleImage} = boardListItem; 
    //boardListItem 객체에서 boardNumber, title, content, boardTitleImage 속성을 추출

    const{favoriteCount, commentCount, viewCount}= boardListItem;
    const{writeDatetime, writerNickname, writerProfileImage}= boardListItem;

    //          function: 네비게이트 함수           //
    //const navigator = useNavigate();

    //          event handler : 게시물 아이템 클릭 이벤트 처리 함수     //
    const onClickHandler = () => {
    //    navigator(boardNumber);
    }

//          component : Board List Item 컴포넌트 렌더링     //
  return (
    <div className = 'board-list-item' onClick={onClickHandler}>
        <div className = 'board-list-item-main-box'>
            <div className = 'board-list-item-top'>
                <div className = 'board-list-item-profile-box'>
                    <div className = 'board-list-item-profile-image' style={{backgroundImage: `url(${writerProfileImage ? writerProfileImage : defaultProfileImage})`}}></div>
                </div>
                <div className = 'board-list-item-write-box'>
                    <div className = 'board-list-item-nickname'>{writerNickname}</div>
                    <div className = 'board-list-item-write-date'>{writeDatetime}</div>
                </div>
                <div className = 'board-list-item-write-box'>
                    <div className = 'board-list-item-nickname'>{writerNickname}</div>
                    <div className = 'board-list-item-write-date'>{writeDatetime}</div>
                </div>

                <div className = 'board-list-item-write-box'>
                    <div className = 'board-list-item-nickname'>{writerNickname}</div>
                    <div className = 'board-list-item-write-date'>{writeDatetime}</div>
                </div>
            </div>
            <div className = 'board-list-item-middle'>
                <div className = 'board-list-item-title'>{title}</div>
                <div className = 'board-list-item-content'>{content}</div>
            </div>
            <div className = 'board-list-item-bottom'>
                <div className = 'board-list-item-counts'>{`댓글 ${commentCount} 좋아요 ${favoriteCount} 조회수 ${viewCount}`}</div>
            </div>
        </div>
        {boardTitleImage !== null && (
        <div className = 'board-list-item-image-box'>
            <div className = 'board-list-item-image' style={{backgroundImage: `url(${boardTitleImage})`}}></div>
        </div>
        )}
    </div>
  )
}