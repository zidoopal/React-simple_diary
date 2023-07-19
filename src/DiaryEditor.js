import React, { useRef, useState } from 'react';

const DiaryEditor = () => {
  // DOM 요소를 선택하는 useRef (react에서 DOM 조작하기)
  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    author: '',
    content: '',
    emotion: 1,
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      // alert('작성자명은 최소 1글자 이상 입력해주세요');
      // focus
      // alert 대신 focus 효과로 대신해보기
      authorInput.current.focus();
      return;
    }

    if (state.content.length < 5) {
      // focus
      contentInput.current.focus();
      return;
    }

    alert('저장 성공 :)');
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          placeholder="작성자명을 입력해주세요"
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          placeholder="오늘의 일들을 적어보세요 :)"
          name="content"
          value={state.content}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <span>오늘의 기분: </span>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>😊</option>
          <option value={2}>😭</option>
          <option value={3}>😶</option>
          <option value={4}>🤩</option>
          <option value={5}>🤢</option>
          <option value={5}>😡</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>저장하기</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
