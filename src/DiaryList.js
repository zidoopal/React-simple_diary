import DiaryItem from './DiaryItem';

const DiaryList = ({ diaryList }) => {
  console.log(diaryList);
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 작성되었어요 :) </h4>
      <div>
        {/* 만약 key값이 없을 경우 map의 2번째 인자로 idx 넣어주기 */}
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

// 만약 App.js에서 실수로 <DiaryList diaryList={undefined} /> 으로 전달했다해도, 에러나지 않도록
// (당연히 undefined에는 length prop없음)
// defaultProps 설정 빈 배열로.(undefined으로 전달 될 것 같은 props들을 기본 값 설정할 수 있는 기능)
DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
