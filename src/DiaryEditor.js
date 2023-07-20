import React, { useRef, useState } from 'react';

const DiaryEditor = ({ onCreate }) => {
  const [state, setState] = useState({
    author: '',
    content: '',
    emotion: '',
  });

  // DOM 요소를 선택하는 useRef (react에서 DOM 조작하기)
  const authorInput = useRef();
  const contentInput = useRef();
  const emotionInput = useRef();

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      // alert('작성자명은 최소 1글자 이상 입력해주세요');
      // 작성자 input focus
      // alert 대신 focus 효과로 대신해보기
      authorInput.current.focus();
      return;
    }

    if (state.content.length < 5) {
      contentInput.current.focus();
      return;
    }

    if (state.emotion.length < 1) {
      emotionInput.current.focus();
      return;
    }

    //props로 받은 onCreate를 호출
    onCreate(state.author, state.content, state.emotion);
    alert('저장 성공 :)');
    // 저장 후 작성 폼 데이터 초기값으로
    setState({
      author: '',
      content: '',
      emotion: '',
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          placeholder="작성자명을 입력해주세요."
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
          ref={emotionInput}
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={''}>--</option>
          <option value={'😊'}>😊</option>
          <option value={'😭'}>😭</option>
          <option value={'😶'}>😶</option>
          <option value={'🤩'}>🤩</option>
          <option value={'🤢'}>🤢</option>
          <option value={'😡'}>😡</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>저장하기</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
