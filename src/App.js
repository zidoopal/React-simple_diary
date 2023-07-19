import { useRef, useState } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

// DiaryEditor 이하 D.E. / DiaryList 이하 D.L. / DiaryItem  이하 D.I.
// Review - App Component가 D.E. 와 D.L. 가 함께 사용할 일기 데이터를 가지고 있음(State로)
function App() {
  // 전역적으로 데이터를 관리할 State, 일기data 배열을 저장 - 초기 값 배열로
  const [data, setData] = useState([]);

  // 일기가 추가될 때 마다 id가 부여되는 함수
  const dataId = useRef(0);

  // 새로운 일기 추가하는 함수
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
      // ㄴ> current == 어떤 DOM도 선택하지 않고 just'0'을 가리키고 있는 상태
    };
    dataId.current += 1; // 일기 추가 될 때마다 아이디 ++1 되어야 함
    setData([newItem, ...data]); // newItem이 먼저 최상단으로 > 그 다음 기존 데이터
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} />
    </div>
  );
}

export default App;
