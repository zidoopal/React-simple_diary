const DiaryItem = ({
  author,
  content,
  created_date,
  emotion,
  id,
  onDelete,
}) => {
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자: {author} | 오늘의 기분 : {emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">{content}</div>
      <button
        onClick={() => {
          console.log(id);
          // id는 0번 부터 시작이라 알림창에는 +1 해서 1번째 부터 보이게..
          if (window.confirm(`${id + 1}번째 일기를 정말 삭제하시겠습니까?`)) {
            onDelete(id);
          }
        }}
      >
        삭제하기
      </button>
    </div>
  );
};

export default DiaryItem;
