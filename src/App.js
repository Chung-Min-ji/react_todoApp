import {useState, useRef, useCallback} from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링해 보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);

  // todos 배열에 새 객체를 추가할 때, 고윳값으로 사용될 id
  // id값은 렌더링 되는 정보가 아니고, 이 값이 바뀐다고 해서 리렌더링 될 필요도 없으므로 useRef 를 통해 로컬변수로 관리
  const nextId = useRef(4);

  // todos 배열에 새 객체를 추가하는 함수
  // props 로 전달해야 할 함수를 만들 때는 useCallback 으로 함수를 감싸야 성능을 아낄 수 있음
  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current, //useRef를 통해 만든 객체의 current 값이 실제 값임
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; //nextId 1씩 더하기
    },
    [todos], //todos 가 바뀌면 함수 생성
  )

  // id를 받아와서 todos 배열에서 지우는 함수
  // 배열의 불변성을 지키면서 배열 원소를 제거하는 filter 함수 사용
  const onRemove = useCallback(
    id=>{
      setTodos(todos.filter(todo => todo.id !== id)); // filter의 파라미터는 boolean을 return 해야 함. true인 경우에만 새로운 배열에 포함.
    },
    [todos],
  );

  return(
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove}/>
    </TodoTemplate>
  )
}

export default App;
