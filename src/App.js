import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

// 예시용 - 임시배열 만들어서 DiaryList 컴포넌트에 props 데이터 전달, 리스트로 렌더링 연습
const dummyList = [
  {
    id: 1,
    author: '두팔',
    content: '공부 열심히하자 :)',
    emotion: '🤩',
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: '2팔',
    content: '정신차려',
    emotion: '😡',
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: '지둡할',
    content: '공부 열심히하자 :)',
    emotion: '😭',
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
