import { useState, useRef } from 'react';

const DiaryItem = ({
  author,
  content,
  created_date,
  emotion,
  id,
  onRemove,
  onEdit,
}) => {
  //
  // isEdit > 현재 수정 중 ? yes : no (기본 값: false)
  const [isEdit, setIsEdit] = useState(false);
  // toggleIsEdit > 호출이 되는 순간, 원래 isEdit이 갖고 있던 값을 반전시킨다
  const toggleIsEdit = () => setIsEdit(!isEdit);

  //
  // 수정 textarea 입력하는 data도 리액트에서 state로 핸들링 할 수 있도록-
  // textarea의 input을 핸들링 할 state
  const [localContent, setLocalContent] = useState(content);
  const localContentInput = useRef();

  // 수정 foam 입력 중 돌아가기 버튼 누르고 다시 수정하기 버튼 누르면 이전 입력했던 내용들이 초기화 되지 않고 남아있는 상황
  // 👉 why? :: 수정 foam을 관리하는 state가 기존의 'content' props가 아니라 'localContent'  state임.
  //
  // 수정 foam 초기화 함수
  const handleQuitEdit = () => {
    // 수정 중 아니라면, setLocalContent의 값을 다시 content로 바꿔줘~
    setIsEdit(false);
    setLocalContent(content);
  };

  // 수정완료 버튼 눌렀을 때 이벤트를 처리 할 함수
  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }

    if (window.confirm(`${id}번째 일기를 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  };

  // 삭제 버튼 눌렀을 때 이벤트를 처리 할 함수
  const handleRemove = () => {
    // id는 0번 부터 시작이라 알림창에는 +1 해서 1번째 부터 보이게..
    if (window.confirm(`${id + 1}번째 일기를 정말 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자: {author} | 오늘의 기분 : {emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">
        {isEdit ? (
          <>
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
            ></textarea>
          </>
        ) : (
          <>{content}</>
        )}
      </div>

      {/* isEdit 상태에 따라 button 바꾸기 */}
      {/* isEdit 상태 == false / 수정 취소 */}
      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>돌아가기</button>
          <button onClick={handleEdit}>수정완료</button>
          {/* 리액트 특성 :: 데이터는 위 → 아래(부모→자식)로 / 이벤트는 아래 → 위 (자식 → 부모 ) */}
          {/* 수정 완료 이벤트 :: D.I.(자식) → App 컴포 (부모) */}
        </>
      ) : (
        <>
          <button onClick={toggleIsEdit}>수정하기</button>
          <button onClick={handleRemove}>삭제하기</button>
        </>
      )}
    </div>
  );
};

export default DiaryItem;
