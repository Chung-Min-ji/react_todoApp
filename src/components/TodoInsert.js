import {useState, useCallback} from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';

// 새로운 항목을 입력하고 추가할 수 있는 컴포넌트
// state를 통해 인풋의 상태를 관리
const TodoInsert = ({onInsert}) => {
  const [value, setValue] = useState(''); //인풋에 입력하는 값을 관리

  // 함수를 한 번만 만들고 재사용하기 위해 useCallback(cb, []) 사용 (두번째 param.에 비어있는 배열 -> 처음 렌더링 될 때만 함수 생성)
  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e=>{
      onInsert(value);
      setValue(''); //value 값 초기화

      // submit 이벤트는 브라우저에서 새로고침을 발생시키므로, 이를 방지함
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className={"TodoInsert"} onSubmit={onSubmit}>
      <input placeholder={"할 일을 입력하세요"}
      value={value}
      onChange={onChange}
      />
      {/* click 과 달리, submit 으로 하면 엔터키로도 이벤트가 발생함. click 에서 엔터 이벤트를 주려면 onKeyPress 로 구현해야 함 */}
      <button type={'submit'}>
        <MdAdd />
      </button>
    </form>
  )
}

export default TodoInsert;