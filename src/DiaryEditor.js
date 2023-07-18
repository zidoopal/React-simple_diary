import React, { useState } from 'react';

const DiaryEditor = () => {
  const [state, setState] = useState({
    author: '',
    content: '',
    emotion: 1,
  });

  const handleChangeState = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(state);
    alert('저장 성공 :)');
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
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
