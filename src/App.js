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

  // 새로운 일기 추가
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

  // 일기 삭제
  // App 컴포넌트에서 직접 onRemove함수 호출하는 것 아니므로,
  // 어떤 id를 갖고있는 요소를 지우기를 원하는 지 매개변수로 전달받게 설정
  const onRemove = (targetId) => {
    //👉 onRemove 함수 어디서 호출해야 함?? (D.I. 배열 요소의 id를 onRemove 에다 전달해줘야됨)
    // == D.I. 이 onRemove 함수를 호출할 수 있어야 함 == D.I.의 부모인 D.L.에 props로 onRemove함수 내려주자.
    console.log(`id: ${targetId} 글이 삭제되었습니다.`);

    // 지워진 아이템의 배열 요소를 제외한 새로운 배열을 만들어서
    // setData(상태변화함수)에 전달해서 데이터 배열 바꿔주자
    const newDiaryItemList = data.filter((it) => it.id !== targetId);
    console.log(newDiaryItemList);
    setData(newDiaryItemList); // 삭제완료 XD
  };

  // 일기 수정
  // 매개변수 : 수정 대상 아이디(targetId), 수정 된 컨텐츠(EditedContent)
  const onEdit = (targetId, EditedContent) => {
    setData(
      // 원본 data배열에 map 메서드 사용
      data.map((it) =>
        it.id === targetId ? { ...it, content: EditedContent } : it
      )
    );
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      {/* D.I.의 부모 > D.L.에 props로 onRemove함수 내려주기  */}
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
